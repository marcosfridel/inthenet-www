import { Form } from "react-bootstrap";

const TextGroup = (props) => {

    if(!props.onChange) return <></>
    /* if(!props.value) return <></> */

    return (
        <>
        <Form.Group className="mb-3" controlId={ `form-group-${props.label}` }>
            <Form.Label>{ props.label }</Form.Label>
            <Form.Control 
                type={ props.type ? props.type : 'text' } 
                placeholder= "" 
                onChange={ e => { props.onChange(e.target.value); }} 
                value={ props.value } />
        </Form.Group>
        </>
    )
}

export default TextGroup;

