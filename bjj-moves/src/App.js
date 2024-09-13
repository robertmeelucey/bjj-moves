import { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";
import AddNewMoveButton from "./AddNewMoveButton";
import Dropdown3 from "./Dropdown3";
import { positions } from "./Positions";

function App() {
  const [moves, setMoves] = useState([]);

  async function fetchMoves() {
    try {
      const response = await axios.get("http://localhost:9000/getMoves");
      setMoves(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(function () {
    fetchMoves();
  }, []);

  return (
    <>
      <div className="title">
        <h1>BJJ Moves 🥋</h1>
      </div>
      <Dropdown name="Gi">
        <Dropdown2
          name="Attack"
          positions={positions}
          moves={moves}
          fightStyle="Gi"
        ></Dropdown2>
        <Dropdown2
          name="Sweep"
          positions={positions}
          moves={moves}
          fightStyle="Gi"
        ></Dropdown2>
        <Dropdown2
          name="Escape"
          positions={positions}
          moves={moves}
          fightStyle="Gi"
        ></Dropdown2>
        <Dropdown2
          name="Transition"
          positions={positions}
          moves={moves}
          fightStyle="Gi"
        ></Dropdown2>
        <Dropdown3 name="Takedown" moves={moves} fightStyle="Gi"></Dropdown3>
        <Dropdown3 name="Guard Pass" moves={moves} fightStyle="Gi"></Dropdown3>
      </Dropdown>
      <Dropdown name="No Gi">
        <Dropdown2
          name="Attack"
          positions={positions}
          moves={moves}
          fightStyle="No Gi"
        ></Dropdown2>
        <Dropdown2
          name="Sweep"
          positions={positions}
          moves={moves}
          fightStyle="No Gi"
        ></Dropdown2>
        <Dropdown2
          name="Escape"
          positions={positions}
          moves={moves}
          fightStyle="No Gi"
        ></Dropdown2>
        <Dropdown2
          name="Transition"
          positions={positions}
          moves={moves}
          fightStyle="No Gi"
        ></Dropdown2>
        <Dropdown3 name="Takedown" moves={moves} fightStyle="No Gi"></Dropdown3>
        <Dropdown3
          name="Guard Pass"
          moves={moves}
          fightStyle="No Gi"
        ></Dropdown3>
      </Dropdown>
      <AddNewMoveButton positions={positions} fetchMoves={fetchMoves} />
    </>
  );
}

export default App;
