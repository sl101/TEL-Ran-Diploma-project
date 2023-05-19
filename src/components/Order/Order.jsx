import { Button, Input } from '../';
import styles from './Order.module.css';

export const Order = () => {
	// export const Order = ({summ}) => {

	const summ = '3700,00';
	const submit = (e) => {
		e.preventDefault();
	};

	return (
		<div className={styles.order}>
			<h3 className={styles.order_title}>Order details</h3>
			<div className={styles.order_summ}>
				<p>Total</p>
				<div>
					{summ}
					<span>$</span>
				</div>
			</div>
			<form className={styles.order_form} onSubmit={submit}>
				<Input content="order" placeholder="Phone number" />
				<Button content="order" text="Order" />
			</form>
		</div>
	);
};
