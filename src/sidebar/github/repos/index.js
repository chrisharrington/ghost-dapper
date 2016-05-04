import React from "react";

import Repo from "./repo";

import "./style.scss";

export default class Repos extends React.Component {
    render() {
        var repos = this.props.repos.slice(0, 5);
        return <div className="repos">
            {repos.map((repo, i) => <Repo key={i} repo={repo} />)}
        </div>;
    }
};
