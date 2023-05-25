import { useEffect } from 'react';
import styles from './NotFoundPage.module.css';
import not_found_image from '../../media/images/notfound.jpg';

export const NotFoundPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<section className={styles.notfound}>
			<img src={not_found_image} alt="Not found page " />
		</section>
	);
};
