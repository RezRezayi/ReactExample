import { createStore, compose, applyMiddleware } from "redux";
import { reducers } from "../reducers";
import thunk from "redux-thunk";
import { getAllCourses } from "../actions/courses";

export const store = createStore(reducers,compose(applyMiddleware(thunk),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 ));




store.dispatch(getAllCourses());

 store.subscribe(()=> console.log(store.getState));