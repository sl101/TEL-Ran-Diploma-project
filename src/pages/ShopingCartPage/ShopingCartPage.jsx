import { useEffect } from 'react';
import styles from './ShopingCartPage.module.css';

export const ShopingCartPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return <section className={styles.shopping_page}>ShopingCartPage</section >;
};
