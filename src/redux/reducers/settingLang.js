import { SET_LANG } from "../actions/settingLang";

import translate from '../../data/translate';

const initialState = {
    lang: (localStorage.getItem('lang') ? localStorage.getItem('lang') : 'sp'),
    translate: translate[(localStorage.getItem('lang') ? localStorage.getItem('lang') : 'sp')] 
}

const SettingLangReducer = (state = initialState, action) => {
    switch(action.type) {
    case SET_LANG:
        localStorage.setItem('lang', action.payload);
        return { ...state, lang: action.payload, translate: translate[action.payload] }
        break;
    default:
        return state;
    }
}

export default SettingLangReducer;