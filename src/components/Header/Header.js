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

	const scrollWithOffset = (el) => {
		const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
		const yOffset = window.innerWidth < 762 ? -98 : 0;
		window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
	};

	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.header_wrapper}>
					<HashLink
						className={styles.logo_wrapper}
						smooth
						to="/#home"
						onClick={() => setActive(false)}
						scroll={(el) => scrollWithOffset(el)}
					>
						<div className={styles.logo}>
							<img src={logo} alt="logo" />
						</div>
					</HashLink>

					<div className={`${styles.menu} ${styles[active]}`}>
						<HashLink
							className={styles.btn_wrapper}
							smooth
							to="/#catalog"
							onClick={toggleActive}
							tabIndex="-1"
							scroll={(el) => scrollWithOffset(el)}
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
