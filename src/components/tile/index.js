import React from "react";

import "./style.scss";

export default class Tile extends React.Component {
    render() {
        var className = this.props.className;
        return <div className={"tile" + (className ? ` ${className}` : "")}>
            {this.props.children}
        </div>;
    }
};
