import { getProductInfoAction } from '../store/productInfoReducer';
import {
	addProductsListAction,
	addProductsListWhithSaleAction,
} from '../store/productsReducer';
import { base_url } from './url';

export const fetchCategoryListById = (id) => {
	return function (dispatch) {
		fetch(`${base_url}/categories/${id}`)
			.then((res) => res.json())
			.then((data) => dispatch(addProductsListAction(data)));
	};
};

export const fetchAllProductsList = (type) => {
	return function (dispatch) {
		fetch(`${base_url}/products/all`)
			.then((res) => res.json())
			.then((data) => {
				dispatch(addProductsListAction({ data, category: {} }));
				if (type === 'sale') {
					dispatch(addProductsListWhithSaleAction());
				}
			});
	};
};

export const fetchProductByID = (product) => {
	return function (dispatch) {
		fetch(base_url + product)
			.then((res) => res.json())
			.then((data) => dispatch(getProductInfoAction(data)));
	};
};
