import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { HashLink } from 'react-router-hash-link';

export const Navigation = ({ ...other }) => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.nav_list}>
				<li className={styles.nav_item}>
					<HashLink className={styles.nav_link} smooth to="/#header" {...other}>
						Main Page
					</HashLink>
				</li>
				<li>
					<NavLink
						className={styles.nav_link}
						to="/products"
						state="all"
						{...other}
					>
						All products
					</NavLink>
				</li>
				<li>
					<NavLink
						className={styles.nav_link}
						to="/products"
						state="sale"
						{...other}
					>
						All sales
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};
