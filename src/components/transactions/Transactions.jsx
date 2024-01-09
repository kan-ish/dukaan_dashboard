import transactionsStyles from "./Transactions.module.css";
import {
	IconSearch,
	IconChevronLeft,
	IconChevronRight,
} from "@tabler/icons-react";
import transactionData from "../../utils/data.json";
import TransactionRecord from "./transactionRecord/TransactionRecord";

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
							<th className={transactionsStyles.tableNumData}>Order Amount</th>
							<th className={transactionsStyles.tableNumData}>
								Transaction fees
							</th>
						</tr>

						{transactionData.map((record) => {
							return <TransactionRecord record={record} />;
						})}
					</tbody>
				</table>

				<div className={transactionsStyles.pagination}>
					<div className={transactionsStyles.previousPage}>
						<IconChevronLeft size={18} />
						Previous
					</div>

					<div className={transactionsStyles.pages}>
						<span className={transactionsStyles.pageNum}>1</span>
						<span className={transactionsStyles.pageNum}>2</span>
						<span className={transactionsStyles.pageNum}>...</span>
						<span
							className={`${transactionsStyles.pageNum} ${transactionsStyles.activePage}`}
						>
							10
						</span>
						<span className={transactionsStyles.pageNum}>11</span>
						<span className={transactionsStyles.pageNum}>12</span>
						<span className={transactionsStyles.pageNum}>13</span>
						<span className={transactionsStyles.pageNum}>14</span>
						<span className={transactionsStyles.pageNum}>15</span>
						<span className={transactionsStyles.pageNum}>16</span>
						<span className={transactionsStyles.pageNum}>17</span>
						<span className={transactionsStyles.pageNum}>18</span>
					</div>

					<div className={transactionsStyles.nextPage}>
						Next
						<IconChevronRight size={18} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Transactions;
