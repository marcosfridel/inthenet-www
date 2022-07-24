const DetailMain = (props) => {
    console.log('DetailMain props', props)
    return (
        <>
            { props.data.title }
        </>
    )
}

export default DetailMain;