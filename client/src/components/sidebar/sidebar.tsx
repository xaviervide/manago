import './sidebar.css';

interface sidebarProps {
  toggleWorkspace: () => void,
}

function Sidebar ({toggleWorkspace} : sidebarProps) {
  return (
    <div className="sidebar-container">
      <div className="sidebar-logo-container">
        <h2>M</h2>
      </div>
      <div className="sidebar-icons-container">
        <div>
          <div className='icon' onClick={() => toggleWorkspace()}></div>
          <div className='icon'></div>
        </div>
        <div>
          <div className='icon'></div>
          <div className='icon'></div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;