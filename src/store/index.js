import { applyMiddleware, createStore, combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { categoriesReducer } from './categoriesReducer';
import thunk from 'redux-thunk';
import { cartReducer } from './cartReducer';
import { productInfoReducer } from './productInfoReducer';

const rootReducer = combineReducers({
	categories: categoriesReducer,
	products: productsReducer,
	productInfo: productInfoReducer,
	cart: cartReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
