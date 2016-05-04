import React from "react";

import moment from "moment";

import "./style.scss";

export default class Article extends React.Component {
    render() {
        var article = this.props.article;
        return <div className="article sidebar-selectable" onClick={this.navigate.bind(this)}>
            <span className="title">{article.title}</span>
            <span className="excerpt">{article.excerpt}</span>
            <div className="authour-info sidebar-dark">
                <span className="date">{moment(article.date, "DD MMMM YYYY").fromNow()}</span>
                <span className="name">{article.authour.name}</span>
            </div>
        </div>;
    };

    navigate() {
        window.location.href = this.props.article.url;
    };
};
