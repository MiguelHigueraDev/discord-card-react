import BaseDiscordCard from "./base-discord-card";
import { Activity, useLanyard } from "react-use-lanyard";
import BasicInfoSection from "./sections/basic-info";
import StatusSection from "./sections/status";
import AboutMeSection from "./sections/about-me";
import Separator from "./Separator";
import MemberSinceSection from "./sections/member-since";
import RoleSection from "./sections/role";
import NoteSection from "./sections/note";
import MessageSection from "./sections/message";
import SpotifySection from "./sections/spotify";
import ActivitySection from "./sections/activity";
import { ReactNode } from "react";
import {
  BasicInfoSectionProps,
  Badge,
  StatusSectionProps,
  AboutMeSectionProps,
  MemberSinceSectionProps,
  RoleSectionProps,
  NoteSectionProps,
  MessageSectionProps,
  LanyardActivitySectionProps,
  LanyardSpotifySectionProps,
  ActivityPriority,
} from "../types";
import styles from "../styles/BaseDiscordCard.module.css";

const LanyardDiscordCard = ({
  userId,
  apiUrl,
  imageUrl,
  bannerUrl,
  primaryColor,
  accentColor,
  basicInfo,
  badges,
  status,
  aboutMe,
  memberSince,
  activity = {
    title: "Playing a game",
    show: true,
    showElapsedTime: true,
    timeElapsedText: "elapsed",
    timeAlignment: "left",
  },
  spotify = {
    show: true,
    title: "Listening to Spotify",
    buttonText: "Play on Spotify",
    byText: "by",
    onText: "on",
  },
  roles,
  note,
  message,
  priority = "default",
  maxActivities = 2,
  children,
}: {
  userId: string;
  apiUrl?: string;
  imageUrl: string;
  bannerUrl: string;
  primaryColor: string;
  accentColor: string;
  basicInfo: BasicInfoSectionProps;
  badges?: Badge[];
  status?: StatusSectionProps;
  aboutMe?: AboutMeSectionProps;
  memberSince?: MemberSinceSectionProps;
  activity?: LanyardActivitySectionProps;
  spotify?: LanyardSpotifySectionProps;
  roles?: RoleSectionProps;
  note?: NoteSectionProps;
  message?: MessageSectionProps;
  priority?: ActivityPriority;
  maxActivities?: number;
  children?: React.JSX.Element | React.JSX.Element[];
}) => {
  const { status: lanyardData } = useLanyard({
    userId,
    socket: true,
    apiUrl,
  });

  // Activities with type 0 are games
  const activities =
    lanyardData && lanyardData.activities
      ? lanyardData.activities
          .filter((ac) => ac.type === 0)
          .slice(0, maxActivities)
      : null;

  const renderSpotifySection = () => {
    if (spotify.show && lanyardData && lanyardData.spotify) {
      return (
        <SpotifySection
          title={spotify.title}
          primaryColor={primaryColor}
          artist={lanyardData.spotify.artist}
          song={lanyardData.spotify.song}
          album={lanyardData.spotify.album}
          artUrl={lanyardData.spotify.album_art_url}
          trackUrl={`https://open.spotify.com/track/${lanyardData.spotify.track_id}`}
          startTimeMs={lanyardData.spotify.timestamps.start}
          endTimeMs={lanyardData.spotify.timestamps.end}
          playOnSpotifyText={spotify.buttonText}
          byText={spotify.byText}
          onText={spotify.onText}
        />
      );
    }
  };

  /*
   * This handles external assets in case they are present to display the correct image
   */
  const getImageUrls = (activity: Activity) => {
    const largeImageId = activity.assets?.large_image;
    const smallImageId = activity.assets?.small_image;
    let largeImageExternalUrl = null;
    let smallImageExternalUrl = null;

    if (largeImageId?.startsWith("mp:external")) {
      const largeImageUrlParts = largeImageId.split("/");
      largeImageExternalUrl = largeImageUrlParts.slice(3).join("/");
    }

    if (smallImageId?.startsWith("mp:external")) {
      const smallImageUrlParts = smallImageId.split("/");
      smallImageExternalUrl = smallImageUrlParts.slice(3).join("/");
    }

    return {
      largeImageId,
      smallImageId,
      largeImageExternalUrl,
      smallImageExternalUrl,
    };
  };

  const renderActivitiesSection = (): ReactNode[] => {
    if (!activity.show || !activities || activities.length === 0) {
      return [];
    }

    return activities.map((currentActivity) => {
      const {
        largeImageId,
        smallImageId,
        largeImageExternalUrl,
        smallImageExternalUrl,
      } = getImageUrls(currentActivity);

      const largeImage = largeImageExternalUrl
        ? `http://${largeImageExternalUrl}`
        : currentActivity.assets?.large_image
        ? `https://cdn.discordapp.com/app-assets/${currentActivity.application_id}/${largeImageId}.webp?size=80`
        : undefined;

      const smallImage = smallImageExternalUrl
        ? `http://${smallImageExternalUrl}`
        : currentActivity.assets?.small_image
        ? `https://cdn.discordapp.com/app-assets/${currentActivity.application_id}/${smallImageId}.webp?size=80`
        : undefined;

      const party = currentActivity.party
        ? {
            // @ts-expect-error - TS doesn't know that size is an array
            currentSize: currentActivity.party.size?.[0] ?? null,
            // @ts-expect-error - TS doesn't know that size is an array
            maxSize: currentActivity.party.size?.[1] ?? null,
          }
        : undefined;

      const startTime =
        currentActivity.timestamps?.start && activity.showElapsedTime
          ? currentActivity.timestamps.start
          : undefined;

      const buttonText = currentActivity.buttons?.[0];

      return (
        <ActivitySection
          key={currentActivity.id}
          title={activity.title}
          primaryColor={primaryColor}
          largeImage={largeImage}
          smallImage={smallImage}
          applicationId={currentActivity.application_id}
          name={currentActivity.name}
          state={currentActivity.state}
          details={currentActivity.details}
          party={party}
          elapsedText={activity.timeElapsedText}
          timeAlignment={activity.timeAlignment}
          startTime={startTime}
          buttonText={buttonText}
        />
      );
    });
  };

  const renderSections = () => {
    if (priority === "spotify") {
      if (spotify.show && lanyardData && lanyardData.spotify) {
        return renderSpotifySection();
      }
      return renderActivitiesSection();
    } else if (priority === "activity" || priority === "default") {
      if (activity.show && activities && activities.length > 0) {
        return renderActivitiesSection();
      }
      return renderSpotifySection();
    } else {
      return (
        <>
          {renderSpotifySection()}
          {renderActivitiesSection()}
        </>
      );
    }
  };

  return (
    <BaseDiscordCard
      imageUrl={imageUrl}
      bannerUrl={bannerUrl}
      primaryColor={primaryColor}
      accentColor={accentColor}
      badges={badges}
      connectionStatus={lanyardData ? lanyardData.discord_status : "offline"}
    >
      <>
        <BasicInfoSection {...basicInfo} />
        <>{status == null && <Separator />}</>
        {status && (
          <>
            <StatusSection {...status} />
            <Separator />
          </>
        )}
        <div className={styles.spaceY2}>
          {aboutMe && <AboutMeSection {...aboutMe} />}
          {memberSince && <MemberSinceSection {...memberSince} />}
          {renderSections()}
          {roles && <RoleSection {...roles} />}
          {note && <NoteSection {...note} />}
          {message && <MessageSection {...message} />}
        </div>
      </>

      <>{children}</>
    </BaseDiscordCard>
  );
};

export default LanyardDiscordCard;
