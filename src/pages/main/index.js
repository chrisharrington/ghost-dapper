import React from "react";
import Post from "./post";

import "./style.scss";

export default class Main extends React.Component {
    render() {
        return <div className="main">
            {_.map(this.props.posts, (p, i) => <Post key={i} isSingle={this.props.posts.length === 1} post={p} />)}
        </div>;
    }
};
