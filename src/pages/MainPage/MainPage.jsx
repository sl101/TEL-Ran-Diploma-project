import { useEffect } from 'react';
import { Catalog, Head, Offer, Sale } from '../../components';

export const MainPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<Head />
			<Catalog />
			<Offer />
			<Sale />
		</div>
	);
};
