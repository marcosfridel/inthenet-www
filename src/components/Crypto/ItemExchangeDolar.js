import { Card } from "react-bootstrap";

import { useSelector } from 'react-redux';

const ItemExchangeDolar = (props) => {
    const style = useSelector(state => state).theme.style;
    const translate = useSelector(state => state).lang.translate;

    return (
        <>
            <Card style={ style.card }>
                <Card.Title>
                    { translate.dollar ? translate.dollar : '---' }
                </Card.Title>
                <Card.Body>
                    
                    { translate.dollarquoteofficial ? translate.dollarquoteofficial : '---' }: { props.data.oficial }<br></br>
                    { translate.dollarquotesolidarity ? translate.dollarquotesolidarity : '---' }: { props.data.solidario }<br></br>
                    { translate.dollarquotestockmarket ? translate.dollarquotestockmarket : '---' }: { props.data.mep }<br></br>
                    { translate.dollarquotecashsettlement ? translate.dollarquotecashsettlement : '---' }: { props.data.ccl }<br></br>
                    { translate.dollarquotecashbitcoin ? translate.dollarquotecashbitcoin : '---' }: { props.data.ccb }<br></br>
                    { translate.dollarquoteinformal ? translate.dollarquoteinformal : '---' }: { props.data.blue }
                </Card.Body>
            </Card>
        </>
    )

}

export default ItemExchangeDolar;