import styles from './Filter.module.css';
import { Input } from '../';
import { SlArrowDown } from 'react-icons/sl';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	filterProductsByDiscontAction,
	filterProductsByPriceRangeAction,
} from '../../store/productsReducer';
import {
	filterCategoryProductsByDiscontAction,
	filterCategoryProductsByPriceAction,
} from '../../store/categoryReducer';

export const Filter = ({ content }) => {
	const [{ from = '', to = '' }, setRange] = useState({});

	useEffect(() => {
		setRange({ from: '', to: '' });
	}, [content]);

	const dispatch = useDispatch();

	const handlePrice = (e) => {
		e.preventDefault();

		const targetInput = e.target.name;
		const newValue = e.target.value.replace(',', '.');

		if (!isNaN(newValue)) {
			setRange((prevRange) => ({
				...prevRange,
				[targetInput]: newValue,
			}));

			const rangeStore = {
				from: targetInput === 'from' ? newValue : from || -Infinity,
				to: targetInput === 'to' ? newValue : to || Infinity,
			};

			dispatch(
				content === 'category'
					? filterCategoryProductsByPriceAction(rangeStore)
					: filterProductsByPriceRangeAction(rangeStore)
			);
		}
	};

	const handleSelect = () => {};
	return (
		<div className={styles.filter_wrapper}>
			<div className={styles.price_filter}>
				<span>Price</span>
				<Input
					name="from"
					type="text"
					value={from || ''}
					placeholder="from"
					content="filter"
					onChange={handlePrice}
				/>

				<Input
					name="to"
					type="text"
					value={to || ''}
					placeholder="to"
					content="filter"
					onChange={handlePrice}
				/>
			</div>
			{content !== 'sale' && (
				<div className={styles.discont_filter}>
					<span>Discounted items</span>
					<Input
						name="discont"
						type="checkbox"
						content="filter"
						onClick={(e) =>
							dispatch(
								content === 'category'
									? filterCategoryProductsByDiscontAction(e.target.checked)
									: filterProductsByDiscontAction(e.target.checked)
							)
						}
						style={{
							width: '40px',
						}}
					/>
				</div>
			)}
			<div className={styles.select_filter}>
				<span>Sorted</span>
				<div className={styles.select_wrapper}>
					<select
						value="default"
						name="sort"
						placeholder="dy default"
						onChange={handleSelect}
					>
						<option value="by price low first">by price / low first</option>
						<option value="by price hie first">by price / high first</option>
						<option value="by title low first">by title / low first</option>
						<option value="by title hie first">by title / high first</option>
					</select>
					<SlArrowDown className={styles.select_icon} />
				</div>
			</div>
		</div>
	);
};
