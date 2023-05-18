import styles from './Header.module.css';
import logo from '../../media/images/logo.png';

import { Burger, Button, Navigation } from '../';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';

export const Header = () => {
	const [active, setActive] = useState('');
	const toggleActive = () => {
		setActive(active === 'active' ? '' : 'active');
	};

	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.header_wrapper}>
					<div className={styles.logo}>
						<img src={logo} alt="logo" />
					</div>
					<div className={`${styles.menu} ${styles[active]}`}>
						<NavLink
							className={styles.btn_wrapper}
							to="/categories"
							onClick={toggleActive}
							// tabindex="-1"
						>
							<Button text="Catalog" content="header_btn" />
						</NavLink>

						<Navigation onClick={toggleActive} />

						<NavLink
							className={styles.cart_link}
							to="/cart"
							onClick={toggleActive}
						>
							<HiOutlineShoppingBag />
						</NavLink>
					</div>
					<Burger onClick={toggleActive} active={active} />
				</div>
			</div>
		</header>
	);
};
