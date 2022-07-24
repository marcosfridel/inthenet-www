const DetailContainer = (props) => {

    const { componentDetail } = props;   

    return (
        <>
            {
            componentDetail &&
            componentDetail(props.style, props.data)
            }
        </>
    )
}


export default DetailContainer;