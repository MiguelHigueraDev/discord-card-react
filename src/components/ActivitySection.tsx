import { formatTime } from "../helpers/helperFunctions";
import { Party } from "../types";
import BaseSection from "./BaseSection";
import SectionTitle from "./SectionTitle";
import { useEffect, useState } from "react";

/**
 * Renders a section for displaying activity information.
 *
 * @param {string} title - The title of the activity
 * @param {string} name - The name of the activity
 * @param {string} state - The state of the activity
 * @param {string} details - Additional details about the activity
 * @param {string} largeImage - URL for the large image related to the activity
 * @param {string} smallImage - URL for the small image related to the activity
 * @param {Party} party - Object containing information about the party related to the activity
 * @param {string} elapsedText - The text to display before the elapsed time (default: elapsed)
 * @param {"left" | "right"} timeAlignment - The alignment of the elapsed time (default: left)
 * @param {number} startTime - The start time of the activity
 * @param {string} primaryColor - The color of the button (inherited from card)
 * @param {string} buttonText - The text to display on the button (default: null)
 * @return {JSX.Element} The rendered section component
 */
const ActivitySection = ({
  title,
  name,
  state,
  details,
  largeImage,
  smallImage,
  party,
  elapsedText = "elapsed",
  timeAlignment = "left",
  startTime,
  buttonText,
  primaryColor,
}: {
  title?: string;
  applicationId?: string;
  name?: string;
  state?: string;
  details?: string;
  largeImage?: string;
  smallImage?: string;
  party?: Party;
  elapsedText?: string;
  timeAlignment?: "left" | "right";
  startTime?: number;
  buttonText?: string;
  primaryColor?: string;
}) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // Update to current time every second
  useEffect(() => {
    const interval = setInterval(() => setCurrentDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  const elapsedTime = formatTime(startTime!, currentDateTime.getTime());

  return (
    <BaseSection>
      <SectionTitle title={title || "Playing a game"} marginBottom={6} />
      <div className="flex items-center gap-3">
        {largeImage ? (
          <div className="flex gap-1 min-w-[65px] self-start">
            <div className="relative justify-center items-center">
              <img
                src={largeImage}
                alt=""
                className="w-[65px] h-[65px] select-none object-cover rounded-md"
              />
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
              <div className="min-w-[65px] self-start">
                <img
                  src={smallImage}
                  alt=""
                  className="w-[65px] h-[65px] select-none object-cover"
                />
              </div>
            )}
          </>
        )}
        <div className="text-sm font-normal">
          {name && <p className="font-bold">{name}</p>}
          {details && (
            <p>
              {details.length <= 30
                ? details
                : `${details.substring(0, 30)}...`}
            </p>
          )}
          {state && (
            <>
              {party && party.currentSize && party.maxSize ? (
                <div>
                  <p>
                    {state.length <= 30
                      ? `${state} (${party.currentSize}/${party.maxSize})`
                      : `${state.substring(0, 30)}... (${party.currentSize}/${
                          party.maxSize
                        })`}
                  </p>
                </div>
              ) : (
                <p>
                  {state.length <= 30 ? state : `${state.substring(0, 30)}...`}
                </p>
              )}
              {}
            </>
          )}
          {startTime && (
            <p>
              {timeAlignment === "left"
                ? `${elapsedTime} ${elapsedText}`
                : `${elapsedText} ${elapsedTime}`}
            </p>
          )}
        </div>
      </div>
      {buttonText && (
        <button
          className="block w-full text-sm bg-[#383838] py-[6px] px-[4px] text-center mt-[8px] rounded-md text-white opacity-50 cursor-not-allowed"
          style={{ backgroundColor: primaryColor }}
          type="button"
        >
          {buttonText}
        </button>
      )}
    </BaseSection>
  );
};

export default ActivitySection;
