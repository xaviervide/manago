import './sidebar.css';

function Sidebar () {
  return (
    <div className="sidebar-container">
      <div className="sidebar-logo-container">
        <h2>MANAGO</h2>
      </div>
      <div className="sidebar-icons-container">
        <div>
          <div className='icon'></div>
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