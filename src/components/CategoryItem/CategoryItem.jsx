import { base_url } from '../../asyncActions/url';
import styles from './CategoryItem.module.css';

export const CategoryItem = ({ id, image, title }) => {
	return (
		<li className={styles.category_item}>
			<div className={styles.img_wrapper}>
				<img src={`${base_url}${image}`} alt="title" />
			</div>
			<h3 className={styles.category_title}>{title}</h3>
		</li>
	);
};
