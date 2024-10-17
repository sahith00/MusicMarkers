import { cache } from 'react'
import 'server-only'

const CLIENT_ID = '10f567eb1b4e4897b077ab7a76659352';
const CLIENT_SECRET = 'bf9e4d274f7646a6a5dca76425162c08';
const { MongoClient, ServerApiVersion } = require('mongodb');
 
export const preloadAccess = () => {
  void getAccessToken();

}
 
export const getAccessToken = async () => {
    const res = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    });
    const data = await res.json();
    return data['token_type'] + " " + data['access_token']
};

const credentials = '../../../X509-cert-1150119899486088671.pem'
const client = new MongoClient('mongodb+srv://musicmarkers.vpl09.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority&appName=MusicMarkers', {
    tlsCertificateKeyFile: credentials,
    serverApi: ServerApiVersion.v1
});


export const getArtistTest = async (access_token) => {
    const res = await fetch('https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb', {
        method: 'GET',
        headers: {
          'Authorization': access_token,
        }
    });
    const data = await res.json();
    return data['name'];
}