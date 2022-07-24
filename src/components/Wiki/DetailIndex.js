import { Card, Collapse, ListGroup } from 'react-bootstrap';

import { useContext, useState } from 'react';

import { useSelector } from 'react-redux';

const DetailIndex = (props) => {
    const style = useSelector(state => state).theme.style;

    const [openCollapse, setOpenCollapse] = useState(true);    

    let i = 0;
    //let content = [{ id: i, idLevel: 0, title: props.data.title }];
    let content = [];
    
    content = 
        props.data.content.reduce((group, item) => {
            i++;
            group.push({ id: i, idLevel: 0, text: item.title })
            
            let j = 0;
            if(item.content)
                item.content.reduce((groupLevel, itemLevel) => {
                    j++;
                    groupLevel.push({ id: i, idLevel: j, text: itemLevel.title });

                    return groupLevel;
                }, group);

            return group;
        }, content) 


    return (
        <>  
            <Card
                style={ style.card }
            >
                <Card.Header>
                    Contenido [  <a href="#" onClick={ () => setOpenCollapse(!openCollapse) }>{ openCollapse ? "Cerrar" : "Abrir" }</a> ]
                </Card.Header>
                <Collapse in={openCollapse}>
                    <ListGroup>
                        {
                            content.map((item, index) => {
                                return (
                                    <>
                                        <ListGroup.Item action href={ `#wiki-index-${index + 1}` } 
                                            style={ style.listgroup.item }
                                        >
                                            { `${item.idLevel ? `\u00a0\u00a0\u00a0\u00a0` : ``} ${item.id}${ item.idLevel ? `.${item.idLevel}` : `` }. ${item.text}` }
                                        </ListGroup.Item>
                                    </>
                                )
                            })
                        }
                    </ListGroup>
                </Collapse>
            </Card>
        </>
    )
}

export default DetailIndex