import React from "react";
import YoutubeLogo from "../assets/imgs/logo-yt.png";

const Header = ({ handleOnChangeSearch, handleSubmit, handleSelectLogo }) => {
    return (
        <div className="ui large menu inverted fluid fr-border no-m bb sticky-header">
            <img
                className="ui image ml-1 logo"
                src={YoutubeLogo}
                alt="Youtube Logo"
                width={130}
                height={72}
                onClick={handleSelectLogo}
            />
            <div className="ui fluid category search item">
                <div className="ui transparent inverted icon input">
                    <input
                        className="prompt"
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => handleOnChangeSearch(e)}
                    />
                    <i
                        className="search link icon"
                        onClick={(e) => handleSubmit(e)}
                    ></i>
                </div>
            </div>
        </div>
    );
};

export default Header;
