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
    <section className="discord-status-container">
      {iconUrl && <img src={iconUrl} className="discord-status-image" alt="" />}
      {emoji && <p className="discord-status-image">{emoji}</p>}
      <p className="discord-status-text text">{status}</p>
    </section>
  );
};

export default StatusSection;
