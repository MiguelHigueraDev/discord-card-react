import './DiscordCard.css'
const DiscordCard = () => {
  return (
    <div className="discord-card-border">
        <div className="discord-banner-container">
            <div className="discord-profile-picture-border">
                <img src="pfp.webp" className="discord-profile-picture" />
            </div>
            <img src="banner.png" className="discord-banner-image" />
        </div>
        <div className="discord-card-outer-body">
            <div className="discord-card-inner-body">
                <div>
                    <h1 className="discord-card-displayname text">Misfit</h1>
                    <h2 className="discord-card-username text">misfitdude</h2>
                    <div className="discord-status-container">
                        <img src="raccoon.svg" className="discord-status-image" />
                        <p className="discord-status-text text">Best HTML programmer</p>
                    </div>
                </div>
                <div className="discord-card-separator"></div>
                <div>

                </div>

                
            </div>
        </div>
    </div>


  )
}

export default DiscordCard