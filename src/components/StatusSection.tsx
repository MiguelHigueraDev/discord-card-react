const StatusSection = ({ iconUrl, status }: { iconUrl?: string; status: string }) => {
  return (
    <section className="discord-status-container">
      {iconUrl && <img src={iconUrl} className="discord-status-image" />}
      <p className="discord-status-text text">{status}</p>
    </section>
  );
};

export default StatusSection;
