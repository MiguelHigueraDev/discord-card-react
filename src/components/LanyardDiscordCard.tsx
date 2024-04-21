import BaseDiscordCard from "./BaseDiscordCard";
import { useLanyard } from "react-use-lanyard";
import { Badge } from "../interfaces/Badge";
import { BasicInfoSectionProps } from "../interfaces/BasicInfoSectionProps";
import { AboutMeSectionProps } from "../interfaces/AboutMeSectionProps";
import { StatusSectionProps } from "../interfaces/StatusSectionProps";
import { MemberSinceSectionProps } from "../interfaces/MemberSinceSectionProps";
import { RoleSectionProps } from "../interfaces/RoleSectionProps";
import BasicInfoSection from "./BasicInfoSection";
import StatusSection from "./StatusSection";
import AboutMeSection from "./AboutMeSection";
import Separator from "./Separator";
import MemberSinceSection from "./MemberSinceSection";
import RoleSection from "./RoleSection";
import { MessageSectionProps } from "../interfaces/MessageSectionProps";
import { NoteSectionProps } from "../interfaces/NoteSectionProps";
import NoteSection from "./NoteSection";
import MessageSection from "./MessageSection";
import SpotifySection from "./SpotifySection";
import ActivitySection from "./ActivitySection";
import { ActivityPriority } from "../interfaces/ActivityPriority";
import { LanyardActivitySectionProps } from "../interfaces/lanyard/LanyardActivitySectionProps";
import { LanyardSpotifySectionProps } from "../interfaces/lanyard/LanyardSpotifySectionProps";

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
  children?: React.JSX.Element | React.JSX.Element[];
}) => {
  const { status: lanyardData } = useLanyard({
    userId,
    socket: true,
    apiUrl,
  });

  const currentActivity =
    lanyardData && lanyardData.activities
      ? lanyardData.activities.find((ac) => ac.type === 0)
      : null;

  // This handles external assets in case they are present
  const largeImageId = currentActivity?.assets?.large_image;
  const smallImageId = currentActivity?.assets?.small_image;
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

  const renderSpotifySection = () => {
    if (spotify.show !== false && lanyardData && lanyardData.spotify) {
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
  const renderActivitySection = () => {
    if (activity.show !== false && currentActivity) {
      return (
        <ActivitySection
          title={activity.title}
          primaryColor={primaryColor}
          largeImage={
            largeImageExternalUrl
              ? `http://${largeImageExternalUrl}`
              : currentActivity.assets?.large_image
              ? `https://cdn.discordapp.com/app-assets/${currentActivity.application_id}/${largeImageId}.webp?size=80`
              : undefined
          }
          smallImage={
            smallImageExternalUrl
              ? `http://${smallImageExternalUrl}`
              : currentActivity.assets?.small_image
              ? `https://cdn.discordapp.com/app-assets/${currentActivity.application_id}/${smallImageId}.webp?size=80`
              : undefined
          }
          applicationId={currentActivity.application_id}
          name={currentActivity.name}
          state={currentActivity.state}
          details={currentActivity.details}
          // Only render party if it's not null
          {...(currentActivity.party && {
            party: {
              currentSize: currentActivity.party.size
                ? // @ts-expect-error: Party could be null
                  currentActivity.party.size[0]
                : null,
              maxSize: currentActivity.party.size
                ? // @ts-expect-error: Party could be null
                  currentActivity.party.size[1]
                : null,
            },
          })}
          // Only render elapsed time if not null and displayElapsedTime is true
          elapsedText={activity.timeElapsedText}
          timeAlignment={activity.timeAlignment}
          {...(currentActivity.timestamps?.start &&
            activity.showElapsedTime && {
              startTime: currentActivity.timestamps.start,
            })}
          // If present, pass the first button's text to the component
          {...(currentActivity.buttons && {
            buttonText: currentActivity.buttons[0],
          })}
        />
      );
    }
  };

  const renderSections = () => {
    if (priority === "spotify") {
      if (spotify.show && lanyardData && lanyardData.spotify) {
        return renderSpotifySection();
      }
      return renderActivitySection();
    } else if (priority === "activity" || priority === "default") {
      if (activity.show && currentActivity) {
        return renderActivitySection();
      }
      return renderSpotifySection();
    } else {
      return (
        <>
          {renderSpotifySection()}
          {renderActivitySection()}
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
        <div className="space-y-2">
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
