import axios from 'axios';

const URL =
    'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
    try {
        const {
            data: { data },
        } = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'x-rapidapi-key':
                    '15712d79aemsh8f16cf54024b556p1828a1jsnbf2e88671da5',
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            },
        });

        return data;
    } catch (error) {
        console.log(error);
    }
};
