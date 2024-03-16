import { Badge } from "../interfaces/Badge";

/**
 * Renders a list of badges in a <ul> container.
 *
 * @param {Badge[]} badges - An array of Badge objects
 * @return {JSX.Element} The list of badges rendered as JSX
 */
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
