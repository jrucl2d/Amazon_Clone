import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
function cartReducer(state = { cartItems: [] }, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload; // 새로 넣고 싶은 아이템
      const product = state.cartItems.find((x) => x.product === item.product); // 이미 있던 아이템을 또 넣나?
      if (product) {
        return {
          cartItems: state.cartItems.map(
            (x) => (x.product === product.product ? item : x) // 또 넣는거면 해당 아이템의 수량을 추가
          ),
        };
      }
      return { cartItems: [...state.cartItems, item] }; // 아니면 새로운 아이템을 넣음
    case CART_REMOVE_ITEM:
      return {
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
}
export { cartReducer };
