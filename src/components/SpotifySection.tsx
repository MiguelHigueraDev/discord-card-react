const SpotifySection = ({
  title,
  song,
  artist,
  album,
  artUrl,
}: {
  title?: string;
  song: string;
  artist: string;
  album: string;
  artUrl?: string;
}) => {
  return (
    <section className="discord-card-section">
      <div className="discord-card-activity-header">
        {title ? <h3>{title}</h3> : <h3>Listening to Spotify</h3>}
        <img src="spotify.svg" alt="" />
      </div>
      <div className="discord-card-activity-body">
        {artUrl && (
          <div>
            <img src={artUrl} />
          </div>
        )}
        <div>
          <p className="discord-card-activity-title">{song.length <= 30 ? song : `${song.substring(0, 30)}...`}</p>
          <p className="discord-card-activity-text">{artist.length <= 30 ? artist : `${artist.substring(0, 30)}...`}</p>
          <p className="discord-card-activity-text">{album.length <= 30 ? album : `${album.substring(0, 30)}...`}</p>
        </div>
      </div>
    </section>
  );
};

export default SpotifySection;
