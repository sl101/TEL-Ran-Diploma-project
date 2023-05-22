import { useDispatch, useSelector } from 'react-redux';
import { ProductsList } from '../';
import styles from './Sale.module.css';
import { useEffect, useState } from 'react';
import { fetchProductsList } from './../../asyncActions/products';

export const Sale = () => {
	let dispatch = useDispatch();

	const [listStyle, setListStyle] = useState({ justifyContent: 'start' });

	useEffect(() => dispatch(fetchProductsList('/products/all')), [dispatch]);

	const products = useSelector((store) => store.products);

	const targetProducts = products
		.filter((product) => product.discont_price)
		.sort(() => Math.random() - 0.5)
		.slice(0, 3);

	useEffect(() => {
		setListStyle(
			window.innerWidth < 1200
				? { justifyContent: 'center' }
				: { justifyContent: 'start' }
		);
	}, []);

	return (
		<section id="sale" className={styles.sale}>
			<div className="container">
				<h2 className="title">Sale</h2>
				<ProductsList products={targetProducts} listJustify={listStyle} />
			</div>
		</section>
	);
};
