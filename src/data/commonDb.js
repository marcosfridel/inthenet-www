export const getResultDb = (ok, result, key) => {
    let resultDb = {}

    resultDb['ok'] = ok ? ok : false;
    
    if(!ok) {
        return {
            ...result,
            text: result
        };
    }

    resultDb['count'] = Array.isArray(result) ? result.length : 1;
    resultDb['data'] = result;

    if(result.id) resultDb = { ...resultDb, id: result.id }
    if(!result.key && key) resultDb = { ...resultDb, key: key }
    
    //console.log('resultDb', resultDb)

    return resultDb;
}