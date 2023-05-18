import { Head, Offer, Sale } from '../../components';
import styles from './MainPage.module.css';
import { NavLink } from 'react-router-dom';

export const MainPage = () => {
	return (
		<div>
			<Head />
			<section className={styles.catalog}>
				<div className="container">
					<div className={styles.catalog_top}>
						<h2>Catalog</h2>
						<NavLink>
							<p>All categories </p>
						</NavLink>
					</div>
					{}
				</div>
			</section>
			<Offer />
			<Sale />
		</div>
	);
};
