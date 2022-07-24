/* import Contact from '../components/Pages/Contact'
import Features from '../components/Features'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio' */

import DropdownCustom from '../components/Tools/DropdownCustom';

const Home = () => {

    const listLang = [
        { key: 'sp', text: 'Español1' },
        { key: 'en', text: 'Inglés1' }
    ]

    return (
        <>        
            <DropdownCustom
                list={ listLang }
                /* onClick={ onClickSetLang } */
            >
            </DropdownCustom>
        </>
    )
}

export default Home;