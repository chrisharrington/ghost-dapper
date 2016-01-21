import React from "react";

import Ajax from "data/ajax";
import Config from "config";
import Cache from "data/cache";

import Profile from "./profile";

let CACHE_KEY = "twitter-info";

export default class Twitter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: [],
            profile: {}
        };
    };

    render() {
        return <div className="sidebar-component twitter">
            <h3>Twitter</h3>
            <Profile profile={this.state.profile} />
        </div>;
    };

    componentDidMount() {
        this.getTwitterInfo().then((info) => this.setState({ tweets: info.tweets, profile: info.profile }));
    };

    getTwitterInfo() {
        return Cache.get(CACHE_KEY) || Ajax.get(Config.serviceLocation + "twitter").then(function(info) {
            Cache.set(CACHE_KEY, info);
            return info;
        });
    };
};
