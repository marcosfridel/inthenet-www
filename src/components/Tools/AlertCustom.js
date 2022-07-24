import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

import { FormatHtml } from '../../lib/Html';

const AlertCustom = (props) => {
    //console.log('AlertCustom', props)
    const typeList = [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ]

    const [ options, setOptions ] = useState(false)
    
    const setOptionsObject = () => {
        let optionsTemp = props.options;
        
        if(!optionsTemp) {
            optionsTemp = {};
            //console.log(props.visible ? props.visible : false);
            optionsTemp['visible'] = props.visible ? props.visible : false;
            optionsTemp['type'] = props.type ? props.type : 'light';
            optionsTemp['text'] = props.text ? props.text : '';
        } else {
            if(!optionsTemp.visible) optionsTemp['visible'] = false;
            if(!optionsTemp.type) optionsTemp['type'] = 'light';
            if(!optionsTemp.visible) optionsTemp['text'] = '';
        }
        
        setOptions(optionsTemp);
    }

    useEffect(()=>{
        setOptionsObject();
    }, [])

    useEffect(()=>{
        setOptionsObject();
    }, [props.options])

    //setOptions(props.options);

    //console.log('options', options)
   
    if(!options.visible) return <></>
    if(!options.text) return <></>
    if(!typeList.find(item => item === options.type)) options.type = 'light';

    return (
        <>
            <Alert variant={ options.type } dismissible >{ FormatHtml(options.text) }</Alert>
        </>
    )
}

export default AlertCustom;