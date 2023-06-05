const ADD_TO_CART = '[CART] ADD_TO_CART';
const DECR_CART_PRODUCT = '[CART] DECR_CART_PRODUCT';
const REMOVE_CART_PRODUCT = '[CART] REMOVE_CART_PRODUCT';
const CLEAN_CART = '[CART] CLEAN_CART';

const defaultState = {
	cartList: JSON.parse(localStorage.getItem('cartList')) || [],
	totalAmount: 0,
	totalSumm: 0,
};

const updateLocalStorage = (cartList) => {
	localStorage.setItem('cartList', JSON.stringify(cartList));
};

export const cartReducer = (state = defaultState, action) => {
	let { cartList, totalAmount, totalSumm } = state;

	switch (action.type) {
		case ADD_TO_CART:
			const tempTotalSumm =
				totalSumm + (action.payload.discont_price || action.payload.price);
			const tempItemIndex = cartList.findIndex(
				(el) => action.payload.id === el.id
			);

			const modifiedList = [...cartList];
			if (tempItemIndex !== -1) {
				modifiedList[tempItemIndex].amount += 1;
			} else {
				modifiedList.unshift({ ...action.payload, amount: 1 });
			}

			const addedState = {
				cartList: modifiedList,
				totalAmount: totalAmount + 1,
				totalSumm: +tempTotalSumm.toFixed(2),
			};

			updateLocalStorage(addedState.cartList);

			return addedState;

		case DECR_CART_PRODUCT:
			const tempProduct = cartList.find((el) => action.payload === el.id);

			tempProduct.amount = tempProduct.amount - 1;
			const decrTotalSumm =
				totalSumm - (tempProduct.discont_price || tempProduct.price);

			const decrementedState = {
				cartList: cartList.filter((product) => product.amount !== 0),
				totalAmount: --totalAmount,
				totalSumm: +decrTotalSumm.toFixed(2),
			};

			updateLocalStorage(decrementedState.cartList);
			return decrementedState;

		case REMOVE_CART_PRODUCT:
			const tempUnit = cartList.find((el) => action.payload === el.id);
			const targetAmount = totalAmount - tempUnit.amount;
			const targetSumm =
				totalSumm -
				(tempUnit.discont_price || tempUnit.price) * tempUnit.amount;

			tempUnit.amount = 0;

			const removedState = {
				cartList: cartList.filter((product) => product.id !== action.payload),
				totalAmount: targetAmount,
				totalSumm: +targetSumm.toFixed(2),
			};

			updateLocalStorage(removedState.cartList);
			return removedState;

		case CLEAN_CART:
			const cleanedState = {
				cartList: [],
				totalAmount: 0,
				totalSumm: 0,
			};
			updateLocalStorage(cleanedState.cartList);
			return cleanedState;

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
