const ADD_PRODUCTS_LIST = '[PRODUCTS] ADD_PRODUCTS_LIST';
const FILTER_BY_PRICE_RANGE = '[PRODUCTS] FILTER_BY_PRICE_RANGE';
const FILTER_BY_DISCONT = '[PRODUCTS] FILTER_BY_DISCONT';
const SORT_BY_PRICE = '[PRODUCTS] SORT_BY_PRICE';
const SORT_BY_NAME = '[PRODUCTS] SORT_BY_NAME';

export const productsReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_PRODUCTS_LIST:
			return [
				...action.payload.map((product) => ({
					...product,
					rangeVisible: true,
					discontVisible: true,
				})),
			];

		case FILTER_BY_PRICE_RANGE:
			const { from, to } = action.payload;
			return state.map((product) => ({
				...product,
				rangeVisible:
					product.price >= +from &&
					(product.discont_price || product.price) <= +to,
			}));

		case FILTER_BY_DISCONT:
			return state.map((product) => ({
				...product,
				discontVisible: action.payload
					? product.discont_price ?? false
					: product.discont_price ?? true,
			}));

		default:
			return state;
	}
};

export const addProductsListAction = (payload) => ({
	type: ADD_PRODUCTS_LIST,
	payload,
});

export const filterProductsByPriceRangeAction = (payload) => ({
	type: FILTER_BY_PRICE_RANGE,
	payload,
});

export const filterProductsByDiscontAction = (payload) => ({
	type: FILTER_BY_DISCONT,
	payload,
});

export const sortProductsByPriceAction = (payload) => ({
	type: SORT_BY_PRICE,
	payload,
});

export const sortProductsByNameAction = (payload) => ({
	type: SORT_BY_NAME,
	payload,
});
