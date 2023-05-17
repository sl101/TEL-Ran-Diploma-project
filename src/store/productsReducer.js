const GET_PRODUCTS = '[PRODUCTS] GET_PRODUCTS';

export const productsReducer = (state = [], action) => {
	switch (action.payload) {
		case GET_PRODUCTS:
			return state;

		default:
			return state;
	}
};

export const getProductsAction = (payload) => ({
	type: GET_PRODUCTS,
	payload,
});
