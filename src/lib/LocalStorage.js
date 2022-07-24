const checkParams = (key, value, valueDefault) => {
    const valueKey = localStorage.getItem(key);

    if (value === undefined)
        value = valueKey ? valueKey : valueDefault;
    else
        localStorage.setItem(key, value)
    
    return value;
}

export { checkParams }