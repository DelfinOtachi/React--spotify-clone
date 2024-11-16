// src/App.js
import React, { useEffect, useState } from "react";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const _token = hash.access_token;

        if (_token) {
            setToken(_token);
            spotify.setAccessToken(_token);
        }
    }, []);

    return ( <
            div className = "app" > {!token ? < Login / > : < h1 > Welcome to Spotify Clone < /h1>}        {!token ? ( <
                Login / > ): ( <
                div style = {
                    { display: "flex" } } >
                <
                Sidebar / >
                <
                MainContent / >
                <
                /div>
            )
        } <
        /
    div > );
}

export default App;