import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Li = styled.li`
    display: inline-block;
    padding: 10px;
    border-radius: 5px;
    border: 10px;
    background-color: black;
    color: purple;
    margin: 5px;
    &:hover{
        color-adjust: white;
    }
    `
const NavBar = () => (
    <nav>
        <ul>
            <Li>
                <Link to="/">Home</Link>
            </Li>
            <Li>
                <Link to="/about">About</Link>
            </Li>
            <Li>
                <Link to="/articles-list">Articles</Link>
            </Li>
        </ul>
    </nav>
);

export default NavBar;