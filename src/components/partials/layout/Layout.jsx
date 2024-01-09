import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";

import layoutStyles from "./Layout.module.css";

const Layout = ({ children }) => {
	return (
		<div className={layoutStyles.container}>
			<div className={layoutStyles.sidebar}>
				<Sidebar />
			</div>

			<div className={layoutStyles.main}>
				<Header />

				<div className={layoutStyles.children}>{children}</div>
			</div>
		</div>
	);
};

export default Layout;
