import React from "react";

const LogIn = () => {
    const connectToSpotify = () => {
        var client_id = '2817e8fd2b2a4c9b839e3f6d600fe041';
        var redirect_uri = 'localhost:3000';

        var url = 'https://accounts.spotify.com/authorize';
        url += '?response_type=token';
        url += '&client_id=' + encodeURIComponent(client_id);
        url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
        console.log(url);
        fetch(url)
        .then(
            response => {
                console.log(response);
            },
            rejection => {
                console.error(rejection.message);
            }
        );
    }
    return (
        <button onClick={connectToSpotify}>Connect to Spotify</button>
    )
}

export default LogIn;



// import React from "react";

// const LogIn = () => {
//     const connectToSpotify = () => {
//         const clientId = "2817e8fd2b2a4c9b839e3f6d600fe041";
//         const redirectUri = "http://localhost:3000"; // Ensure this matches your registered redirect URI

//         const url = 'https://accounts.spotify.com/authorize';
//         const responseType = 'code'; // Use 'code' for Authorization Code Flow
//         const scope = 'user-read-private user-read-email'; // Add required scopes
        
//         const queryParams = new URLSearchParams({
//             response_type: responseType,
//             client_id: clientId,
//             redirect_uri: redirectUri,
//             scope: scope,
//         }).toString();

//         const authUrl = `${url}?${queryParams}`;

//         fetch(authUrl)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Failed to connect to Spotify');
//             }
//             return response.json();
//         })
//         .then(data => console.log(data))
//         .catch(error => {
//             console.error('Error connecting to Spotify:', error.message);
//         });
//     }

//     return (
//         <button onClick={connectToSpotify}>Connect to Spotify</button>
//     );
// }

// export default LogIn;
