
import { createContext } from 'react';
import { Alert } from 'react-bootstrap'

export const AlertContext = createContext();

const AlertContextProvider = ({children}) => {

    const show = (variant, text) => {
        if(text !== '') {
            return <Alert variant={ variant }>{text}</Alert>
        }
    }
    const showError = (text) => {
        return show('danger', text)
    }
    const showInfo = (text) => {
        return show('info', text)
    }
    const showSuccess = (text) => {
        return show('success', text)
    }
    const showWarning = (text) => {
        return show('warning', text)
    }
    
    return (
        <AlertContext.Provider value={ { show, showError, showInfo, showSuccess, showWarning} }> { }
            {children}
        </AlertContext.Provider>
    )
}

export default AlertContextProvider;