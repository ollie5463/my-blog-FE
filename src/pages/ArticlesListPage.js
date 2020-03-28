import React from 'react';
// import { ThemeProvider } from 'styled-components';
// import theme from '../theme';
// import { Link } from 'react-router-dom';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';

const ArticlesListPage = () => (
    <>
        <h1>Articles</h1>
        <ArticlesList articles={articleContent}/>
    </>
)

export default ArticlesListPage;