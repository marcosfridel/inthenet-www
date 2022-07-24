import { Button, Col, Card, Placeholder } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";

const ListItem = (props) => {
    
    const style = useSelector(state => state).theme.style;
    const translate = useSelector(state => state).lang.translate;

    const { item } = props;

    return (
        <>
            <Col xs={12} sm={3}>
                <Card style={ style.card }>
                    <Card.Img variant="top" src={ item.image[0] } />
                    <Card.Body>
                        <Card.Title>{ item.title }</Card.Title>
                        <Card.Text>{ item.descriptionshort }</Card.Text>
                        <NavLink to={`/service/${ item.slug[0] }`}   >
                            <Button variant="primary">{ translate['iwanttoknowmore'] }</Button>
                        </NavLink>
                    </Card.Body>
                </Card>  
            </Col>          
        </>
    )

}

export default ListItem;