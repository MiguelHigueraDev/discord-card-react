import { Party } from "../interfaces/Party";
import BaseSection from "./BaseSection";
import SectionTitle from "./SectionTitle";

/**
 * Renders a section for displaying game activity information.
 *
 * @param {string} title - The title of the game activity
 * @param {string} name - The name of the game
 * @param {string} state - The state of the game activity
 * @param {string} details - Additional details about the game activity
 * @param {string} largeImage - URL for the large image related to the game activity
 * @param {string} smallImage - URL for the small image related to the game activity
 * @param {Party} party - Object containing information about the party related to the game activity
 * @return {JSX.Element} The rendered game section component
 */
const GameSection = ({
  title,
  name,
  state,
  details,
  largeImage,
  smallImage,
  party,
}: {
  title?: string;
  applicationId?: string;
  name?: string;
  state?: string;
  details?: string;
  largeImage?: string;
  smallImage?: string;
  party?: Party;
}) => {
  return (
    <BaseSection>
      <div className="flex justify-between">
        {title ? (
          <SectionTitle title={title} marginBottom={4}></SectionTitle>
        ) : (
          <SectionTitle title="Playing a game" marginBottom={4}></SectionTitle>
        )}
      </div>
      <div className="flex items-center gap-3">
        {largeImage ? (
          <div className="flex gap-1">
            <div className="relative justify-center items-center">
              <img src={largeImage} alt="" className="w-[65px] h-[65px] select-none object-cover" />
              {smallImage && (
                <img
                  src={smallImage}
                  alt=""
                  className="absolute bottom-[-3px] right-[-6px] w-[20px] h-[20px] rounded-full select-none object-cover"
                />
              )}
            </div>
          </div>
        ) : (
          <>
            {smallImage && (
              <div>
                <img src={smallImage} alt="" className="w-[65px] h-[65px] select-none object-cover" />
              </div>
            )}
          </>
        )}
        <div>
          {name && (
            <p className="text-sm font-bold">{name}</p>
          )}
          {details && (
            <p className="text-sm font-normal">
              {details.length <= 30
                ? details
                : `${details.substring(0, 30)}...`}
            </p>
          )}
          {state && (
            <>
              {party ? (
                <div>
                  <p className="text-sm font-normal">
                    {state.length <= 30
                      ? `${state} (${party.currentSize}/${party.maxSize})`
                      : `${state.substring(0, 30)}... (${party.currentSize}/${
                          party.maxSize
                        })`}
                  </p>
                </div>
              ) : (
                <p className="text-sm font-normal">
                  {state.length <= 30 ? state : `${state.substring(0, 30)}...`}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </BaseSection>
  );
};

export default GameSection;
