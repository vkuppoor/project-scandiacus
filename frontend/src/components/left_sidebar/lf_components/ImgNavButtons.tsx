import React, { useEffect, useRef } from "react";

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
    const arrayEqual = (a1: any[], a2: any[]) => {
        if (a1.length !== a2.length) return false;
        for (let i = 0; i < a1.length; i++) {
            if (a1[i] !== a2[i]) {
                return false;
            }
        }
        return true;
    };

    const listenKeyDown = () => {
        return () => {
            document.addEventListener("keydown", handleNextKey, true);
            document.addEventListener("keydown", handlePrevKey, true);

            return () => {
                document.removeEventListener("keydown", handleNextKey, true);
                document.removeEventListener("keydown", handlePrevKey, true);
            };
        };
    };

    const useStringArrayEffect = (deps: any[]) => {
        const ref = useRef<number[]>(deps);

        if (!arrayEqual(deps, ref.current)) {
            ref.current = deps;
        }

        useEffect(listenKeyDown(), [ref.current]);
    };

    useStringArrayEffect(filteredImageFiles);

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
