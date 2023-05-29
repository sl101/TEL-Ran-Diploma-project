import styles from './Alert.module.css';
import { Button } from './../UI/Button/Button';
import { forwardRef } from 'react';
export const Alert = forwardRef(
	({ message, text, content, setShowMessage }, ref) => {
		return (
			<div className={styles.allert_wrapper} ref={ref}>
				<div className={styles.alert}>
					<p className={styles.alert_message}>{message}</p>
					<Button
						text={text}
						content={content}
						onClick={() => setShowMessage(false)}
					/>
				</div>
			</div>
		);
	}
);
