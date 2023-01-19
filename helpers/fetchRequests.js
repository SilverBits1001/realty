import axios from "axios";



export async function getDetails(propertyId) {
    const options = {
        method: 'GET',
        url: 'https://realty-in-us.p.rapidapi.com/properties/v3/detail',
        params: { property_id: propertyId },
        headers: {
            'X-RapidAPI-Key': '5566749913msh600e05ab0d08fbfp1190e3jsn19c8a5d6c5ec',
            'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response
    } catch (error) {
        console.error(error);
    }

}



