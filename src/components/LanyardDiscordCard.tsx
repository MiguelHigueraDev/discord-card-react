import DiscordCard from "./DiscordCard";
import { useLanyard } from "react-use-lanyard";
import { Badge } from "../interfaces/Badge";

const LanyardDiscordCard = ({
  userId,
  imageUrl,
  bannerUrl,
  primaryColor,
  accentColor,
  badges,
  children
}: {
  userId: string;
  imageUrl: string;
  bannerUrl: string;
  primaryColor: string;
  accentColor: string;
  badges?: Badge[];
  pronouns?: string;
  children?: React.JSX.Element | React.JSX.Element[];
}) => {
  const { status } = useLanyard({
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
      status={status ? status.discord_status : "offline"}
    >
      <>
        {children}
      </>
    </DiscordCard>
  );
};

export default LanyardDiscordCard;
