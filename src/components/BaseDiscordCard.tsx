import "./DiscordCard.css";
import BadgeSection from "./BadgeSection";
import { Badge } from "../interfaces/Badge";
import { ConnectionStatus } from "../interfaces/ConnectionStatus";

const BaseDiscordCard = ({
  imageUrl,
  bannerUrl,
  primaryColor,
  accentColor,
  badges,
  connectionStatus = "online",
  children,
}: {
  imageUrl: string;
  bannerUrl: string;
  primaryColor: string;
  accentColor: string;
  badges?: Badge[];
  connectionStatus?: ConnectionStatus;
  children: React.JSX.Element | React.JSX.Element[];
}) => {
  return (
    <div
      className="discord-card-border"
      style={{
        background: `linear-gradient(to bottom, ${primaryColor}, ${accentColor})`,
      }}
    >
      <div className="discord-banner-container">
        <div className="discord-profile-picture-border">
          <img
            src={imageUrl}
            alt="Discord profile picture"
            className="discord-profile-picture"
            style={{
              background: `linear-gradient(to bottom, ${primaryColor} 60%, transparent 40%)`,
            }}
          />
        </div>
        <img src={bannerUrl} className="discord-banner-image" alt="" />
        <div className="discord-card-status-container">
            <img src={`${connectionStatus}.png`} className="discord-card-status-icon" alt="" aria-label={`This user's status is ${connectionStatus}`} />
        </div>
        {badges && <BadgeSection badges={badges} />}
      </div>
      <div className="discord-card-outer-body">
        <div className="discord-card-inner-body">{children}</div>
      </div>
    </div>
  );
};

export default BaseDiscordCard;
