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
              <SpotifySection artist={lanyard.spotify.artist} song={lanyard.spotify.song} album={lanyard.spotify.album} artUrl={lanyard.spotify.album_art_url} />
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
