import { base_url } from '../../asyncActions/url';
import styles from './ProductItem.module.css';
import { Button } from './../UI/Button/Button';
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../../store/cartReducer';
import { NavLink } from 'react-router-dom';

export const ProductItem = (props) => {
	const { id, image, title, price, discont_price } = props;
	// console.log('ProductItem');

	const dispatch = useDispatch();
	const discont =
		discont_price && Math.round(((price - discont_price) * 100) / price);

	const addToCart = () => {
		dispatch(addToCartAction(props));
	};

	return (
		<li className={styles.product_item}>
			<NavLink to={`/products/${id}`}>
				<div className={styles.img_wrapper}>
					<img src={`${base_url}${image}`} alt={title} />
					<Button
						text="Add to cart"
						content="product_cart"
						onClick={addToCart}
					/>
				</div>
				<div className={styles.product_content}>
					<div
						className={styles.price_wrapper}
						style={
							discont && {
								justifyContent: 'space-between',
							}
						}
					>
						<p className={styles.price}>
							{discont ? discont_price : price}&#x24;
						</p>
						{discont && (
							<>
								<p className={styles.old_price}>{price}&#x24;</p>
								<p className={styles.discount}>-{discont}%</p>
							</>
						)}
					</div>
					<h3 className={styles.product_title}>{title}</h3>
				</div>
			</NavLink>
		</li>
	);
};
