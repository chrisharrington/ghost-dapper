import React from "react";
import RecentArticles from "./recent-articles";
import Twitter from "./twitter";

import "./style.scss";

export default class Sidebar extends React.Component {
    render() {
        return <nav className="sidebar-light">
            <Twitter />
            <RecentArticles />
        </nav>;
    }
};
