import React from "react";
import _ from "lodash";

import Repo from "./repo";

import "./style.scss";

export default class Repos extends React.Component {
    render() {
        var repos = _.take(this.props.repos, 5);
        return <div className="repos">
            {_.map(repos, (repo, i) => <Repo key={i} repo={repo} />)}
        </div>;
    }
};
