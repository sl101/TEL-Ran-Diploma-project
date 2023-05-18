import styles from './Header.module.css';
import logo from '../../media/images/logo.png';

import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Button, Navigation } from '../';
import { NavLink } from 'react-router-dom';

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.header_wrapper}>
					{/* <div className={styles.header_content}> */}
					<div className={styles.logo}>
						<img src={logo} alt="logo" />
					</div>

					<NavLink
						className={styles.btn_wrapper}
						to="/categories"
						tabindex="-1"
					>
						<Button text="Catalog" content="header_btn" />
					</NavLink>

					{/* </div> */}
					<Navigation />
				</div>
			</div>
		</header>
	);
};
