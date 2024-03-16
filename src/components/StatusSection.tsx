import styles from "../styles/StatusSection.module.css";
/**
 * Renders a status section component with an optional icon, emoji, and status text.
 *
 * @param {string} iconUrl - The URL for the icon image.
 * @param {string} emoji - The emoji to display.
 * @param {string} status - The status text to display.
 * @return {JSX.Element} The rendered status section component.
 */
const StatusSection = ({
  iconUrl,
  emoji,
  status,
}: {
  iconUrl?: string;
  emoji?: string;
  status: string;
}) => {
  return (
    <section className={styles["discord-status-container"]}>
      {iconUrl && <img src={iconUrl} className={styles["discord-status-image"]} alt="" />}
      {emoji && <p className={styles["discord-status-image"]}>{emoji}</p>}
      <p className={styles["discord-status-text"]}>{status}</p>
    </section>
  );
};

export default StatusSection;
