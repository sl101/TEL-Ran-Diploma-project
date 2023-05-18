import { Catalog, Head, Offer, Sale } from '../../components';
import styles from './MainPage.module.css';
import { NavLink } from 'react-router-dom';

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
