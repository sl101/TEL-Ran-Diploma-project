const GET_PRODUCT = '[PRODUCT] GET_PRODUCT';

export const productInfoReducer = (state = [], action) => {
	switch (action.type) {
		case GET_PRODUCT:
			console.log('productInfoReducer: ', action.payload);
			return [...action.payload];

		default:
			return state;
	}
};

export const getProductInfoAction = (payload) => ({
	type: GET_PRODUCT,
	payload,
});
