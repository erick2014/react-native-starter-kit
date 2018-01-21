const initialState = {
  products: [],
  isFetching: false,
  error: ''
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      const fakeProducts = [
        { name: "productName1", quantity: 2, price: 5000 },
        { name: "productName2", quantity: 2, price: 4000 },
        { name: "productName3", quantity: 2, price: 3000 }
      ]
      const newState = { ...state, products: fakeProducts };
      return newState;

    default:
      return state;
  }
}

export default shoppingCartReducer;
