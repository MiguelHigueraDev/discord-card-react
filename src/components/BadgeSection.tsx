import { Badge } from "../interfaces/Badge";

const BadgeSection = ({ badges }: { badges: Badge[] }) => {
  return (
    <ul className="discord-badges-container">
      {badges.map((badge) => (
        <li key={badge.name}>
          <img src={badge.iconUrl} className="discord-badge" alt={badge.name} />
        </li>
      ))}
    </ul>
  );
};

export default BadgeSection;
