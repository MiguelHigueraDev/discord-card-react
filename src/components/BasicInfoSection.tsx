/**
 * Renders a basic info section with display name, username, and pronouns.
 *
 * @param {{displayname?: string; username?: string; pronouns?: string;}} - Object with optional display name, username, and pronouns
 * @return {JSX.Element} - The rendered basic info section
 */
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
    <section className="mb-2">
      {displayname && <h1 className="text-xl font-bold">{displayname}</h1>}
      {username && <h2 className="font-semibold text-md">{username}</h2>}
      {username && <p className="font-normal text-md">{pronouns}</p>}
    </section>
  );
};

export default BasicInfoSection;
