import { base_url } from '../../asyncActions/url';
import styles from './ProductItem.module.css';

export const ProductItem = ({ image, title, price, discont_price }) => {
	const discont =
		discont_price && Math.round(((price - discont_price) * 100) / price);

	return (
		<li className={styles.product_item}>
			<div className={styles.img_wrapper}>
				<img src={`${base_url}${image}`} alt={title} />
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
		</li>
	);
};
