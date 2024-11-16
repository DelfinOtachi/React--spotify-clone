// src/spotify.js
export const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "1442c03f5b704c8cafa7eece0d2d728b"; // Replace with your Client ID
const redirectUri = "http://localhost:3000/"; // Make sure it matches your Spotify redirect URI
const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state",
    "playlist-read-private",
    "user-library-read",
    "user-top-read",
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;