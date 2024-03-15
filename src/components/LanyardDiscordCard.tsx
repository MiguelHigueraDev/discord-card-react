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
  pronouns?: string;
  children?: React.JSX.Element | React.JSX.Element[];
}) => {
  const { status: lanyardStatus } = useLanyard({
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
      status={lanyardStatus ? lanyardStatus.discord_status : "offline"}
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
        {aboutMe && (
          <AboutMeSection {...aboutMe} />
        )}
        {memberSince && <MemberSinceSection {...memberSince} />}
        {roles && <RoleSection {...roles} />}
      </>

      <>{children}</>
    </DiscordCard>
  );
};

export default LanyardDiscordCard;
