let accessToken;
let expiresIn;
const clientID = '2817e8fd2b2a4c9b839e3f6d600fe041'
const redirectURI = 'http://localhost:3000'

const Spotify = {
    getAccessToken() {
        if (accessToken) return accessToken;

        // extract access token from URL
        const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
        // extract expiry time from URL
        const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

        if (tokenInURL && expiryTime) {
            accessToken = tokenInURL[1];
            expiresIn = Number(expiryTime[1]);

            window.setTimeout(() => (accessToken = ''), expiresIn * 1000)

            window.history.pushState('Acess token', null, '/');
            return accessToken;
        }

        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
        window.location = redirect;
    },
}


export {Spotify};