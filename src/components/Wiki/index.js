import WikiItemContainer from './ItemContainer'
import WikiDetailContainer from './DetailContainer'

import { useParams } from 'react-router-dom'

import result from '../../data/wiki'

const Index = (props) => { 
    
  /*   const style = settingContext.getStyle(); */

    // >>> GET API <<<

    const { slug } = useParams();
    console.log('slug', slug)
    
    if(slug) {
        //const item = result.find(item => item.id === Number.parseInt(slug));
        const entries = result.filter(item => item.slug.find(itemSlug => itemSlug === slug));

        if(entries.length === 1) 
            return (
                <>
                    {
                        <WikiDetailContainer
                            data = { entries[0] }
                        ></WikiDetailContainer>
                    }          
                </>
            )
        
        if (entries.length > 1)
            result = entries;
    }

    return (
        <>
            {
                <WikiItemContainer
                    data = { result }
                ></WikiItemContainer>
            }                    
        </>
    )
}

export default Index;