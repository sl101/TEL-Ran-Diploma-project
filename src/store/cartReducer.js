const ADD_TO_CART = '[CART] ADD_TO_CART';

export const cartReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TO_CART:
			return [action.payload, ...state];

		default:
			return state;
	}
};

export const addToCartAction = (payload) => ({
	type: ADD_TO_CART,
	payload,
});
