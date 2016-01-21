import React from "react";
import _ from "lodash";

import Tweet from "./tweet";

import "./style.scss";

export default class Tweets extends React.Component {
    render() {
        var tweets = _.take(this.props.tweets, 5);
        return <div className="tweets">
            {_.map(tweets, (tweet, i) => <Tweet key={i} tweet={tweet} />)}
        </div>;
    }
};
