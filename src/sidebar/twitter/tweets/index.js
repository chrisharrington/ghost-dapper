import React from "react";

import Tweet from "./tweet";

import "./style.scss";

export default class Tweets extends React.Component {
    render() {
        var tweets = this.props.tweets.slice(0, 5);
        return <div className="tweets">
            {tweets.map((tweet, i) => <Tweet key={i} tweet={tweet} />)}
        </div>;
    }
};
