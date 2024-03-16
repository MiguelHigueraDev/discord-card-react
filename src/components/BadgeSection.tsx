import { Badge } from "../interfaces/Badge";
import styles from "../styles/BadgeSection.module.css";

/**
 * Renders a list of badges in a <ul> container.
 *
 * @param {Badge[]} badges - An array of Badge objects
 * @return {JSX.Element} The list of badges rendered as JSX
 */
const BadgeSection = ({ badges }: { badges: Badge[] }) => {
  return (
    <ul className={styles["discord-badges-container"]}>
      {badges.map((badge) => (
        <li key={badge.name}>
          <img src={badge.iconUrl} className={styles["discord-badge"]} alt={badge.name} />
        </li>
      ))}
    </ul>
  );
};

export default BadgeSection;
