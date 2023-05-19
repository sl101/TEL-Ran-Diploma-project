import styles from './Contacts.module.css';
import { SlSocialInstagram } from 'react-icons/sl';
import { SiWhatsapp } from 'react-icons/si';
import { Link } from 'react-router-dom';

export const Contacts = () => {
	return (
		<section className={styles.contacts}>
			<div className={styles.links}>
				<h2 className="title">Contacts</h2>
				<p className={styles.phone}>+49 999 999 99 99</p>
				<ul className={styles.media_list}>
					<li className={styles.media_item}>
						<SlSocialInstagram />
						<p>instagram</p>
					</li>
					<li className={styles.media_item}>
						<SiWhatsapp />
						<p>WhatsApp</p>
					</li>
				</ul>
			</div>
			<div className={styles.address}>
				<h2 className="title">Address</h2>
				<address className={styles.address_wrapper}>
					<Link>
						<p className={styles.address_link}>Linkstraße 2, 8 OG, 10785,</p>
						<span className={styles.address_link}>Berlin, Deutschland</span>
					</Link>
				</address>
				<p className={styles.working_schedule}>Working Hours:</p>
				<p className={styles.working_time}>24 hours a day</p>
			</div>
		</section>
	);
};
