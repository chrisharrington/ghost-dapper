import React from "react";

import "./style.scss";

export default class SocialMediaBUttons extends React.Component {
    render() {
        return <div className="social-media-buttons">
            <a href="http://twitter.com/charrington99" target="_blank">
                <i className="fa fa-twitter" />
            </a>
            <a href="https://ca.linkedin.com/in/chrisharrington99" target="_blank">
                <i className="fa fa-linkedin" />
            </a>
            <a href="https://github.com/chrisharrington" target="_blank">
                <i className="fa fa-github" />
            </a>
        </div>;
    }
};
