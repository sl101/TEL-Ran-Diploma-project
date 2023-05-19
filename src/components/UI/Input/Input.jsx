import styles from './Input.module.css';

export const Input = ({ content, placeholder }) => {
	return (
		<input
			className={`${styles.input} ${styles[content]}`}
			placeholder={placeholder}
		/>
	);
};
