import { ProductItem } from '../';
import styles from './ProductsList.module.css';

import flowers from '../../media/images/flowers.png';

export const ProductsList = ({ amount = Infinity, products }) => {
	return (
		<ul className={styles.products_list}>
			{products}
			<ProductItem
				id="1"
				img={flowers}
				title="Fertilizer"
				price="500"
				old_price="1000"
				discount="-7%"
			/>
		</ul>
	);
};
