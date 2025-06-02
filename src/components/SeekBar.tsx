/**
 * Renders the seek bar for the SpotifySection component.
 */
import { useEffect, useState } from "react";
import { formatTime } from "../helpers/helperFunctions";
import styles from "../styles/SeekBar.module.css";

const SeekBar = ({
  startTimeMs,
  endTimeMs,
}: {
  startTimeMs: number;
  endTimeMs: number;
}) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, [startTimeMs]);

  const currentPosition = formatTime(startTimeMs, currentDateTime.getTime());
  const songDuration = formatTime(startTimeMs, endTimeMs);
  const percentage =
    ((currentDateTime.getTime() - startTimeMs) / (endTimeMs - startTimeMs)) *
    100;

  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <div
          className={styles.progress}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className={styles.timeContainer}>
        <div className={styles.timeText}>{currentPosition}</div>
        <div className={styles.timeText}>{songDuration}</div>
      </div>
    </div>
  );
};

export default SeekBar;
