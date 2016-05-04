import React from "react";
import Post from "./post";

import "./style.scss";

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            post: null
        };
    };

    componentDidMount() {
        if (!postId)
            return;

        fetch(ghost.url.api("posts/" + postId, { include: "author" })).then(function(result) {
            return result.json();
        }).then(function(json) {
            this.setState({
                post: this.createPost(json)
            })
        }.bind(this));
    };

    createPost(json) {
        var first = json.posts[0];
        return {
            url: first.url,
            permalink: document.documentURI + first.url.substring(1),
            title: first.title,
            content: first.html,
            authour: {
                image: first.author.image,
                name: first.author.name
            },
            date: first.created_at
        };
    };

    render() {
        var isSingle = postId !== undefined;
        if (isSingle)
            return this.renderSingle();
        return <div className="main">
            {this.props.posts.map((p, i) => <Post key={i} isSingle={postId !== undefined} post={p} />)}
        </div>;
    };

    renderSingle() {
        return this.state.post ? <Post isSingle={true} post={this.state.post} /> : <div></div>;
    };
};
