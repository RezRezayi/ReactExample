import { combineReducers } from "redux";
import { userReducer } from "./user";
import { courseReducer } from "./course";
import { coursesReducer } from "./courses";

export const reducers = combineReducers({
    user: userReducer,
    course: courseReducer,
    courses: coursesReducer
});