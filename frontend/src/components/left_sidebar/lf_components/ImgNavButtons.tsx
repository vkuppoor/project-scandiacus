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
    useEffect(() => {
        document.addEventListener("keydown", handleNextKey, true);
        document.addEventListener("keydown", handlePrevKey, true);

        return () => {
            document.removeEventListener("keydown", handleNextKey, true);
            document.removeEventListener("keydown", handlePrevKey, true);
        };
    }, [filteredImageFiles]);

    const handleNext = () => {
        if (imageIndex < filteredImageFiles.length - 1) {
            setImageIndex(++imageIndex);
        }
    };

    const handleNextKey = (event: any) => {
        if (event.code === "ArrowRight") {
            console.log("Next Key Code", event.code);
            handleNext();
        }
    };

    const handlePrev = () => {
        if (imageIndex !== 0) {
            setImageIndex(--imageIndex);
        }
    };

    const handlePrevKey = (event: any) => {
        if (event.code === "ArrowLeft") {
            handlePrev();
        }
    };

    console.log("imageIndex", imageIndex);

    return (
        <div className="nav-button-container | flex gap-0 | bg-white h-20 w-full">
            <button
                className="prev-button | grow |  bg-slate-500 text-white | hover:bg-blue-400"
                onClick={handlePrev}
            >
                Prev
            </button>
            <button
                className="next-button | grow | bg-slate-500 text-white | hover:bg-slate-400"
                onClick={handleNext}
            >
                Next
            </button>
        </div>
    );
};

export default ImgNavButtons;
