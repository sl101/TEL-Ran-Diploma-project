import { useLocation, useParams } from 'react-router-dom';
import { ProductsList } from '../../components';
import styles from './ProductsListPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryById } from '../../asyncActions/categories';
import { useCallback, useEffect, useState } from 'react';

export const ProductsListPage = () => {
	const [targetData, setTargetData] = useState([]);
	const [targetTitle, setTargetTitle] = useState('');

	const location = useLocation();
	const params = useParams();
	const dispatch = useDispatch();

	let products = useSelector((store) => store.products);
	let category = useSelector((store) => store.category);

	useEffect(() => {
		params.id && dispatch(fetchCategoryById(`/categories/${params.id}`));
	}, []);

	useEffect(() => {
		getTargetData(location.state);
	}, [category, products, location, params, dispatch]);

	let getTargetData = useCallback((location_state) => {
		const show_quantity = 8;
		switch (location_state) {
			case 'all':
				setTargetTitle('All products');
				setTargetData([
					...products.sort(() => Math.random() - 0.5).slice(0, show_quantity),
				]);
				break;

			case 'sale':
				setTargetTitle('Products with sale');
				setTargetData([
					...products
						.filter((product) => product.discont_price)
						.sort(() => Math.random() - 0.5)
						.slice(0, show_quantity),
				]);
				break;

			case 'category':
				if (category.data) {
					setTargetTitle(category.category.title);
					setTargetData([
						...category.data
							.sort(() => Math.random() - 0.5)
							.slice(0, show_quantity),
					]);
				}
				break;

			default:
				break;
		}
	});

	return (
		<section className={styles.products_page}>
			<div className="container">
				<h1 className="title">{targetTitle}</h1>
				<ProductsList products={targetData} />
			</div>
		</section>
	);
};
