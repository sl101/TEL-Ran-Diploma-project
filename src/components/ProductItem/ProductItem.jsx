import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addProductToCart } from '../../store/cartSlice';
import { ProductPrice, Button } from '../';
import { base_url } from '../../asyncActions/url';
import styles from './ProductItem.module.css';

export const ProductItem = (props) => {
	const { id, image, title, price, discont_price } = props;

	const dispatch = useDispatch();

	const addToCart = (e) => {
		e.preventDefault();
		dispatch(addProductToCart(props));
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
					<ProductPrice price={price} discont_price={discont_price} />
					<h3 className={styles.product_title}>{title}</h3>
				</div>
			</NavLink>
		</li>
	);
};
