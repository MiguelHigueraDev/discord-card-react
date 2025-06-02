import React from "react";
import BaseDiscordCard from "./base-discord-card";
import BasicInfoSection from "./sections/basic-info";
import StatusSection from "./sections/status";
import AboutMeSection from "./sections/about-me";
import MemberSinceSection from "./sections/member-since";
import RoleSection from "./sections/role";
import NoteSection from "./sections/note";
import MessageSection from "./sections/message";
import SpotifySection from "./sections/spotify";
import ActivitySection from "./sections/activity";
import {
  BasicInfoSectionProps,
  ConnectionStatus,
  Badge,
  StatusSectionProps,
  AboutMeSectionProps,
  MemberSinceSectionProps,
  RoleSectionProps,
  NoteSectionProps,
  MessageSectionProps,
  SpotifySectionProps,
  ActivitySectionProps,
} from "../types";
import styles from "../styles/BaseDiscordCard.module.css";
import Separator from "./separator";

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
        <div className={styles.spaceY2}>
          {aboutMe && <AboutMeSection {...aboutMe} />}
          {memberSince && <MemberSinceSection {...memberSince} />}
          {spotify && (
            <SpotifySection {...spotify} primaryColor={primaryColor} />
          )}
          {activity && (
            <ActivitySection {...activity} primaryColor={primaryColor} />
          )}
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
