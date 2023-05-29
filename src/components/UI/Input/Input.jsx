import { forwardRef } from 'react';
import styles from './Input.module.css';

export const Input = forwardRef(
	({ min, step, name, type, content, placeholder, ...other }, ref) => {
		return (
			<input
				className={`${styles.input} ${styles[content]}`}
				step={step}
				min={min}
				ref={ref}
				type={type}
				name={name}
				placeholder={placeholder}
				{...other}
			/>
		);
	}
);
