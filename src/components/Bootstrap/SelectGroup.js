import { Form } from "react-bootstrap";

const SelectGroup = (props) => {

    if(!props.onChange) return <></>
    /* if(!props.value) return <></> */
    if(!props.list) return <></>

    return (
        <>
            <Form.Group className="mb-3" controlId={ `form-group-${props.label}` }>
                <Form.Label>{ props.label }</Form.Label>
                <Form.Select 
                    value={ props.value }
                    onChange={ e => { props.onChange(e.target.value); }}
                >
                    {
                        props.list.map(item => {
                            return (
                                <option key={ `${props.label}-${item.key}` } value={ item.text } >{ item.text }</option>
                            )
                        })
                    }
                </Form.Select>
            </Form.Group>         
        </>
    )
}

export default SelectGroup;