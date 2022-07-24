import { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Table} from 'react-bootstrap'

const ButtonModalSelect = (props) => {
    
    const [ modalShow, setModalShow ] = useState(false);
    const [ itemSelected, setItemSelected ] = useState()

    const setItem = (key) => {
        let item = null;
        if(key)
            item = props.list.find((item) => {
                return (item.key === key)    
            })
        setItemSelected(item ? item : props.list[0])

    }
    
    useEffect(()=>{
        if(!props.list) return;

        setItem(props.selected)
    }, [])

    if(!props.list) return <></>
    if(!itemSelected) return <></>

    const onClick = (key) => {
        if (props.onClick) props.onClick(key);
        setItem(key);
        setModalShow(false);
    }

    return (
        <>
            <Button 
                variant="primary" 
                onClick={() => setModalShow(true)}>
                { `${props.label}: ${itemSelected.text}` }
            </Button>            

            <Modal
                show={ modalShow }
                onHide={() => setModalShow(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{ props.title }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <Table> */}
                        <Row>
                            {
                                props.list.map((item) => {
                                    return (
                                        <Col sm={6} xs={12}
                                            key={ `col-${item.key}` }
                                            style={ { textAlign: 'center' } }
                                        >
{/*                                             <a
                                                onClick={ () => { onClick(item.key) }}>
                                                { item.text }
                                            </a> */}
                                            <Button variant="primary"
                                                key={ `lang-${item.key}` }
                                                onClick={ () => { onClick(item.key) }}>
                                                { item.text }
                                            </Button>
                                        </Col>                                        
                                    )
                                })
                            }
                        </Row>
                    {/* </Table> */}
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ButtonModalSelect;