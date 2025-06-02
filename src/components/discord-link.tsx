import styles from "../styles/DiscordLink.module.css";

/**
 * Renders a Discord link.
 *
 * @param {string} href - The URL of the link
 * @param {string} text - The text to display for the link, defaults to the link URL if not provided
 * @return {JSX.Element} The rendered Discord link component
 */
const DiscordLink = ({
  href,
  text,
}: {
  href: string;
  text?: string;
}): JSX.Element => {
  return (
    <>
      <a href={href} className={styles.link} target="_blank">
        {text ? text : href}
      </a>
    </>
  );
};

export default DiscordLink;
