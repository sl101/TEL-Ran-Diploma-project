import { Catalog, Head, Offer, Sale } from '../../components';
import styles from './MainPage.module.css';

export const MainPage = () => {
	return (
		<div id="home" className={styles.home}>
			<Head />
			<Catalog />
			<Offer />
			<Sale />
		</div>
	);
};
