import styles from './Map.module.css';
export const Map = () => {
	return (
		<div style={{ width: '100%' }}>
			<iframe
				title="google map"
				style={{
					width: '100%',
					height: '525px',
					frameborder: '0',
					scrolling: 'no',
					marginheight: '0',
					marginwidth: '0',
				}}
				src="https://maps.google.com/maps?width=100%25&amp;height=525&amp;hl=en&amp;q=Tel-Ran.de%20GmbH+(Tel-Ran%20school)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
			/>
		</div>
	);
};
