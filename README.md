# discord-card-react

A React Component that renders a Discord profile card

![Card Preview](/github/card-preview.png)

## Features:

- 😀 Easy to use
- 📄 Supports all the features that the real Discord card supports (color gradient, badges, Spotify, and more)
- ⚙️ Highly modular (only add the sections you want)
- 🏷️ Integrates with [Lanyard](https://github.com/Phineas/lanyard) to sync your _real_ Discord status with this component
- ♿ Accessible
- 🌐 I18n friendly (can translate it to any language)

## How to use

**Requires NodeJS 18 or newer.**

Install the package with your package manager of choice. Example:

`npm install discord-card-react`

Add one of the cards by following the instructions below. The first two are recommended, but the third option is more customizable, in case you want to add custom components to it.

- Static card: Pass props to it to customize it. Like the name says, it's static and doesn't update dynamically based on your real Discord status.
- Lanyard card: Pass props to it to customize it, and also pass your Discord ID to automatically update its status using [Lanyard](https://github.com/Phineas/lanyard). This also updates the Spotify and Activity (game) sections automatically using WebSocket.
- Base card: Pass components manually to it to customize it. You can add custom components to this one.

## Static Card (\<DiscordCard\>)

Example:

```js
<DiscordCard
  imageUrl="profilepicture.webp"
  bannerUrl="banner.png"
  primaryColor="#007777"
  accentColor="#8500d3"
  connectionStatus="idle"
  basicInfo={{
    displayname: "Raccoon",
    username: "misfitdude",
    // Pronouns are optional
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
        text: "You can add as many paragraphs as you want",
      },
      {
        text: "You can also add extra margin at the bottom",
        marginBottom: 8,
      },
      {
        href: "https://example.com",
        text: "Links also work",
      },
      {
        text: "Extra paragraph.",
      },
    ],
  }}
  memberSince={{
    // Only discordJoinDate is required
    discordJoinDate: "20 Jul 2016",
    title: "You can add alternative titles to all sections that have titles",
    serverJoinDate: "1 Sep 2020",
    serverIconUrl: "https://asdasd.com/icon.png",
    serverName: "This is used as the alt attribute for the image, for accessibility"
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
    // Pass parent component's state and input handler to this to retrieve the note
    note: note,
    handleInput: handleNoteChange,
  }}
  message={{
    // Pass parent component's state and input handler to this to retrieve the message note
    message: message,
    handleInput: handleMessageChange,
    placeholder: "Message @Raccoon",
    accentColor: "#8500d3",
  }}
  spotify={{
    song: "Last Caress",
    artist: "Misfits",
    album: "Collection 2",
    albumImageUrl: "art.png",
    trackUrl: "https://spotify.com/asdasdasdasd"
  }}
  game={{
    name: "Fortnite",
    state: "Battle Royale"

  }}
></DiscordCard>
```
