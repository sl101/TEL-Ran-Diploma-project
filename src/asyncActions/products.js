import { getProductInfoAction } from '../store/productInfoReducer';
import { addProductsListAction } from '../store/productsReducer';
import { base_url } from './url';

export const fetchProductsList = (products_all) => {
	return function (dispatch) {
		fetch(base_url + products_all)
			.then((res) => res.json())
			.then((data) => dispatch(addProductsListAction(data)));
	};
};

export const fetchProductByID = (product) => {
	return function (dispatch) {
		fetch(base_url + product)
			.then((res) => res.json())
			.then((data) => dispatch(getProductInfoAction(data)));
	};
};
