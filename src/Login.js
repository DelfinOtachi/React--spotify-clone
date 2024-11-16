// src/Login.js
import React from "react";
import { loginUrl } from "./spotify";
import styled from "styled-components";

const LoginContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1db954;
`;

const LoginButton = styled.a `
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background-color: black;
  border-radius: 50px;
  text-decoration: none;
`;

function Login() {
    return ( <
        LoginContainer >
        <
        LoginButton href = { loginUrl } > Login with Spotify < /LoginButton> <
        /LoginContainer>
    );
}

export default Login;