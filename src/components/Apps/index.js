import AppsDetail from './Detail'
import AppsListItem from './ListItem'

import Redirect from '../Redirect'

const Apps = () => {

    return (
        <>
            <Redirect
                collection={'apps'}
                componentListItem={ (key, item) => { return (<AppsListItem key={ key } item={ item } />) } }
                componentDetail={ (style, data) => { return (<AppsDetail style={ style } data={ data } />) } }
            />
        </>
    )
}

export default Apps;

/* import AppsDetailContainer from './DetailContainer'
import AppsItemContainer from './ItemContainer'

import { selectDb } from '../../data/firestoreDb'

import { useParams } from 'react-router-dom'

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react'

const Apps = () => {
    const [ loading, setLoading ] = useState(true);
    const [ data, setData ] = useState([])
    const [ result, setResult ] = useState([]);

    const { slug } = useParams();

    const translate = useSelector(state => state).lang.translate;
    const setting = useSelector(state => state)
    const lang = setting ? setting.lang.lang : 'sp'

    const getData = async () => {
        setLoading(true);

        await selectDb(
            'apps', 
            'order', 
            [
                { f: 'slug', c: '==', v: slug },
                { f: 'lang', c: '==', v: lang } 
            ]
        )
        .then(result => {
            setResult(result);
            setLoading(false);
        })
        .catch(e => {
            console.log(e)
            setLoading(false);
        })
    }

    useEffect(() => {
        getData();      
    }, [])
    
    useEffect(() => {
        getData();  
    }, [lang, slug])  

    if(loading)
        return (
            <>
                { translate['loading'] }
            </>
        )
    
    if(slug && result.data.length === 1) {
        return (
            <AppsDetailContainer
                data={ result.data[0] }
            >
            </AppsDetailContainer>
        )
    }

    return (
        <>
            <AppsItemContainer
                data={ result.data }
            >
            </AppsItemContainer>
        </>
    )
}

export default Apps; */