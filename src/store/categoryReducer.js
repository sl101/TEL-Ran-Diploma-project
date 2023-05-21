const ADD_CATEGORY_BY_ID = '[CATEGORY] ADD_CATEGORY_BY_ID';

export const categoryReducer = (state = {}, action) => {
	switch (action.type) {
		case ADD_CATEGORY_BY_ID:
			return { ...action.payload };

		default:
			return state;
	}
};

export const getCategoryByIdAction = (payload) => ({
	type: ADD_CATEGORY_BY_ID,
	payload,
});
