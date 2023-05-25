import { addCategoriesListAction } from '../store/categoriesReducer';
import { getCategoryByIdAction } from '../store/categoryReducer';
import { base_url } from './url';

export const fetchCategoriesList = (categories_all) => {
	return function (dispatch) {
		fetch(base_url + categories_all)
			.then((res) => res.json())
			.then((data) => dispatch(addCategoriesListAction(data)));
	};
};

export const fetchCategoryById = (category) => {
	return function (dispatch) {
		fetch(base_url + category)
			.then((res) => res.json())
			.then((data) => dispatch(getCategoryByIdAction(data)));
	};
};
