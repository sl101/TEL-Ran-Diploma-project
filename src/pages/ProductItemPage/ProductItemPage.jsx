import { useEffect } from 'react';
import styles from './ProductItemPage.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductByID } from '../../asyncActions/products';
import { base_url } from '../../asyncActions/url';

export const ProductItemPage = () => {
	// console.log('ProductItemPage');
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

	// console.log(productInfo);
	const { title, image } = productInfo[0];
	return (
		<section className={styles.product_info}>
			<div className="container">
				<h2 className={styles.title}>{title}</h2>
				<div className={styles.content}>
					<div className={styles.img_wrapper}>
						<img src={`${base_url}${image}`} alt={title} />
					</div>
				</div>
			</div>
		</section>
	);
};
