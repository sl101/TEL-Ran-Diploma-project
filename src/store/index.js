import { applyMiddleware, createStore, combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { categoriesReducer } from './categoriesReducer';
import thunk from 'redux-thunk';
import { categoryReducer } from './categoryReducer';

const rootReducer = combineReducers({
	products: productsReducer,
	categories: categoriesReducer,
	category: categoryReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
