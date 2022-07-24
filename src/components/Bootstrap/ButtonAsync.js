import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useSelector } from 'react-redux';

const ButtonAsync = (props) => {

    const translate = useSelector(state => state).lang.translate;
    
    const [ loading, setLoading ] = useState(false)

    const labelLoading = (props.labelLoading ? props.labelLoading : translate['loading'])

    if(!props.children) return <></>
    if(!props.onClick) return <></>

    const onClick = async () => {
        setLoading(true);
        await props.onClick();
        setLoading(false);
    }

    return (
        <>
            <Button variant="primary" type="submit" onClick={() => { onClick() } } disabled={ loading } >
                { 
                    loading && 
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        />
                }
                { loading ? ` ${labelLoading}` : props.children }
            </Button>        
        </>
    )
}

export default ButtonAsync;