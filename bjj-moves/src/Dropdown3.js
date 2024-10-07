import { useState } from "react";
import YouTubeEmbed from "./YouTubeEmbed";
import { addEmoji } from "./AddEmoji";

function Dropdown3({ name, moves, fightStyle }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={() => setDropdown(!dropdown)}>
        {addEmoji(name)}
      </button>
      {dropdown &&
        moves
          .filter(
            (move) => move.fightStyle === fightStyle && move.type === name
          )
          .map((move) => (
            <div className="youtube-embed" key={move.id}>
              <h1>{move.name}</h1>
              <YouTubeEmbed videoId={move.id} />
            </div>
          ))}
    </div>
  );
}

export default Dropdown3;
