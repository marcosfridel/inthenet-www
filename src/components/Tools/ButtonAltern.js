import { Button } from 'react-bootstrap'
import { useState } from 'react';

const ButtonAltern = (props) => {

    const [ index, setIndex ] = useState(0);

    if(!props.list) return <></>;
    if(props.list.length != 2) return <></>;

    const onClick = () => {
        setIndex(index == 0 ?  1 : 0);
        if (props.onClick) props.onClick(props.list[index].key);
    }
    

    return (
        <>
            <Button
                style={ { ...props.style } }
                onClick={ () => { onClick() } }
            >
                { props.list[index].text }
            </Button>
        </>
    )

}

export default ButtonAltern;