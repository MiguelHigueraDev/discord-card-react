import BaseDiscordCard from "./components/BaseDiscordCard";
import "./App.css";
import DiscordLink from "./components/DiscordLink";
import MemberSinceSection from "./components/MemberSinceSection";
import NoteSection from "./components/NoteSection";
import Role from "./components/Role";
import RoleSection from "./components/RoleSection";
import Separator from "./components/Separator";
import StatusSection from "./components/StatusSection";
import MessageSection from "./components/MessageSection";
import AboutMeSection from "./components/AboutMeSection";
import BasicInfoSection from "./components/BasicInfoSection";
import { useState } from "react";
import LanyardDiscordCard from "./components/LanyardDiscordCard";
import SpotifySection from "./components/SpotifySection";
import DiscordCard from "./components/DiscordCard";

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
    <div className="main-container">
      <BaseDiscordCard
        imageUrl="pfp.webp"
        bannerUrl="banner.png"
        primaryColor="#007777"
        accentColor="#8500d3"
        badges={[{ name: "Active Developer", iconUrl: "developer-badge.png" }]}
        connectionStatus={"dnd"}
      >
        <BasicInfoSection
          displayname="Misfit"
          username="misfitdude"
          pronouns="he/him"
        />
        <StatusSection iconUrl="raccoon.svg" status="Best HTML programmer" />
        <Separator />
        <AboutMeSection>
          <p>(25 y/o) Just a nerd who loves coding and technology</p>
          <p style={{ marginBottom: 10 }}>INTP</p>
          <DiscordLink href="https://www.youtube.com/watch?v=NN1OtIJu_Bk" />
          <p>🦝❤️🦉</p>
        </AboutMeSection>
        <MemberSinceSection discordJoinDate="20 Jul 2016" />
        <SpotifySection
          song="Last Caress"
          artist="Misfits"
          album="Collection 2"
          artUrl="https://i.scdn.co/image/ab67616d0000b273f52e94692944d40e7faf3c81"
        />
        <RoleSection>
          <Role role="JavaScript" color="#f7df1e" />
          <Role role="TypeScript" color="#007acc" />
          <Role role="PHP" color="#4f3e66" />
          <Role role="CSS" color="#4372c4" />
          <Role role="HTML" color="#ed731c" />
        </RoleSection>
        <NoteSection note={note} handleInput={handleNoteChange} />
        <MessageSection
          message={message}
          handleInput={handleMessageChange}
          placeholder="Message @Misfit"
          accentColor="#8500d3"
        />
      </BaseDiscordCard>

      <DiscordCard
        imageUrl="pfp.webp"
        bannerUrl="banner.png"
        primaryColor="#007777"
        accentColor="#8500d3"
        badges={[{ name: "Active Developer", iconUrl: "developer-badge.png" }]}
        connectionStatus="dnd"
        basicInfo={{
          displayname: "Misfit",
          username: "misfitdude",
          pronouns: "he/him",
        }}
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
        spotify={{
          song: "Last Caress",
          artist: "Misfits",
          album: "Collection 2",
        }}
        game={{
          name: "Hearthstone",
        }}
      ></DiscordCard>

      <LanyardDiscordCard
        userId={"205519765312241665"}
        imageUrl="pfp.webp"
        bannerUrl="banner.png"
        primaryColor="#007777"
        accentColor="#8500d3"
        badges={[{ name: "Active Developer", iconUrl: "developer-badge.png" }]}
        basicInfo={{
          displayname: "Misfit",
          username: "misfitdude",
          pronouns: "he/him",
        }}
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
        priority="default"
      ></LanyardDiscordCard>
    </div>
  );
}

export default App;
