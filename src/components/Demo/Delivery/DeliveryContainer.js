import { Tab, Tabs } from "react-bootstrap";

import { useEffect, useState } from 'react'

import { useSelector } from 'react-redux';

import DeliveryStep1 from './DeliveryStart'

const DeliveryContainer = (props) => {
    const style = useSelector(state => state).theme.style;
    const translate = useSelector(state => state).lang.translate;

    return (
        <>
            <Tabs 
                defaultActiveKey="deliverymy" className="mb-3">
                <Tab
                    eventKey="deliverymy" 
                    title={ translate['deliverymy'] }>
                    <DeliveryStep1
                    ></DeliveryStep1>
                </Tab>
{/*                 <Tab eventKey="deliveryhistory" title={ translate['deliveryhistory'] }>
                </Tab> */}
            </Tabs>  
        </>
    )
}

export default DeliveryContainer;