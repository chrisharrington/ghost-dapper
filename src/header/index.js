import React from "react";

import Logo from "./logo";
import SocialMediaButtons from "./social-media-buttons";

import "./style.scss";

export default class Header extends React.Component {
    render() {
        return <header>
            <Logo onClick={this.navigateHome.bind(this)} />
            <SocialMediaButtons />
        </header>;
    };

    navigateHome() {
        window.location.href = "/";
    }
};
