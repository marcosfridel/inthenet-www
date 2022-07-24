import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';

import DetailIndex from './DetailIndex'

import { FormatHtml } from '../../lib/Html';

import { useSelector } from 'react-redux';

const Detail = (props) => {
    const style = useSelector(state => state).theme.style;

    let posLink = 0;
    
    return (
        <>
            <Row 
                style={ style.page }>
                <Col xs={12} sm={3} >
                    <DetailIndex 
                        data={ props.data }
                    ></DetailIndex>
                </Col>
                <Col xs={12} sm={9} >
                    <h1>{ `${props.data.title}` }</h1>
                    { props.data.text ? props.data.text : '' }
                    {
                        props.data.content.map((item, index) => {
                            posLink++;
                            return (
                                <>
                                    <h3><span id={ `wiki-index-${posLink}` }>{ item.title ? `${index + 1}. ${item.title}` : '' }</span></h3>
                                    <p>{ FormatHtml(item.text) }</p>
                                    {/* <p>{ item.text ? <FormatHtml text={item.text} /> : '' }</p> */}
                                    {
                                        item.content ?
                                        item.content.map((item2, index2) => {
                                            posLink++;
                                            return (
                                                <>
                                                    <h5><span id={ `wiki-index-${posLink}` }>{ item2.title ? `${index + 1}.${index2 + 1} ${item2.title}` : '' }</span></h5>
                                                    {/* <p>{ item2.text ? `>>${item2.text}` : '' }</p>  */}    
                                                    <p>{ FormatHtml(item2.text) }</p>
                                                    {/* <p>{ item2.text ? <FormatHtml text={item2.text} /> : '' }</p>    */}                                         
                                                </>
                                            )                                            
                                        }) : <></>
                                    }
                                </>
                            )    
                        })                    
                    }
                </Col>
            </Row>
        </>
    )
}


export default Detail;