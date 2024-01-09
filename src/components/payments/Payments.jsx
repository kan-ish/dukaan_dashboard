import Overview from "../overview/Overview";
import Transactions from "../transactions/Transactions";
import paymentsStyles from "./Payments.module.css";

const Payments = () => {
	return (
		<div className={paymentsStyles.container}>
			<div className={paymentsStyles.paymentsOverviewContainer}>
				<Overview />
			</div>

			<div className={paymentsStyles.transactionsContainer}>
				<Transactions />
			</div>
		</div>
	);
};

export default Payments;
