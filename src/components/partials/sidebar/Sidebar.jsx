import sidebarStyles from "./Sidebar.module.css";
import { IconChevronDown } from "@tabler/icons-react";

const Sidebar = () => {
	const companyDetails = {
		companyName: "Nishyan",
		companyLink: "link-to-company",
		companyThumbnail: "companythumbnail.png",
	};
	const companyTabs = [
		{ name: "Home", icon: "home.png", id: 0 },
		{ name: "Orders", icon: "home.png", id: 1 },
		{ name: "Products", icon: "products.png", id: 2 },
		{ name: "Delivery", icon: "delivery.png", id: 3 },
		{ name: "Marketing", icon: "marketing.png", id: 4 },
		{ name: "Analytics", icon: "analytics.png", id: 5 },
		{ name: "Payments", icon: "payments.png", id: 6 },
		{ name: "Tools", icon: "tools.png", id: 7 },
		{ name: "Discounts", icon: "discounts.png", id: 8 },
		{ name: "Audience", icon: "audience.png", id: 9 },
		{ name: "Appearance", icon: "appearance.png", id: 10 },
		{ name: "Plugins", icon: "plugins.png", id: 11 },
	];

	return (
		<div className={sidebarStyles.container}>
			<div className={sidebarStyles.allcompanySpecificStuff}>
				<div className={sidebarStyles.companyHeader}>
					<div className={sidebarStyles.companyHeaderLeft}>
						<div className={sidebarStyles.companyThumbnail}>
							<img src={companyDetails.companyThumbnail} alt="" />
						</div>
					</div>

					<div className={sidebarStyles.companyHeaderRight}>
						<div className={sidebarStyles.companyDetails}>
							<div className={sidebarStyles.companyName}>
								{companyDetails.companyName}
							</div>

							<a
								href={companyDetails.companyLink}
								className={sidebarStyles.companyLink}
							>
								Visit store
							</a>
						</div>

						<div className={sidebarStyles.companyTabsToggle}>
							<IconChevronDown color="#fff" />
						</div>
					</div>
				</div>

				<div className={sidebarStyles.companyTabs}>
					{companyTabs.map((tab) => {
						return (
							<div
								key={tab.id}
								className={`${sidebarStyles.tabItem} ${
									tab.id === 6 && sidebarStyles.active
								}`}
							>
								<div className={sidebarStyles.tabIcon}>
									<img src={tab.icon} alt="" />
								</div>

								<div className={sidebarStyles.tabName}>{tab.name}</div>
							</div>
						);
					})}
				</div>
			</div>

			<div className={sidebarStyles.availableCredits}>
				<div className={sidebarStyles.availableCreditsLeft}>
					<div className={sidebarStyles.walletIcon}>
						<img src="wallet.png" alt="" />
					</div>
				</div>

				<div className={sidebarStyles.availableCreditsRight}>
					<div className={sidebarStyles.availableCreditsText}>
						Available credits
					</div>

					<div className={sidebarStyles.availableCreditsAmt}>222.10</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
