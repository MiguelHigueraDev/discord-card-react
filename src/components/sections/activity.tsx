import { formatTime } from "../../helpers/helper-functions";
import { Party } from "../../types";
import SectionTitle from "../section-title";
import { useEffect, useState } from "react";
import styles from "../../styles/ActivitySection.module.css";

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
    <section>
      <div className={styles.header}>
        <SectionTitle title={title || "Playing a game"} />
      </div>
      <div className={styles.content}>
        {largeImage ? (
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <img src={largeImage} alt="" className={styles.largeImage} />
              {smallImage && (
                <img
                  src={smallImage}
                  alt=""
                  className={styles.smallImageOverlay}
                />
              )}
            </div>
          </div>
        ) : (
          <>
            {smallImage && (
              <div className={styles.smallImageContainer}>
                <img
                  src={smallImage}
                  alt=""
                  className={styles.smallImageStandalone}
                />
              </div>
            )}
          </>
        )}
        <div className={styles.textContainer}>
          {name && <div className={styles.activityName}>{name}</div>}
          {details && (
            <div className={styles.activityDetails}>
              {details.length <= 30
                ? details
                : `${details.substring(0, 30)}...`}
            </div>
          )}
          {state && (
            <>
              {party && party.currentSize && party.maxSize ? (
                <div className={styles.activityState}>
                  {state.length <= 30
                    ? `${state} (${party.currentSize}/${party.maxSize})`
                    : `${state.substring(0, 30)}... (${party.currentSize}/${
                        party.maxSize
                      })`}
                </div>
              ) : (
                <div className={styles.activityState}>
                  {state.length <= 30 ? state : `${state.substring(0, 30)}...`}
                </div>
              )}
            </>
          )}
          {startTime && (
            <div className={styles.activityTime}>
              {timeAlignment === "left"
                ? `${elapsedTime} ${elapsedText}`
                : `${elapsedText} ${elapsedTime}`}
            </div>
          )}
        </div>
      </div>
      {buttonText && (
        <div className={styles.buttonWrapper}>
          <button
            className={`${styles.button}`}
            style={{ backgroundColor: primaryColor, cursor: "not-allowed" }}
            type="button"
          >
            <div style={{ height: 32 }} className={styles.buttonContent}>
              {buttonText}
            </div>
          </button>
        </div>
      )}
    </section>
  );
};

export default ActivitySection;
