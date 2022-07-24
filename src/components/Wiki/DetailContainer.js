import Detail from './Detail'

const DetailContainer = (props) => {

    //console.log('props.data.title', props.data.title)
    return (
        <>
            <Detail 
                data={ props.data }
            ></Detail>
        </>
    )
}

export default DetailContainer