import styles from './CategoriesList.module.css';
import { CategoryItem } from '../';

import flowers from '../../media/images/flowers.png';

export const CategoriesList = ({ amount = Infinity }) => {
	// console.log(amount);
	return (
		<ul className={styles.categories_list}>
			<CategoryItem id="1" img={flowers} title="Fertilizer" />
		</ul>
	);
};
