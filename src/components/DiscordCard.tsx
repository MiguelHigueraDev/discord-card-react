import "./DiscordCard.css";
import BadgeSection from "./BadgeSection";
import { Badge } from "../interfaces/Badge";
import { Status } from "../interfaces/Status";

const DiscordCard = ({
  imageUrl,
  bannerUrl,
  primaryColor,
  accentColor,
  badges,
  status = "online",
  children,
}: {
  imageUrl: string;
  bannerUrl: string;
  primaryColor: string;
  accentColor: string;
  badges?: Badge[];
  status?: Status;
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
            className="discord-profile-picture"
            style={{
              background: `linear-gradient(to bottom, ${primaryColor} 60%, transparent 40%)`,
            }}
          />
        </div>
        <img src={bannerUrl} className="discord-banner-image" />
        <div className="discord-card-status-container">
            <img src={`${status}.png`} className="discord-card-status-icon" />
        </div>
        {badges && <BadgeSection badges={badges} />}
      </div>
      <div className="discord-card-outer-body">
        <div className="discord-card-inner-body">{children}</div>
      </div>
    </div>
  );
};

export default DiscordCard;
