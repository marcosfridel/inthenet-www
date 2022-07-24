import WikiItemList from './ItemList'

const ItemContainer = (props) => {
    return (
        <>
            {
                props.data.map( item => {
                    return (
                        <WikiItemList
                            key={ item.id }
                            data={ item }
                        ></WikiItemList>
                        )
                    }
                )
            }
        </>
    )
}

export default ItemContainer;