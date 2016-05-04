import React from "react";

import Article from "./article";

import "./style.scss";

export default class RecentArticles extends React.Component {
    render() {
        var topFivePosts = posts.slice(0, 5);
        return <div className="sidebar-component recent-articles">
            <h3>Recent Articles</h3>
            {topFivePosts.map((post, i) => <Article key={i} article={post} />)}
        </div>;
    }
};
