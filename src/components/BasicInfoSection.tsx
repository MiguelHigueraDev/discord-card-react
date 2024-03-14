const BasicInfoSection = ({
  displayname,
  username,
  pronouns,
}: {
  displayname?: string;
  username?: string;
  pronouns?: string;
}) => {
  return (
    <section className="discord-card-basic-info">
      {displayname && (
        <h1 className="discord-card-displayname text">{displayname}</h1>
      )}
      {username && <h2 className="discord-card-username text">{username}</h2>}
      {username && <p className="discord-card-pronouns text">{pronouns}</p>}
    </section>
  );
};

export default BasicInfoSection;
