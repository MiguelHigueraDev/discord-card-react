import "./DiscordCard.css";

import BadgeSection from "./BadgeSection";

const DiscordCard = ({
  imageUrl,
  bannerUrl,
  primaryColor,
  accentColor,
  children
}: {
  imageUrl: string;
  bannerUrl: string;
  primaryColor: string;
  accentColor: string;
  children: React.JSX.Element | React.JSX.Element[]
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
        <BadgeSection
          badges={[
            { name: "Active Developer", iconUrl: "developer-badge.png" },
          ]}
        />
      </div>
      <div className="discord-card-outer-body">
        <div className="discord-card-inner-body">
            {children}
        </div>
      </div>
    </div>
  );
};

export default DiscordCard;
