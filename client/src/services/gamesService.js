import * as fetchData from './fetchData';
const baseUrl = 'http://localhost:3005';

export const getGames = async () => {
    return await fetchData.get(`${baseUrl}/games`);

}
export const saveGame = async (data) => {
    return await fetchData.post(`${baseUrl}/games`, data);
}