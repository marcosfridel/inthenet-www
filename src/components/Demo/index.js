import DemoDetail from './Detail'
import DemoListItem from './ListItem'

import Redirect from '../Redirect'

const Demo = () => {

    return (
        <>
            <Redirect
                collection={'demos'}
                componentListItem={ (key, item) => { return (<DemoListItem key={ key } item={ item } />) } }
                componentSlug={ (style, slug) => { return (<DemoDetail style={ style } slug={ slug } />) } }
            />
        </>
    )
}

export default Demo;


/* import DemoItemContainer from './ItemContainer'
import DemoDetailContainer from './DetailContainer'

import { selectDb } from '../../data/firestoreDb'

import { useParams } from 'react-router-dom'

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react'

const Demo = (props) => {
    const [ loading, setLoading ] = useState(true);
    const [ result, setResult ] = useState([])

    const { slug } = useParams();

    const style = useSelector(state => state).theme.style;
    const translate = useSelector(state => state).lang.translate;
    const setting = useSelector(state => state)
    const lang = setting ? setting.lang.lang : 'sp'   

    const getData = async (slug) => {
        await selectDb(
            'demos', 
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

    if(loading)
        return (
            <>
                { translate['loading'] }
            </>
        )

    if(slug && result.data.length === 1) {
        return (
            <DemoDetailContainer
                style={ style.container}
                data={ result.data[0] }
            >
            </DemoDetailContainer>
        )
    }
    
    return (
        <>
            {
                <DemoItemContainer
                    key = {0}
                    style={ style.container}
                    data = { result.data }
                ></DemoItemContainer>
            }                    
        </>
    )
}

export default Demo; */