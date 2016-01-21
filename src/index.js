import React from "react";
import ReactDOM from "react-dom";

import Navigation from "./navigation";
import Header from "./header";

import "./mixins.scss";
import "./style.scss";

class Index extends React.Component {
    render() {
        return <div className="wrapper">
            <Navigation />
            <Header />
        </div>;
    }
}

ReactDOM.render(<Index />, document.querySelector("#site-container"));
