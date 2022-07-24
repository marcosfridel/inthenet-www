import { useEffect, useRef, useState } from "react";
import { Button, ListGroup, Overlay, OverlayTrigger, Popover, Tooltip } from "react-bootstrap";

const DropdownCustom = (props) => {

    const target = useRef(null);

    const [ itemButton, setItemButton ] = useState();
    const [ visibleListGroup, setVisibleListGroup ] = useState(false);
    const [ showOverlay, setShowOverlay ] = useState(false);
    const listItems = props.list;
    const labelItems = props.label;
    const style = props.style;

    const itemDropdown = (item) => {
        return (
            <>
                { item.text }
            </>
        )
    }

    useEffect(() =>{
        //console.log('props.list[0]', props.list[0])
        if(props.list && props.list.length)
        setItemButton(itemDropdown(props.list[0]));
    }, [])

    const onClick = (key) => {
        if(props.onClick) props.onClick(key);
        setItemButton(itemDropdown(props.list.find(e => e.key === key)));
        setShowOverlay(false)
    }

    if (!itemButton) return <></>

    console.log('target.current', target.current)

    return (
        <>
            <Button 
                ref={target}
                onClick={() => setShowOverlay(!showOverlay)}
                style={ { ...style } }
                variant="secondary">
                    {/* { labelItems ? `${labelItems}: ` : '' }  */}
                    { itemButton }
            </Button>

            <Overlay
                placement="bottom"
                target={ target.current } 
                style={ { ...style } }
                show={ showOverlay } 
                >
                    {
                        ({ placement, arrowProps, show: _show, popper, ...props }) => ( 
                            <div
                                { ...props }
                                style={{
                                    position: 'absolute',
                                    ...props.style,
                                    ...style
                                }}
                            >
                                <ListGroup
                                    style={ { width: target.current.width } }
                                >
                                    {
                                        listItems.map(item => 
                                            <ListGroup.Item 
                                                action
                                                key={ item.key }
                                                onClick={ () => { onClick(item.key) }}
                                                >
                                                { itemDropdown(item, labelItems) }
                                            </ListGroup.Item>
                                        )
                                    }
                                </ListGroup>    
                            </div>
                        ) 
                    }
            </Overlay>
        </>
    )
}

export default DropdownCustom;