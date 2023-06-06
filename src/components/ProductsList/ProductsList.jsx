import { useState } from 'react';
import { Pagination, ProductItem } from '../';
import styles from './ProductsList.module.css';

export const ProductsList = ({ products }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const quantity = 8;

	const lastElem = currentPage * quantity;
	const firstElem = lastElem - quantity;
	const pagesNumber = Math.ceil(products.length / quantity);

	const productsListPage = products.slice(firstElem, lastElem);

	return (
		<>
			<ul className={styles.products_list}>
				{productsListPage?.map((elem, index) => (
					<ProductItem key={index} {...elem} />
				))}
			</ul>
			{pagesNumber > 1 && (
				<Pagination
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					pagesNumber={pagesNumber}
				/>
			)}
		</>
	);
};
