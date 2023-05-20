import { Catalog, Head, Offer, Sale } from '../../components';
import styles from './MainPage.module.css';

export const MainPage = () => {
	return (
		<div>
			<Head />
			<Catalog />
			<Offer />
			<Sale />
		</div>
	);
};
