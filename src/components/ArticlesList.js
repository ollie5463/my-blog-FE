import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const H3 = styled.h3`
//     font-size: ${((props) => {
//         if (props.otherArticles) {
//             return '5px'
//         } else {
//             return '50px'
//     } }) }
// `


const ArticlesList = ({ articles }) => (
    <>
    <h1>Articles List</h1>
        {articles.map((article, key) => (
            <Link key={key} to={`/article/${article.name}`}>
                <h3>{article.title}</h3>
            </Link>
    ))}
    </>
)

export default ArticlesList;