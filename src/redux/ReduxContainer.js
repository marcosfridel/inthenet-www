import { Container } from 'react-bootstrap';

import { useEffect } from 'react';

import { useSelector } from 'react-redux';

const ReduxContainer = ({children}) => {
    const stateRedux = useSelector(state => state);

    let style = {} 
    style = stateRedux.theme.style;
/*     console.log('Container stateRedux', stateRedux)
    console.log('Container style', style) */

    useEffect(() => {
    }, []) 
    
    return (
        <Container fluid style={ style.site } >
            { children }
        </Container>
    )

}

export default ReduxContainer;