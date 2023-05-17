import styles from './Map.module.css';
import map from '../../media/images/map.jpg';

export const Map = () => {
	return (
		<div className={styles.map_wrapper}>
			<img src={map} alt="google map" />
		</div>
	);
};
