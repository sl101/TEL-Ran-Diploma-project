import { applyMiddleware, createStore, combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { categoriesReducer } from './categoriesReducer';
import thunk from 'redux-thunk';
import { categoryReducer } from './categoryReducer';
import { cartReducer } from './cartReducer';
import { productInfoReducer } from './productInfoReducer';

const rootReducer = combineReducers({
	categories: categoriesReducer,
	category: categoryReducer,
	products: productsReducer,
	productInfo: productInfoReducer,
	cart: cartReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
