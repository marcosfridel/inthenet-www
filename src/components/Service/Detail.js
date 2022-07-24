import ServiceDetailInfo from './DetailInfo'
import ServiceDetailContact from './DetailContact'
import ServiceDetailMain from './DetailMain'
import ServiceDetailOpinion from './DetailOpinion'
import ServiceDetailPorfolio from './DetailPorfolio'
import ServiceDetailQuestion from './DetailQuestion'

const Detail = (props) => {
    
    console.log('Detail props', props)
    return (
        <>
            <ServiceDetailMain
                data={ props.data }
            ></ServiceDetailMain>
            <ServiceDetailInfo
                data={ props.data }
            ></ServiceDetailInfo>
            <ServiceDetailPorfolio
                data={ props.data }
            ></ServiceDetailPorfolio>
            <ServiceDetailOpinion
                data={ props.data }
            ></ServiceDetailOpinion>
            <ServiceDetailQuestion
                data={ props.data }
            ></ServiceDetailQuestion>
            <ServiceDetailContact
                data={ props.data }
            ></ServiceDetailContact>
        </>
    )
}

export default Detail;