import styles from './Head.module.css';
import flowers from '../../media/images/flowers.png';
import { HashLink } from 'react-router-hash-link';

export const Head = () => {
	return (
		<section className={styles.head}>
			<div className="container">
				<div className={styles.head_wrapper}>
					<div className={styles.head_inner}>
						<h1 className={styles.head_title}>
							Sale
							<span>New season</span>
						</h1>
						<HashLink smooth to="#sale" className={styles.head_link}>
							Sale
						</HashLink>
					</div>
					<div className={styles.image_wrapper}>
						<img src={flowers} alt="flower garden" />
					</div>
				</div>
			</div>
		</section>
	);
};
