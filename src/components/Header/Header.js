import styles from './Header.module.css';
import logo from '../../media/images/logo.png';
import { HashLink } from 'react-router-hash-link';

import { Burger, Button, Navigation } from '../';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { useSelector } from 'react-redux';

export const Header = () => {
	const totalAmount = useSelector((store) => store.cart.totalAmount);
	const [active, setActive] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			const windowWidth = window.innerWidth;
			if (windowWidth > 762) setActive(false);
		};

		window.addEventListener('resize', handleResize);

		handleResize();
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		const handleScroll = (event) => {
			if (active) {
				event.preventDefault();
				event.stopPropagation();
			}
		};

		const options = { passive: false };

		document.addEventListener('wheel', handleScroll, options);
		document.addEventListener('touchmove', handleScroll, options);

		return () => {
			document.removeEventListener('wheel', handleScroll);
			document.removeEventListener('touchmove', handleScroll);
		};
	}, [active]);

	const toggleActive = () => {
		setActive(!active);
	};

	return (
		<header id="header" className={styles.header}>
			<div className="container">
				<div className={styles.header_wrapper}>
					<HashLink
						className={styles.logo_wrapper}
						smooth
						to="/#header"
						onClick={() => setActive(false)}
					>
						<div className={styles.logo}>
							<img src={logo} alt="logo" />
						</div>
					</HashLink>

					<div className={`${styles.menu} ${styles[active && 'active']}`}>
						<NavLink
							to="/categories"
							className={styles.btn_wrapper}
							tabIndex="-1"
							onClick={() => setActive(false)}
						>
							<Button text="Catalog" content="header_btn" />
						</NavLink>

						<Navigation onClick={() => setActive(false)} />

						<NavLink
							className={styles.cart_link}
							to="/cart"
							onClick={() => setActive(false)}
						>
							<HiOutlineShoppingBag />
							<p className={styles.cart_total}>{totalAmount}</p>
						</NavLink>
					</div>
					<Burger onClick={toggleActive} active={active && 'active'} />
				</div>
			</div>
		</header>
	);
};
