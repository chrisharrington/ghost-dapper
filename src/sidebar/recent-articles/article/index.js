import React from "react";

import "./style.scss";

export default class Article extends React.Component {
    render() {
        var article = this.props.article;
        return <div className="article">
            <span className="title">{article.title}</span>
            <span className="authour">{article.authour.name} - {article.date}</span>
            <span className="excerpt">{article.excerpt}</span>
        </div>;
    }
};
