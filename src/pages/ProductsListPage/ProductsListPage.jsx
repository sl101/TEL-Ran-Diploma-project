import { useLocation, useParams } from 'react-router-dom';
import { Filter, ProductsList } from '../../components';
import styles from './ProductsListPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
	fetchAllProductsList,
	fetchCategoryListById,
} from '../../asyncActions/products';

export const ProductsListPage = () => {
	const { state } = useLocation();

	const { id } = useParams();
	const dispatch = useDispatch();

	const pageTitle = useSelector((store) => store.products.pageTitle);
	const productsList = useSelector(
		(store) => store.products.productslist
	).filter((product) => product.rangeVisible && product.discontVisible);

	// useEffect(() => {
	// 	window.scrollTo(0, 0);
	// }, [state]);

	useEffect(() => {
		window.scrollTo(0, 0);
		// console.log('state: ', state);
		if (state === 'category') {
			dispatch(fetchCategoryListById(id));
		} else {
			dispatch(fetchAllProductsList(state));
		}
	}, [dispatch, id, state]);

	// console.log('ProductsListPage pageTitle: ', pageTitle);
	// console.log('ProductsListPage productsList: ', productsList);
	return (
		<section className={styles.products_page}>
			<div className="container">
				<h1 className="title">{pageTitle.title}</h1>
				<Filter content={state} />
				<ProductsList
					quantity={8}
					pageState={state}
					products={productsList.filter((el) => el.rangeVisible)}
				/>
			</div>
		</section>
	);
};
