import React from "react";
import FontAwesome from "react-fontawesome";

import "./style.scss";

export default class SocialMediaBUttons extends React.Component {
    render() {
        return <div className="social-media-buttons">
            <a href="http://twitter.com/charrington99" target="_blank">
                <FontAwesome name="twitter" />
            </a>
            <a href="https://ca.linkedin.com/in/chrisharrington99" target="_blank">
                <FontAwesome name="linkedin" />
            </a>
            <a href="https://github.com/chrisharrington" target="_blank">
                <FontAwesome name="github" />
            </a>
        </div>;
    }
};
