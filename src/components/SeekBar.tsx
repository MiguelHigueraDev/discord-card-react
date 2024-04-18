/**
 * Renders the seek bar for the SpotifySection component.
 */
import { useEffect, useState } from "react";
import { formatTime } from "../helpers/helperFunctions";

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
  const percentage = ((currentDateTime.getTime() - startTimeMs) / (endTimeMs - startTimeMs)) * 100;

  return (
    <div className="text-[0.75rem] mt-3">
        <div className="bar h-1 bg-neutral-700 rounded-xl">
            <div className="progress h-1 bg-primary rounded-xl bg-white" style={{ width: `${percentage}%` }}></div>
        </div>
        <div className="flex justify-between items-start">
            <div className="my-0 py-0">{currentPosition}</div>
            <div className="my-0 py-0">{songDuration}</div>
        </div>
    </div>
  );
};

export default SeekBar;
