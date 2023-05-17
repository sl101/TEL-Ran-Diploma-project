import { useLocation } from 'react-router-dom';
import styles from './ProductsList.module.css';

export const ProductsList = () => {
	const location = useLocation();
	// console.log(location);
	return <div>ProductsList / {location.state}</div>;
};
