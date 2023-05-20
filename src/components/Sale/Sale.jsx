import { useDispatch, useSelector } from 'react-redux';
import { ProductsList } from '../';
import styles from './Sale.module.css';
import { useEffect } from 'react';
import { fetchProductsList } from './../../asyncActions/products';

export const Sale = () => {
	let dispatch = useDispatch();

	useEffect(() => dispatch(fetchProductsList('/products/all')), []);

	const products = useSelector((store) => store.products);

	const targetProducts = products
		.filter((product) => product.discont_price)
		.sort(() => Math.random() - 0.5)
		.slice(0, 3);

	return (
		<section id="sale" className={styles.sale}>
			<div className="container">
				<h2 className="title">Sale</h2>
				<ProductsList products={targetProducts} />
			</div>
		</section>
	);
};
