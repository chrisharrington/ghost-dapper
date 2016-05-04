import React from "react";
import ReactDOM from "react-dom";

import Sidebar from "./sidebar";
import Header from "./header";

import Main from "./pages/main";

import "whatwg-fetch";

import "./mixins.scss";
import "./style.scss";

class Index extends React.Component {
    render() {
        return <div className="wrapper">
            <Header />
            <Sidebar />
            <main>
                {posts.length > 0 ? <Main posts={posts} /> : <Main posts={posts} />}
            </main>
        </div>;
    }
}

ReactDOM.render(<Index />, document.querySelector("#site-container"));
