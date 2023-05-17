import { useLocation } from 'react-router-dom';
import { ProductsList } from '../../components';
import styles from './ProductsListPage.module.css';

export const ProductsListPage = () => {
	const location = useLocation();
	// console.log(location.state);
	const listData = () => {
		switch (location.state) {
			case 'all':
				return {
					title: 'All products',
					products: [],
				};

			case 'sale':
				return {
					title: 'Products with sale',
					products: [],
				};

			default:
				return {
					title: 'Tools and equipment',
					products: [],
				};
		}
	};

	// console.log(listData());
	return (
		<section>
			<div className="container">
				<h1>{listData().title}</h1>
				<ProductsList products={listData().products} />
			</div>
		</section>
	);
};
