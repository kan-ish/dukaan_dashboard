import sidebarStyles from "./Sidebar.module.css";
import { IconChevronDown } from "@tabler/icons-react";

const Sidebar = () => {
	const companyDetails = {
		companyName: "Nishyan",
		companyLink: "link-to-company",
		companyThumbnail: "companythumbnail.png",
	};
	const companyTabs = [
		{ name: "Home", icon: "home.png" },
		{ name: "Orders", icon: "home.png" },
		{ name: "Products", icon: "products.png" },
		{ name: "Delivery", icon: "delivery.png" },
		{ name: "Marketing", icon: "marketing.png" },
		{ name: "Analytics", icon: "analytics.png" },
		{ name: "Payments", icon: "payments.png" },
		{ name: "Tools", icon: "tools.png" },
		{ name: "Discounts", icon: "discounts.png" },
		{ name: "Audience", icon: "audience.png" },
		{ name: "Appearance", icon: "appearance.png" },
		{ name: "Plugins", icon: "plugins.png" },
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
								className={sidebarStyles.companyLink}>
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
							<>
								<div className={sidebarStyles.tabItem}>
									<div className={sidebarStyles.tabIcon}>
										<img src={tab.icon} alt="" />
									</div>

									<div className={sidebarStyles.tabName}>
										{tab.name}
									</div>
								</div>
							</>
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

					<div className={sidebarStyles.availableCreditsAmt}>
						222.10
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
