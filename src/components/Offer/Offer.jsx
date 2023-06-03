import styles from './Offer.module.css';
import imageGnome from '../../media/images/dwarf.png';
import { PhoneForm } from '../';

export const Offer = () => {
	return (
		<section className={styles.offer}>
			<div className="container">
				<div className={styles.offer_wrapper}>
					<div className={styles.image_wrapper}>
						<img src={imageGnome} alt="garden gnome figurine" />
					</div>

					<div>
						<h4 className={styles.offer_title}>
							5% off
							<span>on the first order</span>
						</h4>
						<PhoneForm
							contentInput="sale"
							placeholderInput="+49"
							contentButton="sale_ofer"
							textButton="Get a discount"
							message="You have 5% discount for this phone number"
							content="sale"
							alertText="Get it"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
