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
import { ActivitySectionProps } from "../interfaces/ActivitySectionProps";
import ActivitySection from "./ActivitySection";

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
  activity,
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
  activity?: ActivitySectionProps;
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
        <div className="space-y-2">
          {aboutMe && <AboutMeSection {...aboutMe} />}
          {memberSince && <MemberSinceSection {...memberSince} />}
          {spotify && <SpotifySection {...spotify} primaryColor={primaryColor}/>}
          {activity && <ActivitySection {...activity} primaryColor={primaryColor} />}
          {roles && <RoleSection {...roles} />}
          {note && <NoteSection {...note} />}
          {message && <MessageSection {...message} />}
        </div>
      </>
      <>{children}</>
    </BaseDiscordCard>
  );
};

export default DiscordCard;
