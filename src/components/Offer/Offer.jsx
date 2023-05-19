import { DiscountForm } from '../';
import styles from './Offer.module.css';
import imageGnome from '../../media/images/dwarf.png';

export const Offer = () => {
	return (
		<section className={styles.offer}>
			<div className="container">
				<div className={styles.offer_wrapper}>
					<div className={styles.image_wrapper}>
						<img src={imageGnome} alt="garden gnome figurine" />
					</div>
					<DiscountForm />
				</div>
			</div>
		</section>
	);
};
