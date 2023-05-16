import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { HiOutlineShoppingBag } from 'react-icons/hi';

export const Navigation = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/">Main Page</NavLink>
				</li>
				<li>
					<NavLink to="/products">All products</NavLink>
				</li>
				<li>
					<NavLink to="/products">All sales</NavLink>
				</li>
			</ul>
			<NavLink to="/cart">
				<HiOutlineShoppingBag />
			</NavLink>
		</nav>
	);
};
