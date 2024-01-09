import overviewStyles from "./Overview.module.css";

const Overview = () => {
	return (
		<>
			<div className={overviewStyles.container}>
				<div className={overviewStyles.overviewHeader}>
					<div className={overviewStyles.title}>Overview</div>

					<div className={overviewStyles.filter}>
						<select name="lastMonth" id="lastMonth">
							<option value="lastWeek">Last Week</option>
							<option value="lastMonth" selected>
								Last Month
							</option>
							<option value="lastYear">Last Year</option>
						</select>
					</div>
				</div>

				<div className={overviewStyles.overviewCards}>
					<div className={overviewStyles.card}>
						<div className={overviewStyles.cardTitle}>Online Orders</div>

						<div className={overviewStyles.cardContent}>231</div>
					</div>

					<div className={overviewStyles.card}>
						<div className={overviewStyles.cardTitle}>Amount received</div>

						<div className={overviewStyles.cardContent}>₹23,92,312.19</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Overview;
