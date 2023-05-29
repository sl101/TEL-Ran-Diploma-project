const ADD_CATEGORY_BY_ID = '[CATEGORY] ADD_CATEGORY_BY_ID';
const FILTER_BY_PRICE_RANGE = '[CATEGORY] FILTER_BY_PRICE_RANGE';
const FILTER_BY_DISCONT = '[CATEGORY] FILTER_BY_DISCONT';
const SORT_BY_ID = '[CATEGORY] SORT_BY_ID';
const SORT_PRICE_BY_DESC = '[CATEGORY] SORT_PRICE_BY_DESC';
const SORT_PRICE_BY_ASC = '[CATEGORY] SORT_PRICE_BY_ASC';
const SORT_BY_NAME = '[CATEGORY] SORT_BY_NAME';

export const categoryReducer = (state = {}, action) => {
	switch (action.type) {
		case ADD_CATEGORY_BY_ID:
			if (!action.payload || action.payload.status === 'ERR') {
				return { status: '*' };
			} else {
				return {
					...action.payload,
					data: action.payload.data.map((product) => ({
						...product,
						rangeVisible: true,
						discontVisible: true,
					})),
				};
			}
		case FILTER_BY_PRICE_RANGE:
			const { from, to } = action.payload;

			return {
				...state,
				data: state.data.map((product) => ({
					...product,
					rangeVisible:
						product.price >= +from &&
						(product.discont_price || product.price) <= +to,
				})),
			};

		case FILTER_BY_DISCONT:
			return {
				...state,
				data: state.data.map((product) => ({
					...product,
					discontVisible: action.payload
						? product.discont_price ?? false
						: product.discont_price ?? true,
				})),
			};

		case SORT_BY_ID:
			// const tempList = [...state];
			return { ...state, data: state.data.sort((a, b) => a.id - b.id) };

		case SORT_PRICE_BY_DESC:
			// const ascList = [...state];
			return {
				...state,
				data: state.data.sort((a, b) => {
					const tempA = a.discont_price || a.price;
					const tempB = b.discont_price || b.price;
					return tempA === tempB ? 0 : tempA > tempB ? 1 : -1;
				}),
			};

		case SORT_PRICE_BY_ASC:
			// const descList = [...state];
			return {
				...state,
				data: state.data.sort((a, b) => {
					const priceA = a.discont_price || a.price;
					const priceB = b.discont_price || b.price;
					return priceA === priceB ? 0 : priceA > priceB ? -1 : 1;
				}),
			};

		case SORT_BY_NAME:
			// const namedList = [...state];
			return {
				...state,
				data: state.data.sort((a, b) => {
					const titleA = a.title.toUpperCase();
					const titleB = b.title.toUpperCase();
					return titleA === titleB ? 0 : titleA > titleB ? 1 : -1;
				}),
			};

		default:
			return state;
	}
};

export const getCategoryByIdAction = (payload) => ({
	type: ADD_CATEGORY_BY_ID,
	payload,
});

export const filterCategoryProductsByPriceAction = (payload) => ({
	type: FILTER_BY_PRICE_RANGE,
	payload,
});

export const filterCategoryProductsByDiscontAction = (payload) => ({
	type: FILTER_BY_DISCONT,
	payload,
});

export const sortCategoryProductsByIdAction = () => ({
	type: SORT_BY_ID,
});
export const sortCategoryProductsPriceByDescAction = () => ({
	type: SORT_PRICE_BY_DESC,
});
export const sortCategoryProductsPriceByAscAction = () => ({
	type: SORT_PRICE_BY_ASC,
});

export const sortCategoryProductsByNameAction = () => ({
	type: SORT_BY_NAME,
});
