import React from "react";
import moment from "moment";

import "./style.scss";

export default class Tweets extends React.Component {
    render() {
        var tweet = this.props.tweet;
        return <div className="tweet">
            <span className="content">{tweet.html}</span>
            <div className="counts">
                <div className="icon">
                    <i className="fa fa-retweet" />
                    <span className="count">{tweet.retweets}</span>
                </div>
                <div className="icon">
                    <i className="fa fa-heart" />
                    <span className="count">{tweet.favourites}</span>
                </div>
            </div>
            <div className="date sidebar-dark">{moment(tweet.date, "--- MMM DD HH:m:s Z YYYY").fromNow()}</div>
        </div>;
    };
};
