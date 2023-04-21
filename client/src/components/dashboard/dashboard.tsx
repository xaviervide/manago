import MainView from '../mainView/mainView';
import Sidebar from '../sidebar/sidebar';
import Workspace from '../workspace/workspace';
import './dashboard.css';

function Dashboard () {
  return (
    <div className="dashboard-container">
      <Sidebar></Sidebar>
      <Workspace></Workspace>
      <MainView></MainView>
    </div>
  );
}

export default Dashboard;