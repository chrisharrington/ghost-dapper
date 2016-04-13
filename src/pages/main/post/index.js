import React from "react";

import Tile from "components/tile";
import ShareButtons from "./share-buttons";

import "./style.scss";

export default class Post extends React.Component {
    render() {
        var post = this.props.post,
            isSingle = this.props.isSingle;

        return <Tile className={"main-post " + (isSingle ? "single" : "multiple")}>
            <h2 className="title">
                <a href={post.url}>{post.title}</a>
            </h2>
            <ShareButtons post={post} />
            <span className="authour">{`Written by ${post.authour.name} on ${post.date}`}</span>
            <div className="excerpt" dangerouslySetInnerHTML={{__html: post.content}}></div>
            <a className="read-more" href={post.url}>Read more <i className="fa fa-caret-right"></i></a>
        </Tile>;
    }
};
