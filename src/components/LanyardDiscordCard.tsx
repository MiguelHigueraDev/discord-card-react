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
  children?: React.JSX.Element | React.JSX.Element[];
}) => {
  const { status: lanyard } = useLanyard({
    userId,
    socket: true,
    apiUrl,
  });

  const currentGame =
    lanyard && lanyard.activities
      ? lanyard.activities.find((ac) => ac.type === 0)
      : null;

  /**
   * Renders sections based on priority
   * If priority is "spotify" and showSpotify is true, and Spotify is not null render SpotifySection
   * If priority is "game" and showGames is true, and currentGame is not null render GameSection
   * If priority is "default", behavior is the same as "spotify" (This is how Discord behaves)
   * If priority is "none", render both SpotifySection and GameSection if they are not null
   * WARNING: MESSY CODE
   */
  const renderSections = () => {
    if (priority === "spotify") {
      if (showSpotify && lanyard && lanyard.spotify) {
        return (
          <SpotifySection
            title={spotifyTitle}
            artist={lanyard.spotify.artist}
            song={lanyard.spotify.song}
            album={lanyard.spotify.album}
            artUrl={lanyard.spotify.album_art_url}
            trackUrl={`https://open.spotify.com/track/${lanyard.spotify.track_id}`}
          />
        );
      } else {
        if (showGames && currentGame) {
          return (
            <GameSection
              title={gameTitle}
              largeImage={
                currentGame.assets?.large_image
                  ? `https://cdn.discordapp.com/app-assets/${currentGame.application_id}/${currentGame.assets.large_image}.png`
                  : undefined
              }
              smallImage={
                currentGame.assets?.small_image
                  ? `https://cdn.discordapp.com/app-assets/${currentGame.application_id}/${currentGame.assets.small_image}.png`
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
            />
          );
        }
      }
    } else if (priority === "game" || priority === "default") {
      if (showGames && currentGame) {
        return (
          <GameSection
            title={gameTitle}
            largeImage={
              currentGame.assets?.large_image
                ? `https://cdn.discordapp.com/app-assets/${currentGame.application_id}/${currentGame.assets.large_image}.png`
                : undefined
            }
            smallImage={
              currentGame.assets?.small_image
                ? `https://cdn.discordapp.com/app-assets/${currentGame.application_id}/${currentGame.assets.small_image}.png`
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
          />
        );
      } else if (showSpotify && lanyard && lanyard.spotify) {
        return (
          <SpotifySection
            title={spotifyTitle}
            artist={lanyard.spotify.artist}
            song={lanyard.spotify.song}
            album={lanyard.spotify.album}
            artUrl={lanyard.spotify.album_art_url}
            trackUrl={`https://open.spotify.com/track/${lanyard.spotify.track_id}`}
          />
        );
      }
    } else {
      // Render both
      return (
        <>
          {currentGame && showGames && (
            <GameSection
              title={gameTitle}
              largeImage={
                currentGame.assets?.large_image
                  ? `https://cdn.discordapp.com/app-assets/${currentGame.application_id}/${currentGame.assets.large_image}.png`
                  : undefined
              }
              smallImage={
                currentGame.assets?.small_image
                  ? `https://cdn.discordapp.com/app-assets/${currentGame.application_id}/${currentGame.assets.small_image}.png`
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
            />
          )}
          {showSpotify && lanyard && lanyard.spotify && (
            <SpotifySection
              title={spotifyTitle}
              artist={lanyard.spotify.artist}
              song={lanyard.spotify.song}
              album={lanyard.spotify.album}
              artUrl={lanyard.spotify.album_art_url}
              trackUrl={`https://open.spotify.com/track/${lanyard.spotify.track_id}`}
            />
          )}
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
      connectionStatus={lanyard ? lanyard.discord_status : "offline"}
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
