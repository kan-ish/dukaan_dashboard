import recordStyles from "./TransactionRecord.module.css";

const TransactionRecord = ({ record }) => {
	return (
		<>
			<tr key={record.id} className={recordStyles.dataRow}>
				<td className={recordStyles.orderId}>{record.orderId}</td>
				<td>7 July, 2023</td>
				<td className={recordStyles.tableNumData}>{record.orderAmt}</td>
				<td className={recordStyles.tableNumData}>{record.trxnFees}</td>
			</tr>
		</>
	);
};

export default TransactionRecord;
