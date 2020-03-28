import React from 'react';
import styled from 'styled-components';
const Header = styled.header`
    background-color: blue;
    height: 150px;
    padding: 15px;
`
const HomePage = () => (
    <>
    <Header>
        <h1>Welcome to my blog</h1>
    </Header>
    <p>Welcome to my blog. I am an aspiring react developer</p>
    </>
)

export default HomePage;