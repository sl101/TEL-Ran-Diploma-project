import { ProductItem } from '../';
import styles from './ProductsList.module.css';

export const ProductsList = ({ products, listJustify }) => {
	return (
		<ul className={styles.products_list} style={listJustify}>
			{products?.map((elem, index) => (
				<ProductItem key={index} {...elem} />
			))}
		</ul>
	);
};
