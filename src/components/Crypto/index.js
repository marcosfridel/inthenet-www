import { Col, Row } from 'react-bootstrap';
import { Button, Form } from 'react-bootstrap'

import { useEffect, useState } from 'react'

import { useSelector } from 'react-redux';

import CryptoItemContainer from './ItemContainer'
import CryptoItemExchangeDolar from './ItemExchangeDolar'

import result_crypto_coin from '../../data/crypto_coin'
import result_currency from '../../data/currency'

const Crypto = () => {
    const style = useSelector(state => state).theme.style;
    const translate = useSelector(state => state).lang.translate;

    const [ coinExchange, setCoinExchange ] = useState([])
    const [ dollarExchange, setDollarExchange ] = useState([])

    const [ currency, setCurrency ] = useState('')
    const [ cryptoCoin, setCryptoCoin ] = useState('')
    const [ cryptoVolume, setCryptoVolume ] = useState(1)

    const getCoinExchange = async (coin, currency, volume) => {
        if(!coin.length) return;
        if(!currency.length) return;
        
        await fetch(`https://criptoya.com/api/${coin}/${currency}/${volume}`)
        .then((response) => response.json())
        //.then((json) => setData(json))
        .then((json) => {
            setCoinExchange(json)
        })
        .catch()
    }

    const getDollarExchange = async () => {
        await fetch(`https://criptoya.com/api/dolar`)
        .then((response) => response.json())
        .then((json) => {
            setDollarExchange(json)
        })
        .catch()
    }

    const onClickChange = async () => {
        await getCoinExchange(cryptoCoin, currency, cryptoVolume)
        await getDollarExchange();
    }

    useEffect(() => {
        setCryptoCoin(result_crypto_coin[0].key)
        setCurrency(result_currency[0].key)
        onClickChange();
    }, []) 

/*     Object.keys(coinExchange).map(item => {
        console.log(item)
    }) */

    //console.log('coinExchange', coinExchange);

    return (
        <>
            <Row>
                <Col xs={12} sm={6} >
                    <Form.Floating >
                        <Form.Select 
                            id='criptocoin'
                            style={ style.select }
                            size='sm'
                            onChange={ (e) => { setCryptoCoin(e.target.value) } } >
                            {
                                result_crypto_coin.map((item) => {
                                    //if(cryptoCoin === '') setCryptoCoin(item.key)
                                    return <option value={ item.key }>{ item.text }</option>
                                })
                            }
                        </Form.Select>
                        <Form.Label htmlFor="criptocoin">{ translate['coincrypto'] }</Form.Label>
                    </Form.Floating>
                    <Form.Floating>
                        <Form.Select 
                            id='currency'
                            style={ style.select }
                            size='sm'
                            onChange={ (e) => { setCurrency(e.target.value) } }>
                            {
                                result_currency.map((item) => {
                                    return <option value={ item.key }>{ item.text }</option>
                                })
                            }
                        </Form.Select>  
                        <Form.Label htmlFor="currency">{ translate['currency'] }</Form.Label>
                    </Form.Floating>
                    <Form.Floating>
                        <Form.Control 
                            id="volume"
                            style={ style.input }
                            size="sm"
                            type="number" value={ cryptoVolume } onChange={ (e) => { setCryptoVolume(e.target.value) } } />
                        <Form.Label htmlFor="volume">{ translate['volume'] }</Form.Label>
                    </Form.Floating>
                    <Button onClick={ () => { onClickChange() } } >{ translate['search'] }</Button>  
                </Col>
                <Col xs={12} sm={6} >
                    <CryptoItemExchangeDolar
                        data={ dollarExchange }
                    ></CryptoItemExchangeDolar>
                </Col>
            </Row>
          
            <hr></hr>
            <hr></hr>
            <CryptoItemContainer
                data={ coinExchange }
            ></CryptoItemContainer>
        </>
    )
}

export default Crypto;