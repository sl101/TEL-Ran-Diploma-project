import { useEffect } from 'react';
import { Catalog, Head, Offer, Sale } from '../../components';
import s from './MainPage.module.css';

export const MainPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div id="home" className={s.main_page}>
			<Head />
			<Catalog />
			<Offer />
			<Sale />
		</div>
	);
};
