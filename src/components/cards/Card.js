import React, { Component } from 'react';
import styled from "styled-components";

const Card = styled.section`
    background-color: ${props => props.blue == true ? '' : 'white'};
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid #E0E0E0;
`;

export default Card;