import { NavLink } from 'react-router-dom';
import styles from './Catalog.module.css';
import { CategoriesList } from '../';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategoriesList } from '../../asyncActions/categories';

export const Catalog = () => {
	const dispatch = useDispatch();

	useEffect(() => dispatch(fetchCategoriesList('/categories/all')), []);

	const categories = useSelector((store) => store.categories);

	const targetCategories = categories
		.sort(() => Math.random() - 0.5)
		.slice(0, 4);

	return (
		<section id="catalog" className={styles.catalog}>
			<div className="container">
				<div className={styles.catalog_top}>
					<h2 className="title">Catalog</h2>
					<NavLink to="/categories" className={styles.catalog_link}>
						<p>All categories </p>
					</NavLink>
				</div>
				<CategoriesList categories={targetCategories} />
			</div>
		</section>
	);
};
