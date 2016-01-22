import React from "react";

import Ajax from "data/ajax";
import Cache from "data/cache";
import Config from "config";

import Repos from "./repos";

import "./style.scss";

let CACHE_KEY = "github-info";

export default class GitHub extends React.Component {
    constructor() {
        super();
        this.state = {
            repos: []
        };
    };

    render() {
        return <div className="sidebar-component github">
            <h3>GitHub</h3>
            <Repos repos={this.state.repos} />
        </div>;
    };

    componentDidMount() {
        this.getGitHubInfo().then((repos) => this.setState({ repos: repos }));
    };

    getGitHubInfo() {
        return Cache.get(CACHE_KEY) || Ajax.get(Config.serviceLocation + "github").then(function(repos) {
            Cache.set(CACHE_KEY, repos);
            return repos;
        });
    };
};
