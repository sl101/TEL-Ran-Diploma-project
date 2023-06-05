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
	const [active, setActive] = useState('');

	useEffect(() => {
		if (active) {
			const scrollbarWidth =
				window.innerWidth - document.documentElement.clientWidth;
			document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
			document.body.style.overflow = 'hidden';
		} else {
			document.documentElement.style.paddingRight = '';
			document.body.style.overflow = 'auto';
		}
	}, [active]);

	useEffect(() => {
		// Функция обработчик события изменения размера окна
		const activeStopBySize = () => {
			if (window.innerWidth > 762) setActive(false);
		};

		// Добавляем слушатель события изменения размера окна
		window.addEventListener('resize', activeStopBySize);

		// Очищаем слушатель события при размонтировании компонента
		return () => {
			window.removeEventListener('resize', activeStopBySize);
		};
	}, []);

	const toggleActive = () => {
		setActive(active === 'active' ? '' : 'active');
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

					<div className={`${styles.menu} ${styles[active]}`}>
						<NavLink
							to="/categories"
							className={styles.btn_wrapper}
							tabIndex="-1"
							onClick={toggleActive}
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
							<p className={styles.cart_total}>{totalAmount}</p>
						</NavLink>
					</div>
					<Burger onClick={toggleActive} active={active} />
				</div>
			</div>
		</header>
	);
};
