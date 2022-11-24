import { createStore } from "redux";
import stateReducer from "./products/productReducer";

const store = createStore(stateReducer);

export { store };
