import { createStore, combineReducers } from "redux";

import settingLangReducer from "./reducers/settingLang";
import settingThemeReducer from "./reducers/settingTheme";

const settingCombineReducer = combineReducers({
    lang: settingLangReducer,
    theme: settingThemeReducer,
});

export default createStore(
    settingCombineReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__()
);