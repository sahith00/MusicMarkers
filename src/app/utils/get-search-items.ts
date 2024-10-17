import 'server-only'

const TYPES_TO_SEARCH = 'track'

export const getSearchItems = async (access_token, searchQuery) => {
    if (searchQuery === "" || searchQuery === undefined) return undefined;

    const res = await fetch(`https://api.spotify.com/v1/search?q=${searchQuery}&type=${TYPES_TO_SEARCH}`, {
        method: 'GET',
        headers: {
          'Authorization': access_token
        }
    });
    const data = await res.json();
    await console.log(data);
    return data['tracks'];
}