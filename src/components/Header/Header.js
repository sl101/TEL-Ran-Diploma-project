import styles from './Header.module.css';
import logo from '../../media/images/logo.png';

import { Button, Navigation } from '../';
import { NavLink } from 'react-router-dom';

export const Header = () => {
	return (
		<header>
			<div className="container">
				<div className={styles.header_wrapper}>
					<div className={styles.header_content}>
						<div className={styles.logo}>
							<img src={logo} alt="logo" />
						</div>
						<NavLink className={`btn_wrapper`} to="/categories" tabindex="-1">
							<Button text="Catalog" content="header" />
						</NavLink>
					</div>
					<Navigation />
				</div>
			</div>
		</header>
	);
};
