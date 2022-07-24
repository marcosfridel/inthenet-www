import DeliveryStart from "./Delivery/DeliveryStart";

const Detail = (props) => {
    
    return (
        <>
            { props.slug === 'delivery' && <DeliveryStart></DeliveryStart> }
        </>
    )
}

export default Detail;