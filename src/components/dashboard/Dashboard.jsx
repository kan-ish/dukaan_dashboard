import Sidebar from "../sidebar/Sidebar";
import Stage from "../stage/Stage";

import dashboardStyles from "./Dashboard.module.css";

const Dashboard = () => {
	return (
		<div className={dashboardStyles.container}>
			<div className={dashboardStyles.sidebar}>
				<Sidebar />
			</div>

			<div className={dashboardStyles.stage}>
				<Stage />
			</div>
		</div>
	);
};

export default Dashboard;
