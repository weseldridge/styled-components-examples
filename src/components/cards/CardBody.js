import React, { Component } from 'react';
import styled from "styled-components";

const CardBody = styled.section`
    width: auto;
    overflow: auto;
    clear: both;
    padding: 0.5rem 1rem;
    text-align: left;
    background-color: ${props => props.blue == true ? 'rgb(227, 236, 245)' : 'white'};
`;

export default CardBody;