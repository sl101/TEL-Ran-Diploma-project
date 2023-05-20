import styles from './Footer.module.css';
import { Contacts } from '../';
import { Map } from '../';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<Contacts />
				<Map />
			</div>
		</footer>
	);
};
