import { useRef, useState } from 'react';
import { Button, Input } from '../';
import styles from './Order.module.css';
import { CSSTransition } from 'react-transition-group';
import { Alert } from '../Alert/Alert';
import { PhoneForm } from '../';

export const Order = ({ totalSumm }) => {
	// const [showMessage, setShowMessage] = useState(false);
	// const nodeRef = useRef(null);

	// const submit = (e) => {
	// 	e.preventDefault();
	// 	setShowMessage(true);
	// };

	return (
		<div className={styles.order}>
			<h3 className={styles.order_title}>Order details</h3>
			<div className={styles.order_summ}>
				<p>Total</p>
				<div>
					{totalSumm}
					<span>&#x24;</span>
				</div>
			</div>
			<PhoneForm
				contentInput="order"
				placeholderInput="+49"
				contentButton="order"
				textButton="Order"
				message="Finish order and clean cart"
				content="order"
				alertText="Finish"
			/>
			{/* <form className={styles.order_form} onSubmit={submit}>
				<Input content="order" placeholder="Phone number" />
				<Button content="order" text="Order" />
			</form> */}
			{/* <CSSTransition
				in={showMessage}
				nodeRef={nodeRef}
				timeout={300}
				classNames="alert"
				unmountOnExit
			>
				<Alert
					ref={nodeRef}
					text="Send"
					content="order"
					message="Finish order and clean cart"
					setShowMessage={setShowMessage}
				/>
			</CSSTransition> */}
		</div>
	);
};
