import styles from './Header.module.css';
import logo from '../../media/images/logo.png';

import { Button, Navigation } from '../';
import { NavLink } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi';

export const Header = () => {
	return (
		<header>
			<div className="container">
				<div className={styles.header_wrapper}>
					<div className={styles.logo}>
						<img src={logo} alt="logo" />
					</div>
					<NavLink to="/categories">
						<Button text="Catalog" />
					</NavLink>
					<Navigation />
					<NavLink to="/cart">
						<HiOutlineShoppingBag />
					</NavLink>
				</div>
			</div>
		</header>
	);
};
