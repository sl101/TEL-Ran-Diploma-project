import { NavLink } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import styles from './Navigation.module.css';

export const Navigation = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.nav_list}>
				<li>
					<NavLink className={styles.nav_link} to="/">
						Main Page
					</NavLink>
				</li>
				<li>
					<NavLink className={styles.nav_link} to="/products" state="all">
						All products
					</NavLink>
				</li>
				<li>
					<NavLink className={styles.nav_link} to="/products" state="sale">
						All sales
					</NavLink>
				</li>
			</ul>
			<NavLink className={`${styles.nav_cart} ${styles.nav_link}`} to="/cart">
				<HiOutlineShoppingBag />
			</NavLink>
		</nav>
	);
};
