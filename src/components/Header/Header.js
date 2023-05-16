import styles from './Header.module.css';
import logo from '../../media/images/logo.png';

import { Button, Navigation } from '../';
import { NavLink } from 'react-router-dom';

export const Header = () => {
	return (
		<header>
			<div className="container">
				<div className={styles.header__wrapper}>
					<div className={styles.logo}>
						<img src={logo} alt="logo" />
					</div>
					<Button text="Catalog" />
					<Navigation />
					<NavLink />
				</div>
			</div>
		</header>
	);
};
