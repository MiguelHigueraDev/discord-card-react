import DiscordCard from "./DiscordCard";
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

const LanyardDiscordCard = ({
  userId,
  imageUrl,
  bannerUrl,
  primaryColor,
  accentColor,
  badges,
  basicInfo,
  status,
  aboutMe,
  memberSince,
  roles,
  note,
  message,
  showSpotify = true,
  showGames = true,
  children,
}: {
  userId: string;
  imageUrl: string;
  bannerUrl: string;
  primaryColor: string;
  accentColor: string;
  badges?: Badge[];
  basicInfo?: BasicInfoSectionProps;
  status?: StatusSectionProps;
  aboutMe?: AboutMeSectionProps;
  memberSince?: MemberSinceSectionProps;
  roles?: RoleSectionProps;
  note?: NoteSectionProps;
  message?: MessageSectionProps;
  showSpotify?: boolean;
  showGames?: boolean;
  children?: React.JSX.Element | React.JSX.Element[];
}) => {
  const { status: lanyard } = useLanyard({
    userId,
    socket: true,
  });

  const currentGame =
    lanyard && lanyard.activities
      ? lanyard.activities.find((ac) => ac.type === 0)
      : null;

  return (
    <DiscordCard
      imageUrl={imageUrl}
      bannerUrl={bannerUrl}
      primaryColor={primaryColor}
      accentColor={accentColor}
      badges={badges}
      status={lanyard ? lanyard.discord_status : "offline"}
    >
      <>
        {basicInfo && (
          <>
            <BasicInfoSection {...basicInfo} />
            <>{status == null && <Separator />}</>
          </>
        )}
        {status && (
          <>
            <StatusSection {...status} />
            <Separator />
          </>
        )}
        {aboutMe && <AboutMeSection {...aboutMe} />}
        {memberSince && <MemberSinceSection {...memberSince} />}
        {lanyard && (
          <>
            {showSpotify && lanyard.spotify && (
              <SpotifySection
                artist={lanyard.spotify.artist}
                song={lanyard.spotify.song}
                album={lanyard.spotify.album}
                artUrl={lanyard.spotify.album_art_url}
                trackUrl={`https://open.spotify.com/track/${lanyard.spotify.track_id}`}
              />
            )}
            {showGames && currentGame && (
              <GameSection
                largeImage={currentGame.assets?.large_image}
                smallImage={currentGame.assets?.small_image}
                applicationId={currentGame.application_id}
                name={currentGame.name}
                state={currentGame.state}
                details={currentGame.details}
                // Only render party if it's not null
                {...(currentGame.party && {
                  party: {
                    // @ts-expect-error Party could be null
                    currentSize: currentGame.party.size ? currentGame.party.size[0] : null,
                    // @ts-expect-error Party could be null
                    maxSize: currentGame.party.size ? currentGame.party.size[1] : null,
                  },
                })}
              />
            )}
          </>
        )}
        {roles && <RoleSection {...roles} />}
        {note && <NoteSection {...note} />}
        {message && <MessageSection {...message} />}
      </>

      <>{children}</>
    </DiscordCard>
  );
};

export default LanyardDiscordCard;
