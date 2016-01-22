import React from "react";
import RecentArticles from "./recent-articles";
import Twitter from "./twitter";
import GitHub from "./github";

import "./style.scss";

export default class Sidebar extends React.Component {
    render() {
        return <nav className="sidebar-light">
            <RecentArticles />
            <Twitter />
            <GitHub />
        </nav>;
    }
};
