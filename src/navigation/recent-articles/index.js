import React from "react";
import _ from "lodash";

import Article from "./article";

import "./style.scss";

export default class RecentArticles extends React.Component {
    render() {
        return <div className="sidebar-component recent-articles">
            <h3>Recent Articles</h3>
            {_.map(posts, (post, i) => <Article key={i} article={post} />)}
        </div>;
    }
};
