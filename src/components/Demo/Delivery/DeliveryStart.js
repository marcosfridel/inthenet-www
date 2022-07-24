import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

import AlertCustom from "../../Tools/AlertCustom";
import { useSelector } from 'react-redux';

import MapGoogle from "../../Tools/MapGoogle";
import { getLocation } from "../../Lib/MapGoogleLib";

import location_state from '../../../data/location_state'
import { insertDb } from "../../../data/firestoreDb";

import SelectGroup from '../../Bootstrap/SelectGroup'
import TextGroup from '../../Bootstrap/TextGroup'
import ButtonAsync from "../../Bootstrap/ButtonAsync";

import DeliveryEnd from "./DeliveryEnd";

const DeliveryStart = (props) => {
    const style = useSelector(state => state).theme.style;
    const translate = useSelector(state => state).lang.translate;

    const [ name, setName ] = useState('')
    const [ locationState, setLocationState ] = useState(0)
    const [ locationCity, setLocationCity ] = useState('')
    const [ locationStreet, setLocationStreet ] = useState('')
    const [ locationStreetPlus, setLocationStreetPlus ] = useState('')
    const [ locationZip, setLocationZip ] = useState('')

    const [ positionOk, setPositionOk ] = useState(false);
    const [ positionLatitude, setPositionLatitude ] = useState(0.0);
    const [ positionLongitude, setPositionLongitude ] = useState(0.0);

    const [ deliveryOk, setDeliveryOk ] = useState();

    const [ alertOptions, setAlertOptions ] = useState({})

    useEffect(() => {

        let deliveryInfo = localStorage.getItem('deliveryInfo');
        /* console.log('useEffect deliveryInfo', deliveryInfo) */
        deliveryInfo = (deliveryInfo ? JSON.parse(deliveryInfo) : null)

        if(deliveryInfo) {
            setName(deliveryInfo["name"]);
            setLocationState(deliveryInfo["locationState"]);
            setLocationCity(deliveryInfo["locationCity"]);
            setLocationStreet(deliveryInfo["locationStreet"]);
            setLocationStreetPlus(deliveryInfo["locationStreetPlus"]);
            setLocationZip(deliveryInfo["locationZip"]);
            /* console.log('locationState', locationState); */
            
            setPositionOk(true);            
            setPositionLatitude(deliveryInfo["locationLat"]);
            setPositionLongitude(deliveryInfo["locationLng"]);

        } else {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition((position) => {
                    setPositionOk(true);
                    setPositionLatitude(position.coords.latitude);
                    setPositionLongitude(position.coords.longitude);
                });
            }
        }

    }, [])

    const onClickSave = async () => {
        
        let location = await getLocation(`${locationStreet}, ${locationCity}, ${locationState}`)
        //let location = await getLocation(`${locationStreet}, ${locationCity}`)
        
        setPositionLatitude(location.lat)
        setPositionLongitude(location.lng);

        let deliveryInfo = {};

        deliveryInfo["name"] = name;
        deliveryInfo["locationState"] = locationState;
        deliveryInfo["locationCity"] = locationCity;
        deliveryInfo["locationStreet"] = locationStreet;
        deliveryInfo["locationStreetPlus"] = locationStreetPlus;
        deliveryInfo["locationZip"] = locationZip;
        deliveryInfo["locationLat"] = location.lat;
        deliveryInfo["locationLng"] = location.lng;

        const resultDb = await insertDb('demo_delivery', deliveryInfo);

        if(resultDb.ok) {
            deliveryInfo["code"] = resultDb.key;
            
            localStorage.setItem('deliveryInfo', JSON.stringify(deliveryInfo))

            setDeliveryOk(deliveryInfo)
            return;
        } 
        
        setAlertOptions({
            visible: true,
            type: 'danger',
            text: `<p>Se produjo un error al guardar la entrega.</p><p>Error: ${resultDb.text}</p>`
        })
    }


    if(deliveryOk) {
        return (
            <DeliveryEnd
                data={ deliveryOk }
            ></DeliveryEnd>
        )
    }
        
    return (
        <>
            <Row>
                <Col xs={12} sm={6}>
                    <Form>
                        <TextGroup
                            label={ translate['name'] }
                            onChange={ setName }
                            value={ name }
                        ></TextGroup>
                        <SelectGroup
                            label={ translate['locationstate'] }
                            onChange={ setLocationState }
                            list={ location_state }
                            value={ locationState }
                        ></SelectGroup>
                        <TextGroup
                            label={ translate['locationcity'] }
                            onChange={ setLocationCity }
                            value={ locationCity }
                        ></TextGroup>
                        <TextGroup
                            label={ translate['locationstreet'] }
                            onChange={ setLocationStreet }
                            value={ locationStreet }
                        ></TextGroup>
                        <TextGroup
                            label={ translate['locationstreetplus'] }
                            onChange={ setLocationStreetPlus }
                            value={ locationStreetPlus }
                        ></TextGroup>
                        <TextGroup
                            label={ translate['locationzip'] }
                            type="number" 
                            onChange={ setLocationZip }
                            value={ locationZip }
                        ></TextGroup>
                    </Form> 
                    <ButtonAsync
                        onClick={ onClickSave }
                    >{ translate['save'] }</ButtonAsync>
                    <AlertCustom key='alert' options={ alertOptions } />
                </Col>
                <Col xs={12} sm={6}>
                    <div
                        style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "500px",
                        width: "500px"
                        }}
                    >
                        { positionOk && <MapGoogle lat={ positionLatitude } lng={ positionLongitude }></MapGoogle> }
                    </div>
                </Col>
            </Row>       
        </>
    )
}

export default  DeliveryStart;

