const fetchData = async () => {
    var token = 'BQBCWw9v3MCXADpp0D2RZwSp2U4Wvj1Io2PVHZXbK5F06kuYrtqF1V0XQ9Flh_VPYFqdwwf80hY3IY2FydVe3GhhR1aIGmH1LVWtjxd8I_LO4CxBp6vZpS0gjHiyh6O9m5vvZIqUJLcbnr9u1H0W5rIElT3rJc6QA0sXIzR5DwX-RHtjkG7U5B1CLYUeaBfiRbk'
    const response = await fetch("https://api.spotify.com/v1/users/31r4a3wipkhcvccles5sodupjqnq/playlists", {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
const data = await response.json();
console.log(data.items[0].name);
}


// fetchData();


const fetchToken = async () => {
    var token = 'BQBCWw9v3MCXADpp0D2RZwSp2U4Wvj1Io2PVHZXbK5F06kuYrtqF1V0XQ9Flh_VPYFqdwwf80hY3IY2FydVe3GhhR1aIGmH1LVWtjxd8I_LO4CxBp6vZpS0gjHiyh6O9m5vvZIqUJLcbnr9u1H0W5rIElT3rJc6QA0sXIzR5DwX-RHtjkG7U5B1CLYUeaBfiRbk'
    const response = await fetch("https://accounts.spotify.com/authorize?response_type=token&client_id=2817e8fd2b2a4c9b839e3f6d600fe041&redirect_uri=localhost%3A3000");
const data = await response.json();
console.log(data);
}

fetchToken();