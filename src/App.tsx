import DiscordCard from "./components/DiscordCard"
import "./App.css"

function App() {
  return (
    <div className="main-container">
      <DiscordCard imageUrl="pfp.webp" bannerUrl="banner.png" primaryColor="#007777" accentColor="#8500d3" />
    </div>
  )
}

export default App
