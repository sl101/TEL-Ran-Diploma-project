import { ProductItem } from '../';
import styles from './ProductsList.module.css';

export const ProductsList = ({ products, quantity }) => {
	// console.log('ProductsList: ', products);

	return (
		<ul className={styles.products_list}>
			{products?.slice(0, quantity).map((elem, index) => (
				<ProductItem key={index} {...elem} />
			))}
		</ul>
	);
};
