const { createStore } = require("redux");

// State initial atau state global
const initialState = {
  value: 2,
  price: 3000,
};

// Reducer
const rootReducer = (state = initialState, action) => {
  // Pakai if
  //   if (action.type === "PRICE") {
  //     return {
  //       ...state, // spread operator
  //       price: state.price + 1,
  //     };
  //   }
  //   if (action.type === "VALUE") {
  //     return {
  //       ...state, // spread operator
  //       value: state.value + action.newValue,
  //     };
  //   }
  //   return state;

  // Pakai Switch
  switch (action.type) {
    case "PRICE":
      return {
        ...state, // spread operator
        price: state.price + 1,
      };
    case "VALUE":
      return {
        ...state, // spread operator
        value: state.value + action.newValue,
      };
    default:
      return state;
  }
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription itu pelacak perubahan redux
store.subscribe(() => {
  console.log("Store Change : ", store.getState());
});

// Dispatching Action Atau perubahan nilai State
store.dispatch({ type: "PRICE" });
store.dispatch({ type: "VALUE", newValue: 10 });
console.log(store.getState());

// running pakai node
