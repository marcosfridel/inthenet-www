/* import ServiceItemContainer from './ItemContainer'
import ServiceDetailContainer from './DetailContainer' */

import { selectDb } from '../../data/firestoreDb'

import { useParams } from 'react-router-dom'

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react'

import DetailContainer from './DetailContainer'
import ListContainer from './ListContainer'
import Loading from './Loading';

const Redirect = (props) => {

    const [ loading, setLoading ] = useState(true);
    const [ result, setResult ] = useState([])

    const { slug } = useParams();

    const style = useSelector(state => state).theme.style;
    const translate = useSelector(state => state).lang.translate;
    const setting = useSelector(state => state)
    const lang = setting ? setting.lang.lang : 'sp'

    const { collection, componentDetail, componentListItem, componentSlug } = props;
  
    const getData = async () => {
        if(slug && componentSlug)  {
            setLoading(false);
            return ;
        }

        setLoading(true);

        await selectDb(
            collection, 
            'order', 
            [
                { f: 'slug', c: 'array-contains-any', v: slug ? [ slug ] : undefined },
                { f: 'lang', c: '==', v: lang } 
            ]
        )
        .then(result => {
            setResult(result);
            //console.log('result', result)
            setLoading(false);
        })
        .catch(e => {
            console.log(e)
            setLoading(false);
        })
    }

    useEffect(() => {
        if(slug && componentSlug) {
            setLoading(false);
            return ;
        }
        getData();
    }, [])   

    useEffect(() => {
        getData();
    }, [lang, slug])     

    if(loading)
        return (
            <Loading label= { translate['loading'] } />
        ) 

    //console.log('slug', slug, result.data, componentSlug )

    if((slug || result.data.length === 1) && componentSlug) {
        console.log('slug Ok')
        console.log('slug', (slug ? slug : result.data[0].slug[0]))
        //slug = 
        return componentSlug(style, (slug ? slug : result.data[0].slug[0]))
    }

    if((slug || result.data.length === 1) && componentDetail) {
        return (
            <DetailContainer
                style={ style.container}
                data={ result.data[0] }
                componentDetail = { componentDetail }
            >
            </DetailContainer>
        )
    }
    
    return (
        <>
            {
                <ListContainer
                    key = {0}
                    style = { style.container}
                    data = { result.data }
                    componentListItem = { componentListItem }
                ></ListContainer>
            /* componentList( style.container, result.data)  */
/*                 <componentList
                    key = {0}
                    style={ style.container}
                    data = { result.data }
                ></componentList> */
            }                    
        </>
    )
}

export default Redirect
