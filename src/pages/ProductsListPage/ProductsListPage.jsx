import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Filter, ProductsList } from '../../components';
import styles from './ProductsListPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryById } from '../../asyncActions/categories';
import { useCallback, useEffect } from 'react';
import { fetchProductsList } from '../../asyncActions/products';

export const ProductsListPage = () => {
	const { state } = useLocation();

	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	let products = useSelector((store) => store.products);
	let category = useSelector((store) => store.category);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [state]);

	const getProducts = useCallback(
		() =>
			products
				? products.filter(
						(product) => product.rangeVisible && product.discontVisible
				  )
				: [],
		[products]
	);

	const getSaleProducts = useCallback(
		() =>
			products
				? products
						.filter((product) => product.discont_price)
						.filter((product) => product.rangeVisible)
				: [],
		[products]
	);

	const getCategoryProducts = useCallback(
		() =>
			category.data?.filter(
				(product) => product.rangeVisible && product.discontVisible
			),
		[category.data]
	);

	useEffect(() => {
		if (!dataMap[state]) {
			navigate('/*');
		}
	}, [state, navigate]);

	useEffect(() => {
		if (state === 'category') {
			dispatch(fetchCategoryById(`/categories/${id}`));
		} else {
			dispatch(fetchProductsList('/products/all'));
		}
	}, [id, dispatch, state]);

	let dataMap = {
		all: {
			title: 'All products',
			getData: () => getProducts(),
		},
		sale: {
			title: 'Products with sale',
			getData: () => getSaleProducts(),
		},
		category: {
			title: category.data ? category.category.title : '',
			getData: () => getCategoryProducts(),
		},
	};

	const { title, getData } = dataMap[state] || [];
	const targetData = dataMap[state] && getData();

	// console.log('ProductsListPage targetData: ', products);
	// console.log('ProductsListPage products.length: ', targetData?.length);
	return (
		<section className={styles.products_page}>
			<div className="container">
				<h1 className="title">{title}</h1>
				<Filter content={state} />
				<ProductsList
					quantity={8}
					pageState={state}
					products={targetData?.filter((el) => el.rangeVisible)}
				/>
			</div>
		</section>
	);
};
