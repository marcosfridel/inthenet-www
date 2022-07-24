import { Row } from 'react-bootstrap';
import CryptoItemList from './ItemList'

import crypto_exchange from '../../data/crypto_exchange'

const ItemContainer = (props) => {
    const coinExchange = props.data;

    //console.log('ItemExchangeContainer coinExchange', coinExchange)
    //console.log('ItemExchangeContainer crypto_exchange', crypto_exchange)
    return (
        <> 
            <Row>
                {

                    Object.keys(coinExchange).map(exchangeCode => {
                        let exchange = crypto_exchange.find((item) => item.key === exchangeCode);
                        
                        if (exchange) {
                            return (
                                <CryptoItemList 
                                    key={ exchangeCode }
                                    exchangeCode={ exchangeCode }
                                    exchange={ exchange.text }
                                    ask={ coinExchange[exchangeCode].ask }
                                    bid={ coinExchange[exchangeCode].bid }
                                    time={ coinExchange[exchangeCode].time }
                                    totalAsk={ coinExchange[exchangeCode].totalAsk }
                                    totalBid={ coinExchange[exchangeCode].totalBid }
                                ></CryptoItemList>
                            )

                        }
                    })
                }     
            </Row>           
{/*             {
            props.data.map( crypto => {
                    return (
                        <CryptoItemList
                            key={ crypto.id }
                            crypto={ crypto }
                        ></CryptoItemList>
                        )
                    }
                ) 
            } */}
        </>
    )
}

export default ItemContainer;