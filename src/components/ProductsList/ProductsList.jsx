import { ProductItem } from '../';
import styles from './ProductsList.module.css';

export const ProductsList = ({ products }) => {
	// console.log('ProductsList: ', products);
	return (
		<ul className={styles.products_list}>
			{products?.map((elem, index) => (
				<ProductItem key={index} {...elem} />
			))}
		</ul>
	);
};
