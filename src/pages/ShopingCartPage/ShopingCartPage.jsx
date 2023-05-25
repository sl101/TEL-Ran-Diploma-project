import { useEffect } from 'react';
import styles from './ShopingCartPage.module.css';
import { NavLink } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { CartList, Order } from '../../components';
import { useSelector } from 'react-redux';

export const ShopingCartPage = () => {
	const totalSumm = useSelector((store) => store.cart.totalSumm);
	// console.log('ShopingCartPage totalSumm: ', totalSumm);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section className={styles.cart_page}>
			<div className="container">
				<h1 className="title">Shopping cart</h1>
				<div className={styles.cart_wrapper}>
					<div className={styles.cart_content}>
						<NavLink to="/products" state="all" className={styles.back_link}>
							<p>Back to the store</p>
							<IoIosArrowForward />
						</NavLink>
						<CartList />
					</div>
					<div className={styles.order_block}>
						<Order totalSumm={totalSumm} />
					</div>
				</div>
			</div>
		</section>
	);
};
