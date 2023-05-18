import styles from './Head.module.css';
import flowers from '../../media/images/flowers.png';
import { NavLink } from 'react-router-dom';

export const Head = () => {
	return (
		<section className={styles.head}>
			<div className={styles.head_inner}>
				<h1 className={styles.head_title}>
					Sale
					<span>New season</span>
				</h1>
				<NavLink to="#sale" className={styles.head_link}>
					Sale
				</NavLink>
			</div>
			<div className={styles.image_wrapper}>
				<img src={flowers} alt="flower garden" />
			</div>
		</section>
	);
};
