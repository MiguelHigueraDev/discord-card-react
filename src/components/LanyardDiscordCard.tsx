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
import GameSection from "./GameSection";
import { ActivityPriority } from "../interfaces/ActivityPriority";

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
  roles,
  note,
  message,
  spotifyTitle = "Listening to Spotify",
  gameTitle = "Playing a game",
  showSpotify = true,
  showGames = true,
  priority = "default",
  displayElapsedTime = true,
  timeElapsedText = "elapsed",
  timeAlignment = "left",
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
  roles?: RoleSectionProps;
  note?: NoteSectionProps;
  message?: MessageSectionProps;
  spotifyTitle?: string;
  gameTitle?: string;
  showSpotify?: boolean;
  showGames?: boolean;
  priority?: ActivityPriority;
  displayElapsedTime?: boolean;
  timeElapsedText?: string;
  timeAlignment?: "left" | "right";
  children?: React.JSX.Element | React.JSX.Element[];
}) => {
  const { status: lanyardData } = useLanyard({
    userId,
    socket: true,
    apiUrl,
  });

  const currentGame =
    lanyardData && lanyardData.activities
      ? lanyardData.activities.find((ac) => ac.type === 0)
      : null;

  const renderSpotifySection = () => {
    if (showSpotify && lanyardData && lanyardData.spotify) {
      return (
        <SpotifySection
          title={spotifyTitle}
          artist={lanyardData.spotify.artist}
          song={lanyardData.spotify.song}
          album={lanyardData.spotify.album}
          artUrl={lanyardData.spotify.album_art_url}
          trackUrl={`https://open.spotify.com/track/${lanyardData.spotify.track_id}`}
          startTimeMs={lanyardData.spotify.timestamps.start}
          endTimeMs={lanyardData.spotify.timestamps.end}
        />
      );
    }
  };
  const renderActivitySection = () => {
    if (showGames && currentGame) {
      return (
        <GameSection
          title={gameTitle}
          largeImage={
            currentGame.assets?.large_image
              ? `https://cdn.discordapp.com/app-assets/${currentGame.application_id}/${currentGame.assets.large_image}.webp?size=80`
              : undefined
          }
          smallImage={
            currentGame.assets?.small_image
              ? `https://cdn.discordapp.com/app-assets/${currentGame.application_id}/${currentGame.assets.small_image}.webp?size=80`
              : undefined
          }
          applicationId={currentGame.application_id}
          name={currentGame.name}
          state={currentGame.state}
          details={currentGame.details}
          // Only render party if it's not null
          {...(currentGame.party && {
            party: {
              currentSize: currentGame.party.size
                ? // @ts-expect-error: Party could be null
                  currentGame.party.size[0]
                : null,
              maxSize: currentGame.party.size
                ? // @ts-expect-error: Party could be null
                  currentGame.party.size[1]
                : null,
            },
          })}
          // Only render elapsed time if not null and displayElapsedTime is true
          elapsedText={timeElapsedText}
          timeAlignment={timeAlignment}
          {...(currentGame.timestamps?.start &&
            displayElapsedTime && {
              startTime: currentGame.timestamps.start,
            })}
          // If present, pass the first button's text to the component
          {...(currentGame.buttons && {
            buttonText: currentGame.buttons[0],
          })}
        />
      );
    }
  };

  /**
   * Renders sections based on priority
   * If priority is "spotify" and showSpotify is true, and Spotify is not null render SpotifySection
   * If priority is "game" and showGames is true, and currentGame is not null render GameSection
   * If priority is "default", behavior is the same as "game" (This is how Discord behaves)
   * If priority is "none", render both SpotifySection and GameSection if they are not null
   */
  const renderSections = () => {
    if (priority === "spotify") {
      if (showSpotify && lanyardData && lanyardData.spotify) {
        return renderSpotifySection();
      }
      return renderActivitySection();
    } else if (priority === "game" || priority === "default") {
      if (showGames && currentGame) {
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
        {aboutMe && <AboutMeSection {...aboutMe} />}
        {memberSince && <MemberSinceSection {...memberSince} />}
        {renderSections()}
        {roles && <RoleSection {...roles} />}
        {note && <NoteSection {...note} />}
        {message && <MessageSection {...message} />}
      </>

      <>{children}</>
    </BaseDiscordCard>
  );
};

export default LanyardDiscordCard;
