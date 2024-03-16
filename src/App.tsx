
import "./App.css";
import { useState } from "react";
import LanyardDiscordCard from "./components/LanyardDiscordCard";

function App() {
  const [note, setNote] = useState("");
  const [message, setMessage] = useState("");

  function handleNoteChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setNote(event.target.value);
  }

  function handleMessageChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setMessage(event.target.value);
  }

  return (
      <LanyardDiscordCard
        userId={"205519765312241665"}
        imageUrl="pfp.webp"
        bannerUrl="banner.png"
        primaryColor="#007777"
        accentColor="#8500d3"
        basicInfo={{
          displayname: "Misfit",
          username: "misfitdude",
          pronouns: "he/him",
        }}
        // All these are optional
        badges={[{ name: "Active Developer", iconUrl: "developer-badge.png" }]}
        status={{
          status: "Best HTML Programmer",
          iconUrl: "raccoon.svg",
        }}
        aboutMe={{
          items: [
            {
              text: "(25 y/o) Just a nerd who loves coding and technology",
            },
            {
              text: "INTP",
              marginBottom: 8,
            },
            {
              href: "https://www.youtube.com/watch?v=NN1OtIJu_Bk",
              text: "https://www.youtube.com/watch?v=NN1OtIJu_Bk",
            },
            {
              text: "🦝❤️🦉",
            },
          ],
        }}
        memberSince={{
          discordJoinDate: "20 Jul 2016",
          serverJoinDate: "1 Sep 2020",
          serverIconUrl:
            "https://i.scdn.co/image/ab67616d0000b273f52e94692944d40e7faf3c81",
        }}
        roles={{
          roles: [
            { name: "JavaScript", color: "#f7df1e" },
            { name: "TypeScript", color: "#007acc" },
            { name: "PHP", color: "#4f3e66" },
            { name: "CSS", color: "#4372c4" },
            { name: "HTML", color: "#ed731c" },
          ],
        }}
        note={{
          note: note,
          handleInput: handleNoteChange,
        }}
        message={{
          message: message,
          handleInput: handleMessageChange,
          placeholder: "Message @Misfit",
          accentColor: "#8500d3",
        }}
        showSpotify={true}
        showGames={true}
        priority="none"
      ></LanyardDiscordCard>
  );
}

export default App;
