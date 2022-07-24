import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Container, Form, Navbar, Nav, Col, Row } from 'react-bootstrap';

import { useContext, useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { setLang } from '../redux/actions/settingLang';
import { setTheme } from '../redux/actions/settingTheme';
import DropdownCustom from '../components/Tools/DropdownCustom';
import ButtonAltern from '../components/Tools/ButtonAltern';
import ButtonModalSelect from '../components/Tools/ButtonModalSelect'

const NavBar = () => {

    const dispatch = useDispatch()
    const style = useSelector(state => state).theme.style;
    const translate = useSelector(state => state).lang.translate;
    
    const [ contentList, setContentList ] = useState({});
    const contentListKeys = [ 'title', 'category' ]

    const onClickSetLang = (lang) => {
        dispatch(setLang(lang));
    }
    const onClickSetTheme = (theme) => {
        dispatch(setTheme(theme));
    }

    const listLang = [
        { key: 'sp', text: 'Español' },
        { key: 'en', text: 'Inglés' }
    ]

    /* console.log('listLang', listLang) */

    return (
        <>  
            <Navbar collapseOnSelect 
                /* className="sticky-top" */
                style={ style.navbar }
/*                 bg={ style.navbar.backgroundColor } 
                variant={ style.navbar.backgroundColor }  */
                expand="lg" >
                <Container>
                    <Navbar.Brand href='/' style={ style.navbar } >Inthenet</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    
                    {/* div sin finalidad para centrar el div siguiente. Truco de bootstrap obtenido de https://www.geeksforgeeks.org/how-to-align-navbar-items-to-center-using-bootstrap-4/ */}
                    {/* <div className="collapse navbar-collapse"></div> */}
                    <Navbar.Collapse className="collapse navbar-collapse">
                        <></>
                    </Navbar.Collapse>

                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand> */}
                        <Nav className="me-auto">
                            <Nav.Link className="nav-link" style={ style.navbar } href='/'>{ translate['home'] }</Nav.Link>
                            <Nav.Link className="nav-link" style={ style.navbar } href='/service'>{ translate['services'] }</Nav.Link>
                            <Nav.Link className="nav-link" style={ style.navbar } href='/apps'>{ translate['apps'] }</Nav.Link>
                            <Nav.Link className="nav-link" style={ style.navbar } href='/demo'>{ translate['demo'] }</Nav.Link>
                            <Nav.Link className="nav-link" style={ style.navbar } href='/wiki'>{ translate['wiki'] }</Nav.Link>
                            <Nav.Link className="nav-link" style={ style.navbar } href='/panel'>{ translate['panel'] }</Nav.Link>
                            <Nav.Link className="nav-link" style={ style.navbar } href='/contact'>{ translate['contact'] }</Nav.Link>
                        </Nav>
                        <Nav className="justify-content-end" style={ style.navbar } >
                            <Nav.Item>
                                <ButtonModalSelect
                                    key={ 'key' }
                                    title={ translate['lang'] }
                                    label={ translate['lang'] }
                                    list={ listLang }
                                    onClick={ onClickSetLang }
                                    style={ { width: '100px' }}
                                ></ButtonModalSelect>   
                            </Nav.Item>
                            <Nav.Item>
                                <ButtonAltern
                                    label={ translate['lang'] }
                                    list={ [ { key: 'light', text: 'Claro'}, { key: 'dark', text: 'Oscuro'} ] }
                                    onClick={ onClickSetTheme }
                                    style={ { width: '100px' }}
                                ></ButtonAltern>
                            </Nav.Item>
                        </Nav>                        
{/*                         <Navbar.Text style={ style.navbar } >
                            <input type="submit" onClick={ () => onClickSetTheme('dark') } value="Oscuro" ></input> /  
                            <input type="submit" onClick={ () => onClickSetTheme('light') } value="Claro" ></input>
                        </Navbar.Text>       */}                  
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;
