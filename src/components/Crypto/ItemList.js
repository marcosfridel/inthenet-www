import { Col, Card } from "react-bootstrap";

import { useSelector } from 'react-redux';

const ItemList = (props) => {
    const style = useSelector(state => state).theme.style;
    const translate = useSelector(state => state).lang.translate;

    //console.log('ItemExchangeList translate', translate)
    return (
        <>
                <Col xs={12} sm={4} >
                    <Card style={ style.card } >
                        <Card.Title>
                            {props.exchange}
                        </Card.Title>
                        <Card.Body>
                            { translate.purchaseprice ? translate.purchaseprice : '---' }: { props.ask }<br></br>
                            { translate.purchasepriceFee ? translate.purchasepriceFee : '---' }: { props.totalAsk }<br></br>
                            { translate.saleprice ? translate.saleprice : '---' }: { props.bid }<br></br>
                            {/* { translate.home ? translate.home : '---' }: { props.time }<br></br> */}
                            { translate.salepriceFee ? translate.salepriceFee : '---' }: { props.totalBid }
                        </Card.Body>
                    </Card>
                </Col>
        </>
    )

}

export default ItemList;