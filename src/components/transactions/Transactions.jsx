import transactionsStyles from "./Transactions.module.css";
import { IconSearch } from "@tabler/icons-react";
import transactionData from "../../utils/data.json";

const Transactions = () => {
	const temp = transactionData[0].orderDate;
	console.log(temp);

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
							<th className={transactionsStyles.tableNumData}>Order Amount</th>
							<th className={transactionsStyles.tableNumData}>
								Transaction fees
							</th>
						</tr>

						{transactionData.map((record) => {
							return (
								<tr key={record.id} className={transactionsStyles.dataRow}>
									<td className={transactionsStyles.orderId}>
										{record.orderId}
									</td>
									<td>7 July, 2023</td>
									<td className={transactionsStyles.tableNumData}>
										{record.orderAmt}
									</td>
									<td className={transactionsStyles.tableNumData}>
										{record.trxnFees}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Transactions;
