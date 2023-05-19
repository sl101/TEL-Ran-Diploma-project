import { ProductsList } from '../';
import styles from './Sale.module.css';

export const Sale = () => {
	return (
		<section id="sale" className={styles.sale}>
			<div className="container">
				<h2 className="title">Sale</h2>
				<ProductsList amount={3} />
			</div>
		</section>
	);
};
