import { useRef, useState } from 'react';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import styles from './PhoneForm.module.css';
import { Alert } from '../Alert/Alert';
import { CSSTransition } from 'react-transition-group';

export const PhoneForm = ({
	contentInput,
	placeholderInput,
	contentButton,
	textButton,
	message,
	content,
	alertText,
}) => {
	const [showMessage, setShowMessage] = useState(false);
	const oferRef = useRef(null);

	const handleSumbit = (e) => {
		e.preventDefault();
		setShowMessage(true);
	};

	return (
		<>
			<form className={styles.offer_form} onSubmit={handleSumbit}>
				<Input content={contentInput} placeholder={placeholderInput} />
				<Button content={contentButton} text={textButton} />
			</form>
			<CSSTransition
				in={showMessage}
				nodeRef={oferRef}
				timeout={300}
				classNames="alert"
				unmountOnExit
			>
				<Alert
					ref={oferRef}
					text={alertText}
					content={content}
					message={message}
					setShowMessage={setShowMessage}
				/>
			</CSSTransition>
		</>
	);
};
