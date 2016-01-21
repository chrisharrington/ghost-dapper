import React from "react";
import _ from "lodash";

import Article from "./article";

import "./style.scss";

export default class RecentArticles extends React.Component {
    render() {
        return <div className="recent-articles">
            {_.map(posts, (post, i) => <Article key={i} article={post} />)}
        </div>;
    }
};
