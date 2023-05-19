import styles from './ProductItem.module.css';

export const ProductItem = ({ img, title, old_price, price, discount }) => {
	return (
		<li className={styles.product_item}>
			<div className={styles.img_wrapper}>
				<img src={img} alt="title" />
			</div>
			<div className={styles.product_content}>
				<div className={styles.price_wrapper}>
					<p className={styles.price}>{price}&#x24;</p>
					<p className={styles.old_price}>{old_price}&#x24;</p>
					<p className={styles.discount}>{discount}</p>
				</div>
				<h3 className={styles.product_title}>{title}</h3>
			</div>
		</li>
	);
};
