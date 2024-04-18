import BaseSection from "./BaseSection";
import SectionTitle from "./SectionTitle";
import SeekBar from "./SeekBar";
import SpotifyLogo from "./SpotifyLogo";
/**
 * Renders a section displaying Spotify song information.
 *
 * @param {string} title - The title of the section
 * @param {string} song - The name of the song
 * @param {string} artist - The name of the artist
 * @param {string} album - The name of the album
 * @param {string} artUrl - The URL of the album art
 * @param {string} trackUrl - The URL of the track on Spotify
 * @param {number} startTimeMs - The start time of the song in milliseconds
 * @param {number} endTimeMs - The end time of the song in milliseconds
 * @param {string} primaryColor - The color of the button (inherited from card)
 * @param {string} playOnSpotifyText - The text to display on the button (default: Play on Spotify)
 * @return {JSX.Element} The rendered Spotify section
 */

const SpotifySection = ({
  title,
  song,
  artist,
  album,
  artUrl,
  trackUrl,
  startTimeMs,
  endTimeMs,
  primaryColor,
  playOnSpotifyText,
}: {
  title?: string;
  song: string;
  artist: string;
  album: string;
  artUrl?: string;
  trackUrl?: string;
  startTimeMs?: number;
  endTimeMs?: number;
  primaryColor?: string;
  playOnSpotifyText?: string;
}) => {
  return (
    <BaseSection>
      <div className="flex justify-between" style={{ marginBottom: 6 }}>
      <SectionTitle title={title || "Listening to Spotify"} />
        <SpotifyLogo />
      </div>
      <div className="flex items-center gap-3">
        {artUrl && (
          <div className="min-w-[65px] self-start">
            {trackUrl ? (
              <a href={trackUrl} target="_blank">
                <img
                  src={artUrl}
                  className="w-[65px] h-[65px] select-none rounded-md"
                  alt={album}
                />
              </a>
            ) : (
              <img
                src={artUrl}
                className="w-[65px] h-[65px] select-none rounded-md"
                alt={album}
              />
            )}
          </div>
        )}
        <div>
          <div className="text-sm font-bold">
            {song.length <= 27 ? song : `${song.substring(0, 27)}...`}
          </div>
          <div className="text-sm font-normal">
            {artist.length <= 27 ? artist : `${artist.substring(0, 27)}...`}
          </div>
          <div className="text-sm font-normal">
            {album.length <= 27 ? album : `${album.substring(0, 27)}...`}
          </div>
        </div>
      </div>
      
      { startTimeMs && endTimeMs && (
        <SeekBar startTimeMs={startTimeMs} endTimeMs={endTimeMs} />
      )}

      {trackUrl && (
            <div>
            <a
              target="_blank"
              href={trackUrl}
              className={`block lighten w-full text-sm py-[6px] px-[4px] text-center mt-[8px] rounded-md text-white transition-[filter]`}
              style={{ backgroundColor: primaryColor }}
              aria-label={`Play ${song} by ${artist} on Spotify`}
            >
              <div className="flex justify-center items-center gap-2">
              <SpotifyLogo color={"#fff"} size={16} />
                {playOnSpotifyText || "Play on Spotify"}
              </div>
            </a>
        </div>
      )}
    </BaseSection>
  );
};

export default SpotifySection;
