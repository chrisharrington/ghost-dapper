import React from "react";

import "./style.scss";

export default class Repo extends React.Component {
    render() {
        let repo = this.props.repo;
        return <div className="repo">
            <span className="name">{repo.name}</span>
            <span className="stars">{repo.starCount}</span>
            <i className="fa fa-start" />
            <a href={repo.url} className="sidebar-dark" target="_blank">{repo.url}</a>
        </div>;
    }
};
