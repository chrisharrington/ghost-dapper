import React from "react";

import Popup from "components/popup";
import config from "config.json";

import "./style.scss";

export default class ShareButtons extends React.Component {
    render() {
        return <div className="share-buttons">
            <div className="share-button twitter-button" onClick={this.twitter.bind(this)}>
                <i className="fa fa-twitter"></i>
            </div>
            <div className="share-button linkedin-button" onClick={this.linkedin.bind(this)}>
                <i className="fa fa-linkedin"></i>
            </div>
            <div className="share-button google-plus-button" onClick={this.googleplus.bind(this)}>
                <i className="fa fa-google-plus"></i>
            </div>
            <div className="share-button facebook-button" onClick={this.facebook.bind(this)}>
                <i className="fa fa-facebook"></i>
            </div>
        </div>;
    };

    event(label) {
        if (typeof(ga) !== "undefined")
            ga("send", "event", "social", label);
	};

	twitter() {
		this.event("twitter");
		Popup.centre("https://twitter.com/intent/tweet?text=" + this.props.post.title + " " + this.props.post.permalink + " via @charrington99", "twitter", {
			width: 600,
			height: 300
		});
	};

	facebook() {
		this.event("facebook");
		Popup.centre("https://www.facebook.com/dialog/share?app_id=" + config.facebookAppId + "&display=popup&href=" + this.props.post.permalink + "&redirect_uri=" + this.props.post.permalink, "facebook", {
			width: 600,
			height: 400
		});
	};

	googleplus() {
		this.event("googleplus");
		Popup.centre("https://plus.google.com/share?url=" + this.props.post.permalink, "googleplus", {
			width: 510,
			height: 420
		});
	};

	linkedin() {
		this.event("linkedin");
		Popup.centre("https://www.linkedin.com/cws/share?url=" + this.props.post.permalink, "linkedin", {
			width: 600,
			height: 400
		});
	};
};
