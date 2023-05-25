const GET_PRODUCT = '[PRODUCT] GET_PRODUCT';

export const productInfoReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_PRODUCT:
			if (!action.payload || action.payload.status === 'ERR') {
				return { status: '*' };
			} else {
				return { ...action.payload[0] };
			}

		default:
			return state;
	}
};

export const getProductInfoAction = (payload) => ({
	type: GET_PRODUCT,
	payload,
});
