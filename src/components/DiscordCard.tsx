import './DiscordCard.css'
const DiscordCard = () => {
  return (
    <div className="discord-card-border">
        <div className="discord-banner-container">
            <div className="discord-profile-picture-border">
                <img src="pfp.webp" className="discord-profile-picture" />
            </div>
            <img src="banner.png" className="discord-banner-image" />
            <div className="discord-badges-container">
                <img src="developer-badge.png" className="discord-badge" />
            </div>
        </div>
        <div className="discord-card-outer-body">
            <div className="discord-card-inner-body">
                <div>
                    <div className="discord-card-basic-info">
                        <h1 className="discord-card-displayname text">Misfit</h1>
                        <h2 className="discord-card-username text">misfitdude</h2>
                        <p className="discord-card-pronouns text">he/him</p>
                    </div>
                    <div className="discord-status-container">
                        <img src="raccoon.svg" className="discord-status-image" />
                        <p className="discord-status-text text">Best HTML programmer</p>
                    </div>
                </div>
                <div className="discord-card-separator"></div>
                <section className="discord-card-section">
                    <h3 className="text">About Me</h3>
                    <p>
                        (25 y/o) Just a nerd who loves coding and technology
                    </p>
                    <p style={{marginBottom: 10}}>
                        INTP
                    </p>
                    <a className="discord-link"
                    href="https://www.youtube.com/watch?v=NN1OtIJu_Bk">https://www.youtube.com/watch?v=NN1OtIJu_Bk
                    </a>
                    <p>🦝❤️🦉</p>
                </section>
                <section className="discord-card-section">
                    <h3 className="text">Discord Member Since</h3>
                    <p>20 Jul 2016</p>
                </section>
                <section className="discord-card-section">
                    <h3 className="text">Roles</h3>
                    <div className="discord-card-roles-section">
                        <div className="discord-card-role">
                            <div className="discord-card-role-icon" style={{ backgroundColor: "#f7df1e"}}></div>
                            <p className="text">JavaScript</p>
                        </div>
                        <div className="discord-card-role">
                            <div className="discord-card-role-icon" style={{ backgroundColor: "#007acc"}}></div>
                            <p className="text">TypeScript</p>
                        </div>
                        <div className="discord-card-role">
                            <div className="discord-card-role-icon" style={{ backgroundColor: "#4f3e66"}}></div>
                            <p className="text">PHP</p>
                        </div>
                        <div className="discord-card-role">
                            <div className="discord-card-role-icon" style={{ backgroundColor: "#4372c4"}}></div>
                            <p className="text">CSS</p>
                        </div>
                        <div className="discord-card-role">
                            <div className="discord-card-role-icon" style={{ backgroundColor: "#ed731c"}}></div>
                            <p className="text">HTML</p>
                        </div>
                    </div>
                </section>
                <section className="discord-card-section discord-card-note">
                    <h3 className="text">Note</h3>
                    <p>I like building stuff!</p>
                </section>
                <section className="message-section">
                    <textarea placeholder="Message @Misfit"></textarea>
                </section>
            </div>
        </div>
    </div>


  )
}

export default DiscordCard