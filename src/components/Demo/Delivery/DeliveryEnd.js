import { useEffect, useState } from "react";
import AlertCustom from "../../Tools/AlertCustom";
import { Col, Form, Row } from "react-bootstrap";

import { selectDb } from '../../../data/firestoreDb'

import { useSelector } from 'react-redux';
    
import CodeQR from "../../Tools/CodeQR";
import MapGoogle from "../../Tools/MapGoogle";
import { useParams } from "react-router-dom";
import Loading from '../../Redirect/Loading';

const DeliveryEnd = (props) => {

    const [ loading, setLoading ] = useState(true);
    const [ showDataCode, setShowDataCode ] = useState(true);

    const translate = useSelector(state => state).lang.translate;
    
    const [ codeDelivery, setCodeDelivery ] = useState('')
    const [ name, setName ] = useState('')
    const [ locationState, setLocationState ] = useState(0)
    const [ locationCity, setLocationCity ] = useState('')
    const [ locationStreet, setLocationStreet ] = useState('')
    const [ locationStreetPlus, setLocationStreetPlus ] = useState('')
    const [ locationZip, setLocationZip ] = useState('')

    const [ positionLatitude, setPositionLatitude ] = useState(0.0);
    const [ positionLongitude, setPositionLongitude ] = useState(0.0);

    const { code } = useParams();

    const [ alertOptions, setAlertOptions ] = useState({})
    
    const wwwTrack = `${ process.env.REACT_APP_WWW }${ process.env.REACT_APP_ROOT_DEMO_TRACK }/${ code ? code : props.data.code }`;

    useEffect(() => {
    
        const getCode = async () => {
            setLoading(true);
            console.log('getCode code', code)
            await selectDb(
                'demo_delivery', 
                null,
                //'order'//, 
                [
                    { f: 'key', c: '==', v: code }
                    //{ f: 'name', c: '==', v: 'Marcos' }
                ]
            )
            .then(result => {
                console.log('result', result)

                if(!result.data.length) {
                    setAlertOptions({
                        visible: true,
                        type: 'danger',
                        text: `El código <b>${ code }</b> no se ha encontrado en nuestra base de datos.<br>Verífique que el código ingresado.</a>`
                    });
                    setLoading(false);
                    setShowDataCode(false);
                    return;
                }

                /* setCodeDelivery(result.data[0].code) */
                setName(result.data[0].name);
                setLocationState(result.data[0].locationState);
                setLocationCity(result.data[0].locationCity);
                setLocationStreet(result.data[0].locationStreet);
                setLocationStreetPlus(result.data[0].locationStreetPlus);
                setLocationZip(result.data[0].locationZip);
                setPositionLatitude(result.data[0].locationLat);
                setPositionLongitude(result.data[0].locationLng);
                setLoading(false);
            })
            .catch(e => {
                console.log(e)
                setLoading(false);
            })
        }

        if(!code) {
            /* console.log('props.data', props.data) */

            /* setCodeDelivery(props.data.code) */
            setName(props.data.name);
            setLocationState(props.data.locationState);
            setLocationCity(props.data.locationCity);
            setLocationStreet(props.data.locationStreet);
            setLocationStreetPlus(props.data.locationStreetPlus);
            setLocationZip(props.data.locationZip);
            setPositionLatitude(props.data.locationLat);
            setPositionLongitude(props.data.locationLng);

            setAlertOptions({
                visible: true,
                type: 'success',
                text: `<p>Entrega guardada correctamente.</p><p>Su código de entrega es <b>${ code }</b>.</p><br>Puede visualizar el estado de la entrega haciendo click <a href="${ process.env.REACT_APP_ROOT_DEMO_TRACK }/${ props.data.code }">aquí.</a>`
            })
            
            setLoading(false);

        } else {
            getCode()
        }
    }, [])

    if(loading)
        return (
            <Loading label= { translate['loading'] } />
        )
        
    return (
        <>
            <AlertCustom key='alert' options={ alertOptions } />
            {
                showDataCode && 
                <Row>
                    <Col xs={12} sm={6}>
                        <p>{ `${ translate['code'] }: ${ code }` }</p>
                        <p>{ `${ translate['name'] }: ${ name }` }</p>
                        <p>{ `${ translate['locationstate'] }: ${ locationState }` }</p>
                        <p>{ `${ translate['locationcity'] }: ${ locationCity }` }</p>
                        <p>{ `${ translate['locationstreet'] }: ${ locationStreet }` }</p>
                        <p>{ `${ translate['locationstreetplus'] }: ${ locationStreetPlus }` }</p>
                        <p>{ `${ translate['locationzip'] }: ${ locationZip }` }</p>
                    </Col>
                    <Col xs={12} sm={6}>
                        <CodeQR value={ wwwTrack } />
                        <div
                            style={{
                            display: "flex",
                            flexDirection: "column",
                            height: "500px",
                            width: "500px"
                            }}
                        >
                            <MapGoogle lat={ positionLatitude } lng={ positionLongitude }></MapGoogle>
                        </div>
                    </Col>
                </Row> 
            }      
        </>
    )
}

export default DeliveryEnd;