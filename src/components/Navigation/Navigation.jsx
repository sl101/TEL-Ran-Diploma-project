import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {
	return (
		<nav>
			<ul>
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
		</nav>
	);
};
