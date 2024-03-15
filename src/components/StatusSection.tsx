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
