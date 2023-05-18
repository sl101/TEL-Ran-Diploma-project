import { NavLink } from 'react-router-dom';
import styles from './Catalog.module.css';

export const Catalog = () => {
	return (
		<section className={styles.catalog}>
			<div className="container">
				<div className={styles.catalog_top}>
					<h2 className="title">Catalog</h2>
					<NavLink>
						<p>All categories </p>
					</NavLink>
				</div>
				{}
			</div>
		</section>
	);
};
