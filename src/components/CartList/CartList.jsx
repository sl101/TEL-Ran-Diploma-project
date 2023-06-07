import { useSelector } from 'react-redux';
import styles from './CartList.module.css';
import { CartItem } from '../CartItem/CartItem';

export const CartList = () => {
	const cartList = useSelector((store) => store.cart.cartList);

	return (
		<div className={styles.cart_list}>
			{cartList.map((item, index) => (
				<CartItem key={index} {...item} />
			))}
		</div>
	);
};
