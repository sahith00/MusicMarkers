const { MongoClient, ServerApiVersion } = require('mongodb');

const credentials = '../../../X509-cert-1150119899486088671.pem'
const client = new MongoClient('mongodb+srv://musicmarkers.vpl09.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority&appName=MusicMarkers', {
    tlsCertificateKeyFile: credentials,
    serverApi: ServerApiVersion.v1
});