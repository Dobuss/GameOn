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

export const editGame = async (game) => {
    return await fetchData.put(`${baseUrl}/games/${game._id}`, game)
}

export const deleteGame = async(gameId) => {
    return await fetchData.remove(`${baseUrl}/games/${gameId}`)
}

export const likeGame = async(gameId, data) => {
    return await fetchData.patch(`${baseUrl}/games/${gameId}`, data);
}

export const getMyGames = async(ownerId) => {
    const allGames =  await fetchData.get(`${baseUrl}/games`);
    const myGames = allGames.filter(g => g.owner === ownerId);
    return myGames;
}