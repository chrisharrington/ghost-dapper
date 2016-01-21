import React from "react";
import RecentArticles from "./recent-articles";

import "./style.scss";

export default class Navigation extends React.Component {
    render() {
        return <nav>
            <RecentArticles />
        </nav>;
    }
};
