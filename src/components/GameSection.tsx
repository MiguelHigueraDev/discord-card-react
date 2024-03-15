const GameSection = ({
  title,
  name,
  state,
  details,
  largeImage,
  smallImage,
}: {
  title?: string;
  name?: string;
  state?: string;
  details?: string;
  largeImage?: string;
  smallImage?: string;
}) => {
  return (
    <section className="discord-card-section">
      <div className="discord-card-activity-header">
        {title ? <h3>{title}</h3> : <h3>Playing a game</h3>}
      </div>
      <div className="discord-card-activity-body"></div>
    </section>
  );
};

export default GameSection;
