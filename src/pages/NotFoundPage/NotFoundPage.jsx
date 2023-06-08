import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import not_found_image from '../../media/images/notfound.jpg';
import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
		if (
			location.pathname === '/TEL-Ran-Diploma-project/' ||
			location.pathname === '/TEL-Ran-Diploma-project'
		) {
			navigate('/');
		}
	}, [location.pathname, navigate]);

	return (
		<section className={styles.notfound}>
			<img src={not_found_image} alt="Not found page " />
		</section>
	);
};
