import React, { Component } from 'react';
import styled from "styled-components";

const AppBar = styled.section`
    width: auto;
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : '#2196f3'}
`;

export default AppBar;