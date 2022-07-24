import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/chat.css';

import { useSelector } from 'react-redux';

import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

import InputGroup from '../Bootstrap/InputGroup';

const ButtonChat = (props) => {

    const style = useSelector(state => state).theme.style;
    const translate = useSelector(state => state).lang.translate;

    const onClick = () => {
        alert("onClick");
    }

    const popover = (
        <Popover id="popover-basic">
          <Popover.Header>Chat</Popover.Header>
          <Popover.Body  className='form-container'>
            <div className="container-chat-parent">
                <div class="container-chat">
                    {/* <img src="/w3images/bandmember.jpg" alt="Avatar" /> */}
                    <p>Hello. How are you today?</p>
                    <span class="time-right">11:00</span>
                </div>

                <div class="container-chat darker">
                    {/* <img src="/w3images/avatar_g2.jpg" alt="Avatar" class="right" /> */}
                    <p>Hey! I'm fine. Thanks for asking! Hey! I'm fine. Thanks for asking! Hey! I'm fine. Thanks for asking! Hey! I'm fine. Thanks for asking!</p>
                    <span class="time-left">11:01</span>
                </div>

                <div class="container-chat">
                    {/* <img src="/w3images/bandmember.jpg" alt="Avatar" /> */}
                    <p>Hello. How are you today?</p>
                    <span class="time-right">11:00</span>
                </div>

                <div class="container-chat darker">
                    {/* <img src="/w3images/avatar_g2.jpg" alt="Avatar" class="right" /> */}
                    <p>Hey! I'm fine. Thanks for asking!</p>
                    <span class="time-left">11:01</span>
                </div>

            </div>

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

    /* if(!props.popup) return <></> */

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

export default ButtonChat;