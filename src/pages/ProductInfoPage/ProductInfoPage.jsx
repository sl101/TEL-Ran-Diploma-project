import { useEffect } from 'react';
import styles from './ProductInfoPage.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductByID } from '../../asyncActions/products';
import { base_url } from '../../asyncActions/url';
import { ProductPrice } from './../../components/ProductPrice/ProductPrice';
import { Button } from './../../components/UI/Button/Button';
import { addToCartAction } from '../../store/cartReducer';

export const ProductInfoPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const productInfo = useSelector((store) => store.productInfo);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		if (productInfo.status === '*') {
			navigate('/*');
		}
	}, [navigate, productInfo]);

	useEffect(() => {
		id && dispatch(fetchProductByID(`/products/${id}`));
	}, [dispatch, id]);

	const { title, image, price, discont_price, description } = productInfo || {};

	const addToCart = (e) => {
		e.preventDefault();
		dispatch(addToCartAction(productInfo));
	};

	return (
		<section className={styles.product_info}>
			<div className="container">
				<h1 className="title">{title}</h1>
				<div className={styles.info_wrapper}>
					<div className={styles.info_image}>
						<img src={`${base_url}${image}`} alt={title} />
					</div>

					<div className={styles.info_content}>
						<ProductPrice
							price={price}
							discont_price={discont_price}
							content="info"
						/>
						<Button text="To cart" content="info" onClick={addToCart} />
						<div className={styles.description}>
							<p className={styles.description_title}>Description</p>
							<p>{description}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
