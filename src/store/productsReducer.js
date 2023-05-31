const ADD_PRODUCTS_LIST = '[PRODUCTS] ADD_PRODUCTS_LIST';
const ADD_PRODUCTS_LIST_WITH_SALE = '[PRODUCTS] ADD_PRODUCTS_LIST_WITH_SALE';
const FILTER_BY_PRICE_RANGE = '[PRODUCTS] FILTER_BY_PRICE_RANGE';
const FILTER_BY_DISCONT = '[PRODUCTS] FILTER_BY_DISCONT';
const SORT_BY_ID = '[PRODUCTS] SORT_BY_ID';
const SORT_PRICE_BY_DESC = '[PRODUCTS] SORT_PRICE_BY_DESC';
const SORT_PRICE_BY_ASC = '[PRODUCTS] SORT_PRICE_BY_ASC';
const SORT_BY_NAME = '[PRODUCTS] SORT_BY_NAME';

const defaultState = {
	pageTitle: {},
	productslist: [],
};

export const productsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_PRODUCTS_LIST:
			if (action.payload.category.title) {
				return {
					pageTitle: action.payload.category.title,
					productslist: action.payload.data.map((product) => ({
						...product,
						rangeVisible: true,
						discontVisible: true,
					})),
				};
			} else {
				return {
					pageTitle: { title: 'All products' },
					productslist: action.payload.data.map((product) => ({
						...product,
						rangeVisible: true,
						discontVisible: true,
					})),
				};
			}

		case ADD_PRODUCTS_LIST_WITH_SALE:
			return {
				pageTitle: { title: 'Product with Sale' },
				productslist: state.productslist.filter(
					(product) => product.discont_price
				),
			};

		case FILTER_BY_PRICE_RANGE:
			const { from, to } = action.payload;
			return {
				...state,
				productslist: state.productslist.map((product) => ({
					...product,
					rangeVisible:
						product.price >= +from &&
						(product.discont_price || product.price) <= +to,
				})),
			};

		case FILTER_BY_DISCONT:
			return {
				...state,
				productslist: state.productslist.map((product) => ({
					...product,
					discontVisible: action.payload
						? product.discont_price ?? false
						: product.discont_price ?? true,
				})),
			};

		case SORT_BY_ID:
			return {
				...state,
				productslist: [...state.productslist].sort((a, b) => a.id - b.id),
			};

		case SORT_PRICE_BY_DESC:
			return {
				...state,
				productslist: [...state.productslist].sort((a, b) => {
					const tempA = a.discont_price || a.price;
					const tempB = b.discont_price || b.price;
					return tempA === tempB ? 0 : tempA > tempB ? -1 : 1;
				}),
			};

		case SORT_PRICE_BY_ASC:
			return {
				...state,
				productslist: [...state.productslist].sort((a, b) => {
					const priceA = a.discont_price || a.price;
					const priceB = b.discont_price || b.price;
					return priceA === priceB ? 0 : priceA > priceB ? 1 : -1;
				}),
			};

		case SORT_BY_NAME:
			return {
				...state,
				productslist: [...state.productslist].sort((a, b) => {
					const titleA = a.title.toUpperCase();
					const titleB = b.title.toUpperCase();
					return titleA === titleB ? 0 : titleA > titleB ? 1 : -1;
				}),
			};

		default:
			return state;
	}
};

export const addProductsListWhithSaleAction = () => ({
	type: ADD_PRODUCTS_LIST_WITH_SALE,
});

export const addProductsListAction = (payload) => ({
	type: ADD_PRODUCTS_LIST,
	payload,
});

export const filterProductsByPriceRangeAction = (payload) => ({
	type: FILTER_BY_PRICE_RANGE,
	payload,
});

export const filterProductsByDiscontAction = (payload) => ({
	type: FILTER_BY_DISCONT,
	payload,
});

export const sortProductsByIdAction = () => ({
	type: SORT_BY_ID,
});
export const sortPriceByDescAction = () => ({
	type: SORT_PRICE_BY_DESC,
});
export const sortPriceByAscAction = () => ({
	type: SORT_PRICE_BY_ASC,
});

export const sortProductsByNameAction = () => ({
	type: SORT_BY_NAME,
});
