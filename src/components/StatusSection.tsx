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
    <section className="flex items-center justify-start gap-2">
      {iconUrl && <img src={iconUrl} className="w-5 h-5 text-[0.8rem]" alt="" />}
      {emoji && <p className="w-5 h-5 text-[0.8rem]">{emoji}</p>}
      <p className="text-[0.95rem] text-start">{status}</p>
    </section>
  );
};

export default StatusSection;
