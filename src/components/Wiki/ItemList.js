const ItemList = (props) => {
    console.log('props', props)
    return (
        <>
            { props.data.title }
        </>
    )

}

export default ItemList;