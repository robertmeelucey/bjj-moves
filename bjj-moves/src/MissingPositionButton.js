import { useState } from "react";

function MissingPositionButton({ children }) {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="dropdown">
      <button
        className="missing-btn"
        onClick={() => {
          setDropdown(!dropdown);
        }}
      >
        See Missing Positions
      </button>
      {dropdown && <div className="dropdown-content">{children}</div>}
    </div>
  );
}

export default MissingPositionButton;
