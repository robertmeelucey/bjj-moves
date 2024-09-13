import { useState } from "react";
import Form from "./Form";

function AddNewMoveButton({ positions, fetchMoves }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="dropdown">
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="dropdown-btn">
          Add New Move ➕
        </button>
      )}
      {isOpen && (
        <>
          <Form
            positions={positions}
            fetchMoves={fetchMoves}
            setIsOpen={setIsOpen}
          />
        </>
      )}
    </div>
  );
}

export default AddNewMoveButton;
