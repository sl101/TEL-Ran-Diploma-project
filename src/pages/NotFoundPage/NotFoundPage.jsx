import { useEffect } from 'react';
import styles from './NotFoundPage.module.css';
import not_found_image from '../../media/images/notfound.jpg';
import { useLocation, useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
		console.log(location.pathname);
		if (
			location.pathname === '/TEL-Ran-Diploma-project/' ||
			location.pathname === '/TEL-Ran-Diploma-project'
		) {
			navigate('/');
		}
	}, []);

	return (
		<section className={styles.notfound}>
			<img src={not_found_image} alt="Not found page " />
		</section>
	);
};
