import Overview from "../overview/Overview";
import paymentsStyles from "./Payments.module.css";

const Payments = () => {
	return (
		<div className={paymentsStyles.container}>
			<div className={paymentsStyles.paymentsOverviewContainer}>
				<Overview />
			</div>

			<div className={paymentsStyles.transactionsContainer}></div>
		</div>
	);
};

export default Payments;
