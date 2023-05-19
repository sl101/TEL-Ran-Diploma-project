import styles from './DiscountForm.module.css';
import { Input, Button } from '../';

export const DiscountForm = () => {
	const getDiscount = (e) => {
		e.preventDefault();
		console.log(e.target);
	};

	return (
		<div>
			<h4 className={styles.offer_title}>
				5% off
				<span>on the first order</span>
			</h4>
			<form className={styles.offer_form} onSubmit={getDiscount}>
				<Input content="sale" placeholder="+49" />
				<Button content="sale" text="Get a discount" />
			</form>
		</div>
	);
};
