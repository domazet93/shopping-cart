import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Counter from "./components/Counter/Counter";

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  console.log("reducer", state, action);
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => (
  <div>
    <Provider store={store}>
      <Counter />
    </Provider>
  </div>
);

render(<App />, document.getElementById("root"));
