import { Form, InputGroup as Input } from "react-bootstrap";
import ButtonAsync from "./ButtonAsync";
import { useEffect, useState } from "react";

const InputGroup = (props) => {

    const [ input, setInput ] = useState('');

    useEffect(() => {
        setInput(props.value)
    }, [ props.value ])
    
    if(!props.label) return <></>
    if(!props.onClick) return <></>

    const onClick = () => {
        if(!input) return;
        props.onClick(input)
        setInput('')
    }
    
    //if(props.value != input) setInput(props.value);

    return (
        <>
            <Input className="mb-3">
{/*                 <FormControl
                    placeholder=""
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
 */}
                <Form.Control 
                    type={ props.type ? props.type : 'text' } 
                    placeholder= "" 
                    onChange={ e => { setInput(e.target.value); }} 
                    value={ input } />                    
                <ButtonAsync onClick={ () => onClick() }>
                    { props.label }
                </ButtonAsync>
            </Input>        
        </>
    )
}

export default InputGroup;