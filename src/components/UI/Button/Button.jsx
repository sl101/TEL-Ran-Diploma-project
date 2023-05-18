import styles from './Button.module.css';

export const Button = ({ content, text, ...other }) => {
	return (
		<button className={`${styles.button} ${styles[content]}`} {...other}>
			{text}
		</button>
	);
};
