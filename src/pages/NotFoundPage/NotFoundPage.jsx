import { useEffect } from 'react';
import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return <section className={styles.notfound}>NotFoundPage</section>;
};
