import React, { useEffect } from "react";

type Props = {};

const ExportButton = (props: Props) => {
    const handleExportCreation = () => {
        console.log("test create export");
    };

    return (
        <button
            className="next-button | bg-slate-500 text-white rounded p-1 | hover:bg-slate-400"
            onClick={handleExportCreation}
        >
            Export
        </button>
    );
};

export default ExportButton;
