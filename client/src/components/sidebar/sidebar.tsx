import './sidebar.css';
import { useState } from 'react';

interface sidebarProps {
  toggleWorkspace: () => void,
}

function Sidebar ({toggleWorkspace} : sidebarProps) {

  const [isClicked, setIsClicked] = useState(true);

  function handleClick() {
    toggleWorkspace();
    setIsClicked(!isClicked);
  }

  return (
    <div className="sidebar-container">
      <div className="sidebar-logo-container">
        <h2>M</h2>
      </div>
      <div className="sidebar-icons-container">
        <div>
          <div className='icon' onClick={() => handleClick()}
          style={{backgroundColor: isClicked ? 'lightgray' : 'transparent'}}>WS</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;