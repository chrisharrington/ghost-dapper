import React from "react";
import ReactDOM from "react-dom";

import Sidebar from "./sidebar";
import Header from "./header";

import "./mixins.scss";
import "./style.scss";

class Index extends React.Component {
    render() {
        return <div className="wrapper">
            <Sidebar />
            <main>
                <Header />
            </main>
        </div>;
    }
}

ReactDOM.render(<Index />, document.querySelector("#site-container"));
