import { Container, Row } from 'react-bootstrap';

const ListContainer = (props) => {

    const { componentListItem } = props;    

    return (
        <>
            {
                componentListItem && 
                <Row
                    style={ { ...props.style } }>
                    {
                        props.data.map((item, index) => {
                            return (
                                componentListItem(item.id, item)
                            )
                        })
                    }
                </Row>
            }
        </>
    )
}

export default ListContainer;