import { useEffect } from 'react';
import styles from './ProductInfoPage.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductByID } from '../../asyncActions/products';
import { base_url } from '../../asyncActions/url';
import { ProductPrice } from './../../components/ProductPrice/ProductPrice';
import { Button } from './../../components/UI/Button/Button';

export const ProductInfoPage = () => {
	console.log('ProductInfoPage');
	const { id } = useParams();
	const dispatch = useDispatch();

	const productInfo = useSelector((store) => store.productInfo);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		console.log(id);
		id && dispatch(fetchProductByID(`/products/${id}`));
	}, [dispatch, id]);

	console.log(productInfo);
	const { title, image, price, discont_price, description } =
		productInfo[0] || {};
	return (
		<section className={styles.product_info}>
			<div className="container">
				<h2 className="title">{title}</h2>
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
						<Button text="To cart" content="info" />
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
