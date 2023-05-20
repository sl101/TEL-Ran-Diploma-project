import { useLocation } from 'react-router-dom';
import { ProductsList } from '../../components';
import styles from './ProductsListPage.module.css';
import { useSelector } from 'react-redux';

export const ProductsListPage = () => {
	const location = useLocation();

	const products = useSelector((store) => store.products);
	const categories = useSelector((store) => store.categories);

	const listData = (location_state) => {
		const show_quantity = 8;
		const category_id = 1;
		console.log('location_state: ', location_state);
		switch (location_state) {
			case 'all':
				return {
					title: 'All products',
					target_products: products
						.sort(() => Math.random() - 0.5)
						.slice(0, show_quantity),
				};

			case 'sale':
				return {
					title: 'Products with sale',
					target_products: products
						.filter((product) => product.discont_price)
						.sort(() => Math.random() - 0.5)
						.slice(0, show_quantity),
				};

			default:
				return {
					title: 'Tools and equipment',
					target_products: categories.filter(
						(category) => category.id === category_id
					),
				};
		}
	};

	const { title, target_products } = listData(location.state);

	return (
		<section>
			<div className="container">
				<h1 className="title">{title}</h1>
				<ProductsList products={target_products} />
			</div>
		</section>
	);
};
