import styles from './CategoriesList.module.css';
import { CategoryItem } from '../';

export const CategoriesList = ({ categories }) => {
	return (
		<ul className={styles.categories_list}>
			{categories.map((category, index) => (
				<CategoryItem key={index} {...category} />
			))}
		</ul>
	);
};
