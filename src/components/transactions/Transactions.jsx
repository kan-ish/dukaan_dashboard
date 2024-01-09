import transactionsStyles from "./Transactions.module.css";
import { IconSearch } from "@tabler/icons-react";

const Transactions = () => {
	return (
		<div className={transactionsStyles.container}>
			<div className={transactionsStyles.transactionsHeader}>
				Transactions | This Month
			</div>

			<div className={transactionsStyles.transactionsContent}>
				<div className={transactionsStyles.tableControls}>
					<div className={transactionsStyles.tableControlsLeft}>
						<div className={transactionsStyles.transactionSearch}>
							<IconSearch color="#999999" stroke={1} />
							<input
								type="text"
								name="transactionSearch"
								placeholder="Search by order ID..."
							/>
						</div>
					</div>

					<div className={transactionsStyles.tableControlsRight}>
						<div className={transactionsStyles.sortTable}>
							Sort
							<img src="sort.png" alt="sort" />
						</div>

						<div className={transactionsStyles.downloadTable}>
							<img src="download.png" alt="download" />
						</div>
					</div>
				</div>

				<table className={transactionsStyles.transactionsTable}>
					<tbody>
						<tr className={transactionsStyles.headingRow}>
							<th>Order ID</th>
							<th>Order Date</th>
							<th>Order Amount</th>
							<th>Transaction fees</th>
						</tr>

						<tr>
							<td>#281209</td>
							<td>7 July, 2023</td>
							<td>₹1,278.23</td>
							<td>₹22</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Transactions;
