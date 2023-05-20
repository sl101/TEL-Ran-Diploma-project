import { applyMiddleware, createStore, combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { categoriesReducer } from './categoriesReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	products: productsReducer,
	categories: categoriesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
