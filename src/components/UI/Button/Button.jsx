import styles from './Button.module.css';

export const Button = ({ content, text, ...other }) => {
	return (
		<button className={`button ${styles[content]}`} {...other} >
			{text}
		</button>
	);
};
