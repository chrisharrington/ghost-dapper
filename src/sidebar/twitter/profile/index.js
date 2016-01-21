import React from "react";

import "./style.scss";

export default class Profile extends React.Component {
    render() {
        var profile = this.props.profile;
        return <div className="twitter-profile">
            <img src={profile.image} alt="twitter-profile-image" />
            <div>
                <span className="name">{profile.name}</span>
                <br />
                <a className="screenName">{profile.screenName}</a>
            </div>
        </div>;
    }
};
