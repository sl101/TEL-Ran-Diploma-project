import { useEffect } from 'react';
import styles from './ProductItemPage.module.css';

export const ProductItemPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return <section className={styles.product_info}>ProductItemPage</section>;
};
