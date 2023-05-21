import { useEffect } from 'react';
import { Catalog, Head, Offer, Sale } from '../../components';
import styles from './MainPage.module.css';

export const MainPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div id="home" className={styles.home}>
			<Head />
			<Catalog />
			<Offer />
			<Sale />
		</div>
	);
};
