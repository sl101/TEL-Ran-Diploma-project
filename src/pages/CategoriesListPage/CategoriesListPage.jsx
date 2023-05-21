import { useLocation } from 'react-router-dom';
import { CategoriesList } from '../../components';
import styles from './CategoriesListPage.module.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const CategoriesListPage = () => {
	const categories = useSelector((store) => store.categories);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section className={styles.categories_page}>
			<div className="container">
				<h1 className="title">Categories</h1>
				<CategoriesList categories={categories} />
			</div>
		</section>
	);
};
