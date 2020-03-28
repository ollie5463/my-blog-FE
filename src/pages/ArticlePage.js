import React from 'react';
import articleConent from './article-content';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleConent.find(article => article.name === name);
    if (!article) return <NotFoundPage/>
    const otherArticles = articleConent.filter(article => article.name !== name)
    return(
            <>
                <h1>{article.name}</h1>
            {article.content.map((content, key) => <p key={key}>{content}</p>)}
            <h3>Other articles</h3>
            <ArticlesList articles={otherArticles} />
            </>
    )
}

export default ArticlePage;