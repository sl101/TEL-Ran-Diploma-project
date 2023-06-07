import { CategoriesList } from '../../components';
import styles from './CategoriesListPage.module.css';
import { useEffect } from 'react';

export const CategoriesListPage = () => {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section className={styles.categories_page}>
			<div className="container">
				<h1 className="title">Categories</h1>
				<CategoriesList />
			</div>
		</section>
	);
};
