import React from "react";

import "./style.scss";

export default class Logo extends React.Component {
    render() {
        return <div className="logo" onClick={this.props.onClick}>
            <span className="first">Dapper</span>
            <span className="last">Developer</span>
        </div>;
    }
};
