import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/chat.css';

import { useSelector } from 'react-redux';

import { Popover } from 'react-bootstrap';

import InputGroup from '../Bootstrap/InputGroup';

const Popup = (props) => {
    
    const style = useSelector(state => state).theme.style;
    const translate = useSelector(state => state).lang.translate;

    const onClick = () => {
        alert("onClick"); 
    }

    return (
        <Popover id="popover-basic">
            <Popover.Header>Chat</Popover.Header>
            <Popover.Body  className='form-container'>

                <label for="msg"><b>Message</b></label>
                <hr></hr>
                <InputGroup
                    label={ 'Enviar' }
                    onClick={ onClick }
                />
            </Popover.Body>
        </Popover>
    )
}

export default Popup;