import headerStyles from "./Header.module.css";

const Header = () => {
	return (
		<div className={headerStyles.container}>
			<div className={headerStyles.headerLeft}>
				<div className={headerStyles.pageTitle}>Payments</div>

				<div className={headerStyles.pageHelp}>How it works</div>
			</div>

			<div className={headerStyles.searchBarContainer}>
				<span className={headerStyles.searchIcon}></span>
				<input type="text" className={headerStyles.searchInput} />
			</div>

			<div className={headerStyles.headerRight}>
				<div className={headerStyles.chatButton}>C</div>

				<div className={headerStyles.dropDownBtn}>D</div>
			</div>
		</div>
	);
};

export default Header;
