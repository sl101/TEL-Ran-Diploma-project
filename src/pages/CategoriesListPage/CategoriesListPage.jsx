import { CategoriesList } from '../../components';
import styles from './CategoriesListPage.module.css';

export const CategoriesListPage = () => {
	return (
		<section>
			<div className="container">
				<h1 className="title">Categories</h1>
				<CategoriesList />
			</div>
		</section>
	);
};
