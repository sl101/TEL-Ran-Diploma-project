import styles from './ProductPrice.module.css';

export const ProductPrice = ({ price, discont_price, content }) => {
	const discont =
		discont_price && Math.round(((price - discont_price) * 100) / price);

	return (
		<div
			className={`${styles.price_wrapper} ${styles[content]}`}
			style={
				discont && {
					justifyContent: 'space-between',
				}
			}
		>
			<p className={`${styles.price} ${styles[content]}`}>
				{discont ? discont_price : price}
				<span>&#x24;</span>
			</p>
			{discont && (
				<>
					<p className={styles.old_price}>{price}&#x24;</p>
					<p className={`${styles.discont} ${styles[content]}`}>-{discont}%</p>
				</>
			)}
		</div>
	);
};
