import axios from 'axios';

const API_KEY = "6f6fa853ba2d4aa999b7f27eb6e51469";


export default async function getCoordsForAddress(address) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${API_KEY}`;
    
    try {
        const response = await axios.get(url);
        const data = response.data;

        if (data && data.results && data.results.length > 0 && data.results[0].geometry) {
            const coordinates = data.results[0].geometry;
            return coordinates;
        } else {
            throw new Error('Nenhuma coordenada encontrada para o endereço fornecido.');
        }
    } catch (error) {
        console.error('Erro ao obter coordenadas:', error.message);
        return -1;
    }
}