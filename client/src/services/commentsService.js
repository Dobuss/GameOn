import * as fetchData from './fetchData';
const baseUrl = 'http://localhost:3005/games/comments';

export const createComment = async (data) => {
    return await fetchData.post(baseUrl, data);
}

export const getComments = async (gameId) => {
    const query = encodeURIComponent(`gameId="${gameId}"`)
    const result = await fetchData.get(`${baseUrl}?where=${query}`);
    const comments = Object.values(result);
    return comments;
}