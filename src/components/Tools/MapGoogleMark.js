import { useEffect, useRef, useState } from "react";

const MapGoogleMark = (props) => {
    //console.log('MapGoogleMark props', props)
    const ref = useRef(null);
    const [ map, setMap ] = useState();
    const [ center, setCenter ] = useState({ lat: 0, lng: 0 });
    const [ zoom, setZoom ] = useState(15);
    const [ mode, setMode ] = useState('single')
    const [ markers, setMarkers ] = useState([]);

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}));
        }
        
        if(props.lat && props.lng) {
            setCenter({ lat: props.lat, lng: props.lng })
        }
        
        if(props.zoom) setZoom(props.zoom);
        if(props.mode) setMode(props.mode);

    }, [ref, map, props]);

    useEffect(() => {
        if (map) {
            map.setOptions({ center, zoom: zoom });
        }

        let markersTemp = markers;

        if(mode === 'single') {
            for(let i = 0; i < markersTemp.length; i++) {
                markersTemp[i].setMap(null); 
            }
            markersTemp = [];
        }

        const marker = new window.google.maps.Marker({
            position: center,
            map
        });

        markersTemp.push(marker);

        setMarkers(markersTemp);

    }, [map, center]);

    return (
        <>
            <div ref={ref} style={{ width: "100%", height: "100%" }} />
        </>
    );
}

export default MapGoogleMark;