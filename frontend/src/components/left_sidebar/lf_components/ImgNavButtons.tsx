import React, { useEffect } from "react";

interface Props {
    filteredImageFiles: any;
    imageIndex: number;
    setImageIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ImgNavButtons = ({
    filteredImageFiles,
    imageIndex,
    setImageIndex,
}: Props) => {
    const handleNext = () => {
        if (imageIndex < filteredImageFiles.length - 1) {
            setImageIndex(++imageIndex);
        }
    };

    const handlePrev = () => {
        if (imageIndex !== 0) {
            setImageIndex(--imageIndex);
        }
    };

    console.log("imageIndex", imageIndex);

    return (
        <div className="nav-button-container | flex gap-x-1 justify-between | bg-white h-40 w-4/5 p-2 rounded">
            <button
                className="prev-button | grow |  bg-slate-200 rounded p-2"
                onClick={handlePrev}
            >
                Prev
            </button>
            <button
                className="next-button | grow | bg-slate-200 rounded p-2"
                onClick={handleNext}
            >
                Next
            </button>
        </div>
    );
};

export default ImgNavButtons;
