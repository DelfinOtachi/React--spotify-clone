// src/MainContent.js
import React from "react";
import styled from "styled-components";

const MainContentContainer = styled.div `
  flex: 1;
  padding: 20px;
`;

function MainContent() {
    return ( <
        MainContentContainer >
        <
        h1 > Main Content < /h1> <
        /MainContentContainer>
    );
}

export default MainContent;