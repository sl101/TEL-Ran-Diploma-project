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

	useEffect(() => {
		window.scrollTo(0, 0);
		if (state === 'category') {
			dispatch(fetchCategoryListById(id));
		} else {
			dispatch(fetchAllProductsList(state));
		}
	}, [dispatch, id, state]);

	return (
		<section className={styles.products_page}>
			<div className="container">
				<h1 className="title">{pageTitle.title}</h1>
				<Filter content={state} />
				<ProductsList
					pageState={state}
					products={productsList.filter((el) => el.rangeVisible)}
				/>
			</div>
		</section>
	);
};
