import React from "react";

import "./style.scss";

export default class ShareButtons extends React.Component {
    render() {
        return <div className="share-buttons">
            <div className="share-button twitter-button">
                <i className="fa fa-twitter"></i>
            </div>
            <div className="share-button linkedin-button">
                <i className="fa fa-linkedin"></i>
            </div>
            <div className="share-button google-plus-button">
                <i className="fa fa-google-plus"></i>
            </div>
            <div className="share-button facebook-button">
                <i className="fa fa-facebook"></i>
            </div>
            <div className="share-button reddit-button">
                <i className="fa fa-reddit-alien"></i>
            </div>
        </div>;
    }
};
