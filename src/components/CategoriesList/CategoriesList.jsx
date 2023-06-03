import styles from './CategoriesList.module.css';
import { CategoryItem } from '../';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategoriesList } from '../../asyncActions/categories';

export const CategoriesList = ({ listLength = 8 }) => {
	const dispatch = useDispatch();

	useEffect(() => dispatch(fetchCategoriesList('/categories/all')), []);

	const categories = useSelector((store) => store.categories);

	const targetCategories = categories
		.sort(() => Math.random() - 0.5)
		.slice(0, listLength);

	return (
		<ul className={styles.categories_list}>
			{targetCategories.map((category, index) => (
				<CategoryItem key={index} {...category} />
			))}
		</ul>
	);
};