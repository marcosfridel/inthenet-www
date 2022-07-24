import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/chat.css';

import { useSelector } from 'react-redux';

import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

import InputGroup from '../Bootstrap/InputGroup';
import { useEffect, useState } from 'react';
import AlwaysScrollToBottom from '../Tools/ScrollToBottomAlways';

import { FormatHtml } from '../../lib/Html';
import { getArrayUpper } from '../../lib/Alphabet'

import Moment from 'moment';

import { Link, useNavigate } from 'react-router-dom';


const Chat = (props) => {

    const navigate = useNavigate();

    const style = useSelector(state => state).theme.style;
    const translate = useSelector(state => state).lang.translate;

    const [ visiblePopover, setVisiblePopover ] = useState(false)
    const [ input, setInput ] = useState('')

    const [ comments, setComments ] = useState([]);
    const [ botReply, setBotReply ] = useState({});

    const getCommentFormat = (user, text, options) => {
        return {
            text: text,
            options: options,
            user: user,
            time: Moment().format("HH:mm")
        }
    }

    const setActionSelect = (text) => {
        console.log('setActionSelect text', text)
        setComments(prevArray => [...prevArray, getCommentFormat(true, text)])
        setInput('');
        
        if(botReply.action == 'link_input' || botReply.action == 'link') {
            
            console.log('setActionSelect botReply', botReply)
            onClickOption(botReply, text)
            return;
        }

        if(!botReply.options) return;
        const item = botReply.options.find(item => item.text.toLowerCase() == text.toLowerCase())
        if(item) {
            setAutoReply(item.key);
        }
    }

    const onClickOption = (option, input) => {
        let link = option.link;

        console.log('onClickOption option', option)
        switch(option.action){ 
            case 'select': 
            case 'input': 
                setInput(option.text);
                break;
            case 'link_input':
                console.log('link_input option', option)
                link += `/${ input }`;
            case 'link':
                setVisiblePopover(false);
                setComments([]);
                setAutoReply('start');
                console.log('onClickOption link', link);
                navigate(link);
                break;
        }
    }

    const setAutoReply = (key) => {
        if(!Array.isArray(props.bot)) return;

        const reply = props.bot.find(item => item.key == key.toLowerCase());
 
        if(!reply) return;
        
        setBotReply(reply);
        //console.log('botReply', reply)
        setComments(prevArray => [...prevArray, getCommentFormat(false, reply.text, reply.options) ] )
    }

    useEffect(() => {
        setComments([]);
        setAutoReply('start')
    }, [])
    
    const popover = (
        <Popover>
          <Popover.Header>Chat</Popover.Header>
          <Popover.Body className='chatBody'>
            <div className="chatBodyContainer">
                {
                    comments.map((item, index) => {
                        if(item.user)
                            return (
                                <div key={ index } className="chatBodyContainerComment darker">
                                    <p>Tú has dicho...</p>
                                    <p style={ { alignItems: "right" } } >{ FormatHtml(item.text) }
                                    </p>
                                    <span className="time-right">{ `${item.time}hs` }</span>
                                </div>
                            )

                        return (
                            <div key={ index } className="chatBodyContainerComment">
                                <p>Chatbot dice...</p>
                                <p>{ FormatHtml(item.text) }
                                    {
                                        item.options && 
                                        item.options.map((option, index) => {
                                            return (
                                                <>
                                                    { FormatHtml('<br>') }
                                                    {
                                                        <Button key={ option.key } onClick={ () => onClickOption(option) } variant="outline-secondary" size="sm">{FormatHtml(`${option.text}`)}</Button>
                                                    }
                                                </>
                                            )
                                        })
                                    }
                                </p>
                                <span className="time-right">{ `${item.time}hs` }</span>
                            </div>
                        )
                    })
                }
                <AlwaysScrollToBottom/>
            </div>
            <InputGroup
                label={ 'Enviar' }
                value={ input }
                onClick={ setActionSelect }
            />
          </Popover.Body>
        </Popover>
      );

    return (
        <>
            <OverlayTrigger 
                show={ visiblePopover }
                trigger="click" 
                placement="top" 
                overlay={ popover }>
                <Button style={ style.fixedBottom } onClick={ () => { setVisiblePopover(!visiblePopover) }}>
                    Chat
                </Button>
            </OverlayTrigger>
        </>
    )
}

export default Chat;