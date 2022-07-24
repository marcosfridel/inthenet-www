import { Wrapper, Status } from "@googlemaps/react-wrapper";

import MapGoogleMark from "./MapGoogleMark";

const render = (status) => {
    //console.log('status', status, Status.LOADING, Status.FAILURE)
    if (status === Status.LOADING) return 'Cargado...';
    if (status === Status.FAILURE) return 'Fallo';
    return '';
  };

const MapGoogle = (props) => {
    /* console.log('MapGoogle props', props) */

    return (
        <Wrapper apiKey={ process.env.REACT_APP_GOOGLE_MAPS_API_KEY } render={ render } >
            <MapGoogleMark { ...props }/>
        </Wrapper>
    )
}

export default MapGoogle;