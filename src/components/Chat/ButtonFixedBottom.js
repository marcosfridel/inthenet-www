import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/chat.css';

import { useSelector } from 'react-redux';

import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

import InputGroup from '../Bootstrap/InputGroup';

const ButtonFixedBottom = () => {
    
    const style = useSelector(state => state).theme.style;
    const translate = useSelector(state => state).lang.translate;

    const onClick = () => {
        alert("onClick");
    }

    const popover = (
        <Popover id="popover-basic">
          <Popover.Header>Chat</Popover.Header>
          <Popover.Body  className='form-container'>

            <label for="msg"><b>Message</b></label>
            <hr></hr>
            <InputGroup
                label={ 'Enviar' }
                onClick={ onClick }
            />
{/*               <textarea placeholder="Type message.." name="msg" required></textarea>

              <button type="submit" className="btn">Send</button> */}

          </Popover.Body>
        </Popover>
      );

    return (
        <>
            <OverlayTrigger trigger="click" placement="top" overlay={ popover }>
                <Button style={ style.fixedBottom }>
                    Chat
                </Button>
            </OverlayTrigger>
        </>
    )
}

export default ButtonFixedBottom;