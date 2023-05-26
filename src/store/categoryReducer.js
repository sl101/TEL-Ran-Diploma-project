const ADD_CATEGORY_BY_ID = '[CATEGORY] ADD_CATEGORY_BY_ID';
const FILTER_BY_PRICE_RANGE = '[CATEGORY] FILTER_BY_PRICE_RANGE';
const FILTER_BY_DISCONT = '[CATEGORY] FILTER_BY_DISCONT';

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
