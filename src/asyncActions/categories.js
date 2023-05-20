import { addCategoriesListAction } from '../store/categoriesReducer';
import { base_url } from './url';

export const fetchCategoriesList = (categories_all) => {
	return function (dispatch) {
		fetch(base_url + categories_all)
			.then((res) => res.json())
			.then((data) => dispatch(addCategoriesListAction(data)));
	};
};
