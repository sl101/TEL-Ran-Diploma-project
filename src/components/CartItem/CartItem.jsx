import styles from './CartItem.module.css';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { base_url } from './../../asyncActions/url';
import { ProductPrice } from './../ProductPrice/ProductPrice';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
	addProductToCart,
	decrementProductInCart,
	removeProductFromCartById,
} from '../../store/cartSlice';

export const CartItem = (props) => {
	const { id, image, title, price, discont_price, amount } = props;
	const dispatch = useDispatch();
	return (
		<li className={styles.cart_item}>
			<IoMdClose
				className={styles.del_btn}
				onClick={() => dispatch(removeProductFromCartById(id))}
			/>

			<NavLink to={`/products/${id}`} className={styles.item_wrapper}>
				<img src={`${base_url}${image}`} alt={title} />
			</NavLink>

			<div className={styles.item_content}>
				<h2 className={styles.title}>{title}</h2>

				<div className={styles.counter}>
					<AiOutlineMinus
						className={styles.count_btn}
						onClick={() => dispatch(decrementProductInCart(id))}
					/>
					<p>{amount}</p>
					<AiOutlinePlus
						className={styles.count_btn}
						onClick={() => dispatch(addProductToCart(props))}
					/>
				</div>
			</div>

			<ProductPrice
				price={price}
				discont_price={discont_price}
				content="cart"
			/>
		</li>
	);
};
