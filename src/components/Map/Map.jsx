import styles from './Map.module.css';

// import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
// import { useMemo } from 'react';

export const Map = () => {
	const newLocal =
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409042779789!2d13.372469775893133!3d52.50793613712363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sTel-Ran.de%20GmbH!5e0!3m2!1seng!2sde!4v1684535567232!5m2!1seng!2sde';
	// const { isLoaded } = useLoadScript({
	// 	googleMapsApiKey: 'AIzaSyA8PawwggBIhoTnxd5-kvrq7aZPft-3kFY',
	// });
	// const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

	return (
		<div className={styles.map_wrapper}>
			<iframe className={styles.map_container} src={newLocal}></iframe>
		</div>
	);
	// return (
	// 	<div className={styles.map_wrapper}>
	// 		{!isLoaded ? (
	// 			<h1>Loading...</h1>
	// 		) : (
	// 			<GoogleMap
	// 				mapContainerClassName={styles.map_container}
	// 				center={center}
	// 				zoom={10}
	// 			>
	// 				<Marker position={{ lat: 18.52043, lng: 73.856743 }} />
	// 			</GoogleMap>
	// 		)}
	// 	</div>
	// );
};
