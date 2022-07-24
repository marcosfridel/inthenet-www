import ServiceDetail from './Detail'
import ServiceListItem from './ListItem'

import Redirect from '../Redirect'

const Service = () => {

    return (
        <>
            <Redirect
                collection={'services'}
                componentListItem={ (key, item) => { return (<ServiceListItem key={ key } item={ item } />) } }
                componentDetail={ (style, data) => { return (<ServiceDetail style={ style } data={ data } />) } }
            />
        </>
    )
}

export default Service;

/* import ServiceItemContainer from './ItemContainer'
import ServiceDetailContainer from './DetailContainer'

import { selectDb } from '../../data/firestoreDb'

import { useParams } from 'react-router-dom'

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react'

const Service = () => {
    const [ loading, setLoading ] = useState(true);
    const [ result, setResult ] = useState([])

    const { slug } = useParams();

    const style = useSelector(state => state).theme.style;
    const translate = useSelector(state => state).lang.translate;
    const setting = useSelector(state => state)
    const lang = setting ? setting.lang.lang : 'sp'

    const getData = async () => {
        setLoading(true);

        await selectDb(
            'services', 
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
            <ServiceDetailContainer
                style={ style.container}
                data={ result.data[0] }
            >
            </ServiceDetailContainer>
        )
    }
    
    return (
        <>
            {
                <ServiceItemContainer
                    key = {0}
                    style={ style.container}
                    data = { result.data }
                ></ServiceItemContainer>
            }                    
        </>
    )
}

export default Service
 */