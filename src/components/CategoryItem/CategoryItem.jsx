import styles from './CategoryItem.module.css';

export const CategoryItem = ({ id, img, title }) => {
	return (
		<li className={styles.category_item}>
			<div className={styles.img_wrapper}>
				<img src={img} alt="title" />
			</div>
			<h3 className={styles.category_title}>{title}</h3>
		</li>
	);
};
