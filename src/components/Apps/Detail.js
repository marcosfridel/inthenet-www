/* import AppsDetailInfo from './DetailInfo'
import AppsDetailContact from './DetailContact' */
import AppsDetailMain from './DetailMain'
/* import AppsDetailOpinion from './DetailOpinion'
import AppsDetailPorfolio from './DetailPorfolio'
import AppsDetailQuestion from './DetailQuestion' */

const Detail = (props) => {
    return (
        <>
            <AppsDetailMain
                data={ props.data }
            ></AppsDetailMain>
        </>
    )
}

export default Detail;