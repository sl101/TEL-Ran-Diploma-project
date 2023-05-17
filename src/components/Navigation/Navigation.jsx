import { NavLink } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import styles from './Navigation.module.css';

export const Navigation = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.nav_list}>
				<li>
					<NavLink to="/">Main Page</NavLink>
				</li>
				<li>
					<NavLink to="/products" state="all">
						All products
					</NavLink>
				</li>
				<li>
					<NavLink to="/products" state="sale">
						All sales
					</NavLink>
				</li>
			</ul>
			<NavLink to="/cart">
				<HiOutlineShoppingBag />
			</NavLink>
		</nav>
	);
};
