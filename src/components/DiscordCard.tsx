import React from "react";
import { Badge } from "../interfaces/Badge";
import { BasicInfoSectionProps } from "../interfaces/BasicInfoSectionProps";
import { StatusSectionProps } from "../interfaces/StatusSectionProps";
import { AboutMeSectionProps } from "../interfaces/AboutMeSectionProps";
import { MemberSinceSectionProps } from "../interfaces/MemberSinceSectionProps";
import { RoleSectionProps } from "../interfaces/RoleSectionProps";
import { NoteSectionProps } from "../interfaces/NoteSectionProps";
import { MessageSectionProps } from "../interfaces/MessageSectionProps";
import { SpotifySectionProps } from "../interfaces/SpotifySectionProps";
import BaseDiscordCard from "./BaseDiscordCard";
import { ConnectionStatus } from "../interfaces/ConnectionStatus";
import BasicInfoSection from "./BasicInfoSection";
import Separator from "./Separator";
import StatusSection from "./StatusSection";
import AboutMeSection from "./AboutMeSection";
import MemberSinceSection from "./MemberSinceSection";
import RoleSection from "./RoleSection";
import NoteSection from "./NoteSection";
import MessageSection from "./MessageSection";
import SpotifySection from "./SpotifySection";
import { GameSectionProps } from "../interfaces/GameSectionProps";
import GameSection from "./GameSection";

const DiscordCard = ({
  imageUrl,
  bannerUrl,
  primaryColor,
  accentColor,
  basicInfo,
  connectionStatus = "online",
  badges,
  status,
  aboutMe,
  memberSince,
  roles,
  note,
  message,
  spotify,
  game,
  children,
}: {
  imageUrl: string;
  bannerUrl: string;
  primaryColor: string;
  accentColor: string;
  basicInfo: BasicInfoSectionProps;
  connectionStatus?: ConnectionStatus;
  badges?: Badge[];
  status?: StatusSectionProps;
  aboutMe?: AboutMeSectionProps;
  memberSince?: MemberSinceSectionProps;
  roles?: RoleSectionProps;
  note?: NoteSectionProps;
  message?: MessageSectionProps;
  spotify?: SpotifySectionProps;
  game?: GameSectionProps;
  children?: React.JSX.Element | React.JSX.Element[];
}) => {
  return (
    <BaseDiscordCard
      imageUrl={imageUrl}
      bannerUrl={bannerUrl}
      primaryColor={primaryColor}
      accentColor={accentColor}
      badges={badges}
      connectionStatus={connectionStatus}
    >
      <>
        <>
          <BasicInfoSection {...basicInfo} />
          <>{status == null && <Separator />}</>
        </>
        {status && (
          <>
            <StatusSection {...status} />
            <Separator />
          </>
        )}
        {aboutMe && <AboutMeSection {...aboutMe} />}
        {memberSince && <MemberSinceSection {...memberSince} />}
        {spotify && <SpotifySection {...spotify} />}
        {game && <GameSection {...game} />}
        {roles && <RoleSection {...roles} />}
        {note && <NoteSection {...note} />}
        {message && <MessageSection {...message} />}
      </>
      <>{children}</>
    </BaseDiscordCard>
  );
};

export default DiscordCard;
