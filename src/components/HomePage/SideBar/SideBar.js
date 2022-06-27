import React from "react";

// style
import "../../assets/stylesheets/style.css";

const SideBar = (props) => {
    return (
        <div className="ui tablet computer only four wide column">
            <div className="ui inverted middle aligned large selection very relaxed list">
                <div className="pl-1 item">
                    <i className="newspaper outline icon large"></i>
                    <div className="content">
                        <div className="header">Home</div>
                    </div>
                </div>
                <div className="pl-1 item">
                    <i className="compass outline icon large"></i>
                    <div className="content">
                        <div className="header">Explore</div>
                    </div>
                </div>
                <div className="pl-1 item">
                    <i class="play circle outline icon large"></i>
                    <div className="content">
                        <div className="header">Shorts</div>
                    </div>
                </div>
                <div className="pl-1 item">
                    <i class="user outline icon large"></i>
                    <div className="content">
                        <div className="header">Subscriptions</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;