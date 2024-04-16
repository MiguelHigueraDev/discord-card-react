import BaseSection from "./BaseSection";
import SectionTitle from "./SectionTitle";
/**
 * Renders a section displaying the member's join dates on Discord and the server.
 *
 * @param {string} title - Optional title for the section
 * @param {string} discordJoinDate - The date the member joined Discord
 * @param {string} serverJoinDate - Optional date the member joined the server
 * @param {string} serverIconUrl - Optional URL for the server icon
 * @param {string} serverName - Optional name of the server (Used for accessibility in the alt attribute)
 * @return {JSX.Element} The rendered section component
 */
const MemberSinceSection = ({
  title,
  discordJoinDate,
  serverJoinDate,
  serverIconUrl,
  serverName,
}: {
  title?: string;
  discordJoinDate: string;
  serverJoinDate?: string;
  serverIconUrl?: string;
  serverName?: string;
}) => {
  return (
    <BaseSection>
      <SectionTitle title={title || "Member since"} marginBottom={3} />
      <div className="flex items-center justify-start gap-2">
        {serverJoinDate ? (
          <>
            <svg
              className="w-[14px] h-[14px]"
              aria-label="Discord"
              aria-hidden="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19.73 4.87a18.2 18.2 0 0 0-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.82-.59-1.2-1.6.27-3.14.75-4.6 1.43A19.04 19.04 0 0 0 .96 17.7a18.43 18.43 0 0 0 5.63 2.87c.46-.62.86-1.28 1.2-1.98-.65-.25-1.29-.55-1.9-.92.17-.12.32-.24.47-.37 3.58 1.7 7.7 1.7 11.28 0l.46.37c-.6.36-1.25.67-1.9.92.35.7.75 1.35 1.2 1.98 2.03-.63 3.94-1.6 5.64-2.87.47-4.87-.78-9.09-3.3-12.83ZM8.3 15.12c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.89 2.27-2 2.27Zm7.4 0c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.88 2.27-2 2.27Z"
              ></path>
            </svg>
            <p className="text-[15px]">{discordJoinDate}</p>
            <div className="w-1 h-1 rounded-full bg-[#4b4b4b]"></div>
            {serverIconUrl && (
              <img
                className="w-[15px] h-[15px] rounded-full"
                alt=""
                aria-label={serverName}
                src={serverIconUrl}
              />
            )}
            <p className="text-[15px]">{serverJoinDate}</p>
          </>
        ) : (
          <p className="text-[15px]">{discordJoinDate}</p>
        )}
      </div>
    </BaseSection>
  );
};

export default MemberSinceSection;
