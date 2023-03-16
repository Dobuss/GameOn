import * as fetchData from './fetchData';
const baseUrl = 'http://localhost:3005';

export const getGames = async () => {
    return await fetchData.get(`${baseUrl}/games`);
}
export const saveGame = async (data) => {
    return await fetchData.post(`${baseUrl}/games`, data);
}

export const getGameDetails = async (gameId) => {
    const response = await fetchData.get(`${baseUrl}/games/${gameId}`);
    return response.game;
}

export const editGame = async (data) => {
    return await fetchData.put(`${baseUrl}/games/${data._id}`, data)
}

export const deleteGame = async(gameId) => {
    return await fetchData.remove(`${baseUrl}/games/${gameId}`)
}