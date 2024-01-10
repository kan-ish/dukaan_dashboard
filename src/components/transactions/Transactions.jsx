import transactionsStyles from "./Transactions.module.css";
import {
	IconSearch,
	IconChevronLeft,
	IconChevronRight,
	IconInfoCircle,
} from "@tabler/icons-react";
import transactionData from "../../utils/data.json";
import TransactionRecord from "./transactionRecord/TransactionRecord";
import { useState } from "react";

const Transactions = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages =
		transactionData.length % 20 > 0
			? Math.ceil(transactionData.length / 20)
			: Math.ceil(transactionData.length / 20);

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
							<span className={transactionsStyles.sortTableText}>
								Sort
							</span>
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
							<th>
								<div className={transactionsStyles.orderDate}>
									Order Date
									<div
										className={
											transactionsStyles.currentSortIconContainer
										}>
										<img
											src="headericon2.png"
											className={
												transactionsStyles.currentSortIcon
											}
											alt="Descending sort"
										/>
									</div>
								</div>
							</th>
							<th className={transactionsStyles.tableNumData}>
								Order Amount
							</th>
							<th className={transactionsStyles.tableNumData}>
								<div
									className={
										transactionsStyles.transactionFees
									}>
									Transaction fees{" "}
									<IconInfoCircle
										className={transactionsStyles.info}
										size={14}
										color="#4D4D4D"
									/>
								</div>
							</th>
						</tr>

						{transactionData
							.slice(currentPage * 20 - 1, currentPage * 20 + 19)
							.map((record) => {
								return (
									<TransactionRecord
										key={record.id}
										record={record}
									/>
								);
							})}
					</tbody>
				</table>

				<div className={transactionsStyles.pagination}>
					<div
						className={transactionsStyles.previousPage}
						onClick={() => {
							currentPage > 1
								? setCurrentPage(currentPage - 1)
								: setCurrentPage(totalPages - 1);
						}}>
						<IconChevronLeft size={18} />
						Previous
					</div>

					{Array.from({ length: totalPages - 1 }).map((_, index) => {
						return (
							<span
								key={index}
								className={`${transactionsStyles.pageNum} ${
									currentPage === index + 1 &&
									transactionsStyles.activePage
								}`}
								onClick={() => setCurrentPage(index + 1)}>
								{index + 1}
							</span>
						);
					})}

					<div
						className={transactionsStyles.nextPage}
						onClick={() => {
							currentPage < totalPages - 1
								? setCurrentPage(currentPage + 1)
								: setCurrentPage(1);
						}}>
						Next
						<IconChevronRight size={18} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Transactions;
