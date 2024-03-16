import styles from "../styles/BasicInfoSection.module.css";
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
    <section className={styles["discord-card-basic-info"]}>
      {displayname && (
        <h1 className={styles["discord-card-displayname"]}>{displayname}</h1>
      )}
      {username && <h2 className={styles["discord-card-username"]}>{username}</h2>}
      {username && <p className={styles["discord-card-pronouns"]}>{pronouns}</p>}
    </section>
  );
};

export default BasicInfoSection;
