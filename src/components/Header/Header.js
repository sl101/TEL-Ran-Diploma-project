import styles from './Header.module.css';
import logo from '../../media/images/logo.png';
import { HashLink } from 'react-router-hash-link';

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
						<HashLink
							className={styles.btn_wrapper}
							smooth
							to="#catalog"
							onClick={toggleActive}
							tabIndex="-1"
						>
							<Button text="Catalog" content="header_btn" />
						</HashLink>

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
