import React from "react";

import LabelMaker from "./rf_components/LabelMaker";
import ExportButton from "./rf_components/ExportButton";

type labelsObj = {
    labelNames: string[];
    isLabelEditOpen: boolean[];
};

type Props = {
    labels: labelsObj;
    setLabels: React.Dispatch<React.SetStateAction<labelsObj>>;
    setSelectedLabel: React.Dispatch<React.SetStateAction<string>>;
};

const RightSidebar = ({ labels, setLabels, setSelectedLabel }: Props) => {
    return (
        <div className="left-sidebar | flex flex-col items-center | h-full">
            <div className="top | flex flex-col items-center | w-full">
                <LabelMaker
                    labels={labels}
                    setLabels={setLabels}
                    setSelectedLabel={setSelectedLabel}
                />
            </div>
            <div className="bottom | flex flex-col justify-end items-center | h-full">
                <ExportButton />
            </div>
        </div>
    );
};

export default RightSidebar;
