import { PhoneForm } from '../';
import styles from './Order.module.css';

export const Order = ({ totalSumm }) => {
	return (
		<div className={styles.order}>
			<h3 className={styles.order_title}>Order details</h3>
			<div className={styles.order_summ}>
				<p>Total</p>
				<div>
					{totalSumm}
					<span>&#x24;</span>
				</div>
			</div>
			<PhoneForm
				contentInput="order"
				placeholderInput="+49"
				contentButton="order"
				textButton="Order"
				message="Finish order and clean cart"
				content="order"
				alertText="Finish"
			/>
		</div>
	);
};
