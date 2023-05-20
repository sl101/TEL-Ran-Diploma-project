const ADD_CATEGORIES_LIST = '[CATEGORIES] ADD_CATEGORIES_LIST';

export const categoriesReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_CATEGORIES_LIST:
			return [...action.payload];

		default:
			return state;
	}
};

export const addCategoriesListAction = (payload) => ({
	type: ADD_CATEGORIES_LIST,
	payload,
});
