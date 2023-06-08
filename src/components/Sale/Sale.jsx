import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsList } from '../';
import { fetchAllProductsList } from './../../asyncActions/products';
import styles from './Sale.module.css';

export const Sale = () => {
	let dispatch = useDispatch();

	useEffect(() => dispatch(fetchAllProductsList('sale')), [dispatch]);

	const products = useSelector((store) => store.products.productslist)
		.filter((product) => product.discont_price)
		.slice(0, 4);

	return (
		<section id="sale" className={styles.sale}>
			<div className="container">
				<h2 className="title">Sale</h2>
				<ProductsList products={products} />
			</div>
		</section>
	);
};
