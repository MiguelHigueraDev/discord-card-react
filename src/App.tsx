import DiscordCard from "./components/DiscordCard";
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
      <DiscordCard
        imageUrl="pfp.webp"
        bannerUrl="banner.png"
        primaryColor="#007777"
        accentColor="#8500d3"
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
        />
      </DiscordCard>
    </div>
  );
}

export default App;
