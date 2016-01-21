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
                <a className="screenName" href={"http://twitter.com/" + profile.screenName} target="_blank">{profile.screenName}</a>
            </div>
        </div>;
    }
};
