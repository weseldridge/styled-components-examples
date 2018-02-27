
import React, { Component } from 'react';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ChipContainer = ({children}) => (<div><Container>{children}</Container></div>);


const Chip = styled(ChipContainer)`
    color: white;
    background-color: #c4c4c4;
    border-radius: 9999px;
    padding: 0.25rem 0.5rem;
    display: inline-block;
    color: black;
    font-size: 0.9rem;
    overflow: auto;
    clear: both;
`;

export default Chip;