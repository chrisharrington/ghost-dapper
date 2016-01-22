import React from "react";
import FontAwesome from "react-fontawesome";
import moment from "moment";

import "./style.scss";

export default class Repo extends React.Component {
    render() {
        let repo = this.props.repo;
        return <div className="repo">
            <span className="name">{repo.name}</span>
            <span className="stars">{repo.starCount}</span>
            <FontAwesome name="star" />
            <a href={repo.url} className="sidebar-dark" target="_blank">{repo.url}</a>
        </div>;
    }
};
