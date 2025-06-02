import { Badge } from "../types";
import styles from "../styles/BadgeSection.module.css";

/**
 * Renders a list of badges in a <ul> container.
 *
 * @param {Badge[]} badges - An array of Badge objects
 * @return {JSX.Element} The list of badges rendered as JSX
 */
const BadgeSection = ({ badges }: { badges: Badge[] }) => {
  return (
    <ul className={styles.badgeContainer}>
      {badges.map((badge) => (
        <li key={badge.name}>
          <img
            src={badge.iconUrl}
            className={styles.badgeIcon}
            alt={badge.name}
          />
        </li>
      ))}
    </ul>
  );
};

export default BadgeSection;
