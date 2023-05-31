const ADD_TO_CART = '[CART] ADD_TO_CART';
const DECR_CART_PRODUCT = '[CART] DECR_CART_PRODUCT';
const REMOVE_CART_PRODUCT = '[CART] REMOVE_CART_PRODUCT';
const CLEAN_CART = '[CART] CLEAN_CART';

const defaultState = {
	cartList: [],
	totalAmount: 0,
	totalSumm: 0,
};

export const cartReducer = (state = defaultState, action) => {
	let { cartList, totalAmount, totalSumm } = state;

	switch (action.type) {
		case ADD_TO_CART:
			const tempTotalSumm =
				totalSumm + (action.payload.discont_price || action.payload.price);
			const modifiedList = [...cartList];
			const tempItem = cartList.find((el) => action.payload.id === el.id);
			if (tempItem) {
				tempItem.amount = tempItem.amount + 1;
			} else {
				modifiedList.unshift({ ...action.payload, amount: 1 });
			}
			return {
				cartList: modifiedList,
				totalAmount: ++totalAmount,
				totalSumm: +tempTotalSumm.toFixed(2),
			};

		case DECR_CART_PRODUCT:
			const tempProduct = cartList.find((el) => action.payload === el.id);

			tempProduct.amount = tempProduct.amount - 1;
			const decrTotalSumm =
				totalSumm - (tempProduct.discont_price || tempProduct.price);

			return {
				cartList: cartList.filter((product) => product.amount !== 0),
				totalAmount: --totalAmount,
				totalSumm: +decrTotalSumm.toFixed(2),
			};

		case REMOVE_CART_PRODUCT:
			const tempUnit = cartList.find((el) => action.payload === el.id);
			const targetAmount = totalAmount - tempUnit.amount;
			const targetSumm =
				totalSumm -
				(tempUnit.discont_price || tempUnit.price) * tempUnit.amount;

			tempUnit.amount = 0;
			return {
				cartList: cartList.filter((product) => product.id !== action.payload),
				totalAmount: targetAmount,
				totalSumm: +targetSumm.toFixed(2),
			};

		case CLEAN_CART:
			return defaultState;

		default:
			return state;
	}
};

export const addToCartAction = (payload) => ({
	type: ADD_TO_CART,
	payload,
});

export const decrCartProductAction = (payload) => ({
	type: DECR_CART_PRODUCT,
	payload,
});

export const removeCartProductAction = (payload) => ({
	type: REMOVE_CART_PRODUCT,
	payload,
});
export const cleanCartAction = () => ({
	type: CLEAN_CART,
});
