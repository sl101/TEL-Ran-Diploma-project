import { Catalog, Head, Offer, Sale } from '../../components';

export const MainPage = () => {
	return (
		<div id="home" >
			<Head />
			<Catalog />
			<Offer />
			<Sale />
		</div>
	);
};
