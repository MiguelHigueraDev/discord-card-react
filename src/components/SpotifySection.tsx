import SectionTitle from "./SectionTitle";
import SeekBar from "./SeekBar";
import SpotifyLogo from "./SpotifyLogo";
import styles from "../styles/SpotifySection.module.css";
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
 * @param {string} byString - The string to display before the artist's name (default: by)
 * @param {string} onString - The string to display before the album's name (default: on)
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
  byText = "by",
  onText = "on",
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
  byText?: string;
  onText?: string;
}) => {
  return (
    <section>
      <div className={styles.header}>
        <SectionTitle title={title || "Listening to Spotify"} />
        <SpotifyLogo />
      </div>
      <div className={styles.content}>
        {artUrl && (
          <div className={styles.albumArtContainer}>
            {trackUrl ? (
              <a href={trackUrl} target="_blank">
                <img src={artUrl} className={styles.albumArt} alt={album} />
              </a>
            ) : (
              <img src={artUrl} className={styles.albumArt} alt={album} />
            )}
          </div>
        )}
        <div>
          <div className={styles.songTitle}>
            {song.length <= 27 ? song : `${song.substring(0, 27)}...`}
          </div>
          <div className={styles.songInfo}>
            {byText}{" "}
            {artist.length <= 27 ? artist : `${artist.substring(0, 27)}...`}
          </div>
          <div className={styles.songInfo}>
            {onText}{" "}
            {album.length <= 27 ? album : `${album.substring(0, 27)}...`}
          </div>
        </div>
      </div>

      {startTimeMs && endTimeMs && (
        <SeekBar startTimeMs={startTimeMs} endTimeMs={endTimeMs} />
      )}

      {trackUrl && (
        <div>
          <a
            target="_blank"
            href={trackUrl}
            className={`${styles.playButton} ${styles.lighten}`}
            style={{ backgroundColor: primaryColor }}
            aria-label={`Play ${song} by ${artist} on Spotify`}
          >
            <div className={styles.playButtonContent}>
              <SpotifyLogo color={"#fff"} size={16} />
              {playOnSpotifyText || "Play on Spotify"}
            </div>
          </a>
        </div>
      )}
    </section>
  );
};

export default SpotifySection;
