import styles from './Filter.module.css';
import { Input } from '../';
import { SlArrowDown } from 'react-icons/sl';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
	filterProductsByDiscontAction,
	filterProductsByPriceRangeAction,
	sortPriceByAscAction,
	sortPriceByDescAction,
	sortProductsByIdAction,
	sortProductsByNameAFromAction,
	sortProductsByNameZFromAction,
} from '../../store/productsReducer';

export const Filter = ({ content }) => {
	const refFrom = useRef();
	const refTo = useRef();
	const refDiscont = useRef();
	const refSelect = useRef();

	useEffect(() => {
		refFrom.current.value = '';
		refTo.current.value = '';
		refSelect.current.value = 'default';
		if (content !== 'sale') refDiscont.current.checked = false;
	}, [content]);

	const dispatch = useDispatch();

	const handlePrice = (e) => {
		e.preventDefault();

		const targetInput = e.target.name;
		let newValue = e.target.value;

		const range = {
			from: targetInput === 'from' ? newValue || 0 : refFrom.current.value || 0,
			to:
				targetInput === 'to'
					? newValue || Infinity
					: refTo.current.value || Infinity,
		};
		console.log(range);

		dispatch(filterProductsByPriceRangeAction(range));
	};

	const handleDiscont = (e) => {
		dispatch(filterProductsByDiscontAction(e.target.checked));
	};

	const handleSelect = (e) => {
		switch (e.target.value) {
			case 'default':
				dispatch(sortProductsByIdAction());
				break;
			case 'priceAsc':
				dispatch(sortPriceByAscAction());
				break;
			case 'priceDesc':
				dispatch(sortPriceByDescAction());
				break;
			case 'nameA':
				dispatch(sortProductsByNameAFromAction());
				break;
			case 'nameZ':
				dispatch(sortProductsByNameZFromAction());
				break;
			default:
				break;
		}
	};
	return (
		<div className={styles.filter_wrapper}>
			<div className={styles.price_filter}>
				<span>Price</span>
				<Input
					name="from"
					type="number"
					step=".1"
					min="0"
					ref={refFrom}
					placeholder="from"
					content="filter"
					onChange={handlePrice}
				/>

				<Input
					name="to"
					type="number"
					step=".1"
					min="0"
					ref={refTo}
					placeholder="to"
					content="filter"
					onChange={handlePrice}
				/>
			</div>
			{content !== 'sale' && (
				<div className={styles.discont_filter}>
					<span>Discounted items</span>

					<input
						id="input"
						className={styles.discont}
						ref={refDiscont}
						name="discont"
						type="checkbox"
						content="discont"
						onClick={handleDiscont}
					/>
					<label htmlFor="input" className={styles.checkbox_label} />
				</div>
			)}
			<div className={styles.select_filter}>
				<span>Sorted</span>
				<div className={styles.select_wrapper}>
					<select
						className={styles.select}
						onChange={handleSelect}
						ref={refSelect}
					>
						<option value="default">by default</option>
						<option value="priceAsc">price by ascending</option>
						<option value="priceDesc">price by descending</option>
						<option value="nameA">by product title from A to Z</option>
						<option value="nameZ">by product title from Z to A</option>
					</select>
					<SlArrowDown className={styles.select_icon} />
				</div>
			</div>
		</div>
	);
};
