import { createSlice } from '@reduxjs/toolkit';

// export const productsReducer = (state = defaultState, action) => {
// 	switch (action.type) {

// 		case FILTER_BY_PRICE_RANGE:
// 			const { from, to } = action.payload;
// 			return {
// 				...state,
// 				productslist: state.productslist.map((product) => ({
// 					...product,
// 					rangeVisible:
// 						product.price >= +from &&
// 						(product.discont_price || product.price) <= +to,
// 				})),
// 			};

// 		case FILTER_BY_DISCONT:
// 			return {
// 				...state,
// 				productslist: state.productslist.map((product) => ({
// 					...product,
// 					discontVisible: action.payload
// 						? product.discont_price ?? false
// 						: product.discont_price ?? true,
// 				})),
// 			};

// 		case SORT_BY_ID:
// 			return {
// 				...state,
// 				productslist: [...state.productslist].sort((a, b) => a.id - b.id),
// 			};

// 		case SORT_PRICE_BY_DESC:
// 			return {
// 				...state,
// 				productslist: [...state.productslist].sort((a, b) => {
// 					const tempA = a.discont_price || a.price;
// 					const tempB = b.discont_price || b.price;
// 					return tempA === tempB ? 0 : tempA > tempB ? -1 : 1;
// 				}),
// 			};

// 		case SORT_PRICE_BY_ASC:
// 			return {
// 				...state,
// 				productslist: [...state.productslist].sort((a, b) => {
// 					const priceA = a.discont_price || a.price;
// 					const priceB = b.discont_price || b.price;
// 					return priceA === priceB ? 0 : priceA > priceB ? 1 : -1;
// 				}),
// 			};

// 		case SORT_BY_NAME_FROM_A:
// 			return {
// 				...state,
// 				productslist: [...state.productslist].sort((a, b) => {
// 					const titleA = a.title.toUpperCase();
// 					const titleB = b.title.toUpperCase();
// 					return titleA === titleB ? 0 : titleA > titleB ? 1 : -1;
// 				}),
// 			};

// 		case SORT_BY_NAME_FROM_Z:
// 			return {
// 				...state,
// 				productslist: [...state.productslist].sort((a, b) => {
// 					const titleA = a.title.toUpperCase();
// 					const titleB = b.title.toUpperCase();
// 					return titleA === titleB ? 0 : titleA > titleB ? -1 : 1;
// 				}),
// 			};

// 		default:
// 			return state;
// 	}
// };

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		pageTitle: {},
		productslist: [],
	},
	reducers: {
		addProductsList(state, action) {
			if (action.payload.category.title) {
				state.pageTitle = action.payload.category.title;
				state.productslist = action.payload.data.map((product) => ({
					...product,
					rangeVisible: true,
					discontVisible: true,
				}));
			} else {
				state.pageTitle = { title: 'All products' };
				state.productslist = action.payload.data.map((product) => ({
					...product,
					rangeVisible: true,
					discontVisible: true,
				}));
			}
		},

		addProductsListWhithSale(state) {
			state.pageTitle = { title: 'Product with Sale' };
			state.productslist = state.productslist.filter(
				(product) => product.discont_price
			);
		},

		filterProductsByPriceRange(state, action) {},
		filterProductsByDiscont(state, action) {},
		sortProductsById(state, action) {},
		sortPriceByAsc(state, action) {},
		sortPriceByDesc(state, action) {},
		sortProductsByNameAFrom(state, action) {},
		sortProductsByNameZFrom(state, action) {},
	},
});

export const {
	addProductsList,
	addProductsListWhithSale,
	filterProductsByPriceRange,
	filterProductsByDiscont,
	sortProductsById,
	sortPriceByAsc,
	sortPriceByDesc,
	sortProductsByNameAFrom,
	sortProductsByNameZFrom,
} = productsSlice.actions;
export default productsSlice.reducer;
