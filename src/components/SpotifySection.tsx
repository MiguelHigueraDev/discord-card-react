/**
 * Renders a section displaying Spotify song information.
 *
 * @param {string} title - The title of the section
 * @param {string} song - The name of the song
 * @param {string} artist - The name of the artist
 * @param {string} album - The name of the album
 * @param {string} artUrl - The URL of the album art
 * @param {string} trackUrl - The URL of the track on Spotify
 * @return {JSX.Element} The rendered Spotify section
 */
const SpotifySection = ({
  title,
  song,
  artist,
  album,
  artUrl,
  trackUrl,
}: {
  title?: string;
  song: string;
  artist: string;
  album: string;
  artUrl?: string;
  trackUrl?: string;
}) => {
  return (
    <section className="discord-card-section">
      <div className="discord-card-activity-header" style={{marginBottom: 2}}>
        {title ? <h3>{title}</h3> : <h3>Listening to Spotify</h3>}
        <img src="spotify.svg" alt="" />
      </div>
      <div className="discord-card-activity-body">
        {artUrl && (
          <div>
            {trackUrl ? (
              <a href={trackUrl} target="_blank">
                <img src={artUrl} alt={album} />
              </a>
            ) : (
              <img src={artUrl} alt={album} />
            )}
          </div>
        )}
        <div>
          <p className="discord-card-activity-title">
            {song.length <= 80 ? song : `${song.substring(0, 80)}...`}
          </p>
          <p className="discord-card-activity-text">
            {artist.length <= 80 ? artist : `${artist.substring(0, 80)}...`}
          </p>
          <p className="discord-card-activity-text">
            {album.length <= 80 ? album : `${album.substring(0, 80)}...`}
          </p>
        </div>
      </div>
      {trackUrl && (
        <a
          target="_blank"
          href={trackUrl}
          className="discord-card-spotify-button"
          aria-label={`Play ${song} by ${artist} on Spotify`}
        >
          Play on Spotify
        </a>
      )}
    </section>
  );
};

export default SpotifySection;
