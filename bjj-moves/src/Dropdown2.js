import { useState } from "react";
import Dropdown from "./Dropdown";
import YouTubeEmbed from "./YouTubeEmbed";
import MissingPositionButton from "./MissingPositionButton";
import { addEmoji } from "./AddEmoji";

function Dropdown2({ children, name, positions, moves, fightStyle }) {
  const [dropdown, setDropdown] = useState(false);

  const validPositions = positions.filter((position) =>
    moves.some(
      (move) =>
        move.position === position &&
        move.fightStyle === fightStyle &&
        move.type === name
    )
  );

  const missingPositions = positions.filter(
    (position) => !validPositions.includes(position)
  );

  function numberOfMoves(moves, position) {
    return moves.reduce((num, move) => {
      return move.position === position &&
        move.fightStyle === fightStyle &&
        move.type === name
        ? num + 1
        : num;
    }, 0);
  }

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={() => setDropdown(!dropdown)}>
        {addEmoji(name)}
      </button>
      {dropdown &&
        validPositions.map((position, index) => (
          <Dropdown
            name={position + " " + numberOfMoves(moves, position)}
            key={index}
          >
            {moves
              .filter(
                (move) =>
                  move?.position === position &&
                  move.fightStyle === fightStyle &&
                  move.type === name
              )
              .map((move) => (
                <div className="youtube-embed" key={move.id}>
                  <h1>{move.name}</h1>
                  <YouTubeEmbed videoId={move.id} />
                </div>
              ))}
          </Dropdown>
        ))}
      {dropdown && (
        <MissingPositionButton>
          {missingPositions.map((missingPosition, index) => (
            <Dropdown name={missingPosition} key={index} />
          ))}
        </MissingPositionButton>
      )}
    </div>
  );
}

export default Dropdown2;
