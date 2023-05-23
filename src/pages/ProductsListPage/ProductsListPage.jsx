import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ProductsList } from '../../components';
import styles from './ProductsListPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryById } from '../../asyncActions/categories';
import { useCallback, useEffect } from 'react';
import { fetchProductsList } from '../../asyncActions/products';

export const ProductsListPage = () => {
	// console.log('ProductsListPage');
	const { state } = useLocation();
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const show_quantity = 8;

	let products =
		useSelector((store) => store.products) ||
		dispatch(fetchProductsList('/products/all'));
	let category = useSelector((store) => store.category);

	const getRandomProducts = useCallback(
		(quantity) =>
			products
				? products.sort(() => Math.random() - 0.5).slice(0, quantity)
				: [],
		[products]
	);

	const getSaleProducts = useCallback(
		(quantity) =>
			products
				? products
						.filter((product) => product.discont_price)
						.sort(() => Math.random() - 0.5)
						.slice(0, quantity)
				: [],
		[products]
	);

	const getCategoryProducts = useCallback(
		(quantity) =>
			category.data?.sort(() => Math.random() - 0.5).slice(0, quantity),
		[category.data]
	);

	useEffect(() => {
		if (!dataMap[state]) {
			navigate('/*');
		}
	}, [state, navigate]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		if (id) {
			dispatch(fetchCategoryById(`/categories/${id}`));
		}
	}, [id, dispatch]);

	useEffect(() => {
		if (!products.length) {
			dispatch(fetchProductsList('/products/all'));
		}
	}, [products, dispatch]);

	let dataMap = {
		all: {
			title: 'All products',
			getData: () => getRandomProducts(show_quantity),
		},
		sale: {
			title: 'Products with sale',
			getData: () => getSaleProducts(show_quantity),
		},
		category: {
			title: category.data ? category.category.title : '',
			getData: () => getCategoryProducts(show_quantity),
		},
	};

	const { title, getData } = dataMap[state] || [];
	const targetData = dataMap[state] && getData();

	return (
		<section className={styles.products_page}>
			<div className="container">
				<h1 className="title">{title}</h1>
				<ProductsList products={targetData} />
			</div>
		</section>
	);
};
