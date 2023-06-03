import styles from './DiscountForm.module.css';
import { Input, Button } from '../';
import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Alert } from '../Alert/Alert';

// export const DiscountForm = () => {
// const [showMessage, setShowMessage] = useState(false);
// const oferRef = useRef(null);

// const getDiscount = (e) => {
// 	e.preventDefault();
// 	setShowMessage(true);
// };

// return (
// 	<div>
{
	/* <h4 className={styles.offer_title}>
				5% off
				<span>on the first order</span>
			</h4> */
}
// <PhoneForm
// 	contentInput="sale"
// 	placeholderInput="+49"
// 	contentButton="sale_ofer"
// 	textButton="Get a discount"
// />
{
	/* <form className={styles.offer_form} onSubmit={getDiscount}>
				<Input content="sale" placeholder="+49" />
				<Button content="sale_ofer" text="Get a discount" />
			</form> */
}
{
	/* <CSSTransition
				in={showMessage}
				nodeRef={oferRef}
				timeout={300}
				classNames="alert"
				unmountOnExit
			>
				<Alert
					ref={oferRef}
					text="Close"
					content="sale"
					message="You have 5% discount for this phone number"
					setShowMessage={setShowMessage}
				/>
			</CSSTransition> */
}
// 		</div>
// 	);
// };
