// src/Sidebar.js
import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div `
  width: 250px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
`;

const SidebarOption = styled.div `
  padding: 15px;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;

function Sidebar() {
    return ( <
        <
        SidebarContainer >

        SidebarOption > Home < /SidebarOption> <
        SidebarOption > Search < /SidebarOption> <
        SidebarOption > Your Library < /SidebarOption>   
        SidebarContainer / >
    );
}

export default Sidebar;