

export const getLocation = async (address) => {
    const geocoder = new window.google.maps.Geocoder();

    //console.log('getLocation address', address)
    return await geocoder
        .geocode({ address })
        .then((result) => {

            const { results } = result;

            const firstResult = results[0];
            const location = firstResult.geometry.location;
            
            const lat = location.lat();
            const lng = location.lng();

            /* console.log(`latitude: ${lat} - longitude: ${lng}`) */
            return({ lat, lng });
        })
        .catch((e) => {
            console.error("Geocode was not successful for the following reason: " + e);
            return({ lat: 0.0, lng: 0.0 });
        });
}