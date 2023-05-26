import styles from './Input.module.css';

export const Input = ({
	value,
	name,
	type,
	content,
	placeholder,
	...other
}) => {
	return (
		<input
			className={`${styles.input} ${styles[content]}`}
			type={type}
			value={value}
			name={name}
			placeholder={placeholder}
			{...other}
		/>
	);
};
