import { useState } from "react";
import { addEmoji } from "./AddEmoji";

function Dropdown({ children, name }) {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={() => setDropdown(!dropdown)}>
        {addEmoji(name)}
      </button>
      {dropdown && <div className="dropdown-content">{children}</div>}
    </div>
  );
}

export default Dropdown;
