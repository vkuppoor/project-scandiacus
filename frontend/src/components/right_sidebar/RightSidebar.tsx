import React from "react";

import LabelMaker from "./rf_components/LabelMaker";

type Props = {};

const RightSidebar = (props: Props) => {
    return (
        <div className="left-sidebar | flex flex-col">
            <div className="top | flex flex-col justify-around">
                <LabelMaker />
            </div>
            <div className="bottom | flex flex-col justify-end items-center"></div>
        </div>
    );
};

export default RightSidebar;
