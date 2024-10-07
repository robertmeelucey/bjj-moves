import { useState } from "react";
import axios from "axios";

function Form({ positions, fetchMoves, setIsOpen }) {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [fightStyle, setFightStyle] = useState("");
  const [type, setType] = useState("");
  const [position, setPosition] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !name ||
      !id ||
      !fightStyle ||
      !type ||
      (!position && type !== ("Takedown" || "Transition"))
    )
      return;

    const newMove = { name, id, fightStyle, type, position };

    try {
      const response = await axios.post(
        "http://localhost:9000/addMove",
        newMove
      );

      if (response.status === 201) {
        alert("Move added successfully");
        fetchMoves();
        reset();
      } else {
        alert("Failed to add move");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  }

  function reset() {
    setName("");
    setId("");
    setFightStyle("");
    setType("");
    setPosition("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter Move Name..."
          onChange={(e) => setName(e.target.value)}
          className="input-btn"
        />
        <input
          type="text"
          value={id}
          placeholder="Enter YouTube ID..."
          onChange={(e) => setId(e.target.value)}
          className="input-btn"
        />
        <select
          type="text"
          value={fightStyle}
          onChange={(e) => setFightStyle(e.target.value)}
          className="select-btn"
        >
          <option>Select a Fight Style...</option>
          <option value="Gi">Gi</option>
          <option value="No Gi">No Gi</option>
        </select>
        <select
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="select-btn"
        >
          <option>Select a type...</option>
          <option value="Attack">Attack</option>
          <option value="Sweep">Sweep</option>
          <option value="Escape">Escape</option>
          <option value="Transition">Transition</option>
          <option value="Takedown">Takedown</option>
          <option value="Guard Pass">Guard Pass</option>
        </select>
        <select
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="select-btn"
        >
          <option>Select a position...</option>
          {positions.map((position) => (
            <option value={position} key={position}>
              {position}
            </option>
          ))}
        </select>
        <div className="btn-container">
          <button onClick={handleSubmit} className="submit-btn">
            Submit
          </button>
          <button onClick={reset} className="clear-btn">
            Clear All
          </button>
          <button onClick={() => setIsOpen(false)} className="return-btn">
            Return
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
