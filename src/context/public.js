import { createContext, useState } from 'react';
import { getApi, postApi } from '../lib/Api'

import { checkParams } from '../lib/LocalStorage'

export const PublicContext = createContext();

const PublicContextProvider = ({children}) => {

    const [ themeMode, setThemeMode ] = useState('')
    const [ lang, setLang ] = useState('')

    const setSiteThemeMode = (themeMode) => {
        themeMode = checkParams('thememode', themeMode, 'light');
        setThemeMode(themeMode);
    }

    const setSiteLang = (lang) => {
        lang = checkParams('lang', lang, 'sp');
        setLang(lang);
    }

    const getSiteThemeMode = () => {
        const thememode = localStorage.getItem('thememode')
        return (thememode ? thememode : 'light')
    }

    const getSiteLang = () => {
        const thememode = localStorage.getItem('lang')
        return (thememode ? thememode : 'sp')
    }
/*     const setContext = (params) => {
        let {
            lang,
            mode
        } = params;
    
        lang = checkParams('lang', lang, 'sp');
    } */

    const getListByLenguage = async (keys, callback) => {
        const langList = [ 'sp', 'en' ]
        const lang = getSiteLang();

        //console.log('langList.filter(item => item === lang)', langList.filter(item => item === lang))
        if(lang && langList.filter(item => item === lang).length === 0)
            return null;

        //console.log(lang);

        //console.log('lang', lang)
        let params = {
            "translate.language": lang
        }

        if(keys)
            params["key"] = {"$in" : keys}

        //console.log('getListByLenguage - params', params);

        return await postApi(
            'content/listByLanguage',
            params,
            callback
            )
        //return JSON.parse(result) */
    }
    
    return (
        <PublicContext.Provider value={ { 
            getListByLenguage, 
            getSiteLang, setSiteLang, 
            getSiteThemeMode, setSiteThemeMode } }> { }
            {children}
        </PublicContext.Provider>
    )
}

export default PublicContextProvider;