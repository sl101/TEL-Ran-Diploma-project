const ADD_PRODUCTS_LIST = '[PRODUCTS] ADD_PRODUCTS_LIST';

export const productsReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_PRODUCTS_LIST:
			return [...action.payload];

		default:
			return state;
	}
};

export const addProductsListAction = (payload) => ({
	type: ADD_PRODUCTS_LIST,
	payload,
});
