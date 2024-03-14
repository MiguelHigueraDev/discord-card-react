const Status = ({ iconUrl, text }: { iconUrl?: string, text: string}) => {
  return (
    <section className="discord-status-container">
        {iconUrl && <img src={iconUrl} className="discord-status-image" />}
        <p className="discord-status-text text">{text}</p>
    </section>
  )
}

export default Status