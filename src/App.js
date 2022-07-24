import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* import { Container } from 'react-bootstrap'; */

import NavBar from './navs/NavBar';
/* import Content from './pages/Content' */

import Apps from './components/Apps'
import Contact from './pages/Contact'
import Crypto from './components/Crypto'
import Demo from './components/Demo'
import DemoDelivery from './components/Demo/Delivery/DeliveryEnd'
import Home from './pages/Home'
import Panel from './pages/Panel'
import Service from './components/Service'
import Wiki from './components/Wiki'
import ChatButton from './components/Chat/ButtonFixedBottom'
import ChatBot from './components/Chat'
//import Wiki from './pages/Wiki'

import ReduxContainer from './redux/ReduxContainer' 


function App() {
    const bot = [
        {
            key: 'start',
            text: 'Hola, ¿cómo estás?<br>Gracias por visitarnos.<br>¿En que podemos ayudarte?',
            options: [
                { action: 'select', text: 'Servicios', key: 'service' },
                { action: 'select', text: 'Aplicaciones', key: 'apps' },
                { action: 'select', text: 'Demo', key: 'demo' },
                { action: 'input', text: 'Buscar código de demo Delivery', key: 'demo_delivery_input' },
                { action: 'link', text: 'Contactarse con nosotros', link: '/contact' },
            ]
        },
        {
            action: 'select',
            key: 'start_back',
            text: 'Hola, nuevamente.<br>¿En que podemos ayudarte?',
            options: [
                { action: 'select', text: 'Servicios', key: 'service' },
                { action: 'select', text: 'Aplicaciones', key: 'apps' },
                { action: 'select', text: 'Demo', key: 'demo' },
                { action: 'input', text: 'Buscar código de demo Delivery', key: 'demo_delivery_input' }
            ]
        },
        {
            action: 'select',
            key: 'apps',
            text: 'Estas son nuestras aplicaciones.<br>¿Cuál desea conocer?',
            options: [
                { action: 'link', text: 'Circulando', link: '/apps/circulando' },
                { action: 'link', text: 'track.Inthenet', link: '/apps/trackinthenet' },
                { action: 'select', text: 'Volver al menú anterior', key: 'start_back' },
            ]
        },
        {
            action: 'select',
            key: 'service',
            text: 'Estas son nuestras aplicaciones.<br>¿Cuál desea conocer?',
            options: [
                { action: 'link', text: 'Desarrollo web', link: '/service/desarrollo-web' },
                { action: 'link', text: 'Desarrollo backend', link: '/service/desarrollo-backend' },
                { action: 'select', text: 'Volver al menú anterior', key: 'start_back' },
            ]
        },
        {
            action: 'select',
            key: 'demo',
            text: 'Estas son nuestras aplicaciones.<br>¿Cuál desea conocer?',
            options: [
                { action: 'link', text: 'Delivery', link: '/demo/delivery' },
                { action: 'select', text: 'Volver al menú anterior', key: 'start_back' },
            ]
        },
        {
            key: 'demo_delivery_input',
            text: 'Ingrése el código de delivery que le fue informado al dar de alta en la demo de entrega.',
            action: 'link_input',
            link: `${ process.env.REACT_APP_ROOT_DEMO_TRACK }`,
            options: [
                { action: 'select', text: 'Volver al menú anterior', key: 'start_back' },
            ]
        }
    ]

    return (
        <>
            <BrowserRouter>
                <ReduxContainer>
                    <NavBar/>
                    <Routes>             
{/*                         <Route path='/lang/:lang' element={ <Content></Content> }/> 
                        <Route path='/thememode/:themeMode' element={ <Content></Content> }/>  */}
                        <Route path='/panel' element={ <Panel></Panel> }/> 
                        <Route path='/service/:slug' element={ <Service></Service> }/>  
                        <Route path='/service/' element={ <Service></Service> }/>  
                        <Route path='/apps/:slug' element={ <Apps></Apps> }/>  
                        <Route path='/apps/' element={ <Apps></Apps> }/>    
                        <Route path='/cripto' element={ <Crypto></Crypto> }/>  
                        <Route path='/crypto' element={ <Crypto></Crypto> }/>  
                        <Route path='/demo' element={ <Demo></Demo> }/>  
                        <Route path='/demo/:slug' element={ <Demo></Demo> }/>  
                        <Route path='/demo/track/:code' element={ <DemoDelivery></DemoDelivery> }/>  
                        <Route path='/wiki/:slug' element={ <Wiki></Wiki> }/>  
                        <Route path='/wiki' element={ <Wiki></Wiki> }/>  
                        <Route path='/contact' element={ <Contact></Contact> }/> 
                        {/* <Route path='/contacto' element={ <Contact></Contact> }/>  */}
                        <Route path='/' element={ <Home></Home> }/>            
                    </Routes>
                    {/* <ChatButton></ChatButton> */}
                    <ChatBot bot={ bot }></ChatBot>
                </ReduxContainer>
            </BrowserRouter>
        </>
    );
}

export default App;
