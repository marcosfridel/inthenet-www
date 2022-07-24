import { SET_THEME } from "../actions/settingTheme";

import style from '../../style/brief'

const initialState = {
    theme: (localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'),
    style: style[(localStorage.getItem('theme') ? localStorage.getItem('theme'): 'light')]
}

const SettingThemeReducer = (state = initialState, action) => {
    switch(action.type) {
    case SET_THEME:
        localStorage.setItem('theme', action.payload);
        return { ...state, theme: action.payload, style: style[action.payload] }
        break;
    default:
        return state;
    }
}

export default SettingThemeReducer;