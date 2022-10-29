import React, { useState, useRef } from "react";
import { useDeepCompareEffect } from "ahooks";
import { FileWithPreview } from "../../../types/types";
// import { useCanvas } from "../../custom_hooks/useCanvas";

interface Props {
    filteredImageFiles: any;
    imageIndex: number;
}

const Canvas = ({ filteredImageFiles, imageIndex }: Props) => {
    const fileAtIndex: FileWithPreview = filteredImageFiles[imageIndex];
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [currImage, setCurrImage] = useState<HTMLImageElement>();

    // const fillCanvas = (img: HTMLImageElement) => {
    //     console.log("reached");
    //     const canvas: HTMLCanvasElement =
    //         canvasRef.current as HTMLCanvasElement;
    //     const ctx = canvas.getContext("2d");

    //     canvas.width = img.width;
    //     canvas.height = img.height;

    //     img.onload = () => {
    //         if (ctx != null) {
    //             ctx.drawImage(img, 0, 0);
    //         }
    //     };
    // };
    const handleDrawCanvas = (
        ctx: CanvasRenderingContext2D | null,
        img: HTMLImageElement
    ) => {
        // img.onload = () => {
        if (ctx != null) {
            ctx.drawImage(img, 0, 0);
        }
        setCurrImage(img);
        // };
    };

    useDeepCompareEffect(() => {
        console.log("Component Rerenders");
        if (filteredImageFiles.length !== 0) {
            const imageFromFile: HTMLImageElement = new Image();
            imageFromFile.src = fileAtIndex.preview;
            console.log("file preview", fileAtIndex.preview);
            const canvas: HTMLCanvasElement =
                canvasRef.current as HTMLCanvasElement;
            canvas.width = imageFromFile.width;
            canvas.height = imageFromFile.height;
            const context = canvas.getContext("2d");
            handleDrawCanvas(context, imageFromFile);
            // fillCanvas(imageFromFile);
        }
        console.log("fileatindex", fileAtIndex);
    }, [imageIndex, handleDrawCanvas]);

    // fillCanvas(imageAtIndex);
    return (
        <div className="canvas-container | flex justify-center items-center w-4/5 h-4/5">
            {/* {filteredImageFiles.length !== 0 ? (
                <div
                    key={fileAtIndex.name}
                    className="image-container |  flex justify-center items-center | w-full h-full"
                >
                    <img
                        src={fileAtIndex.preview}
                        className="image | my-1 h-full w-auto object-contain"
                        alt=""
                    />
                </div>
            ) : null} */}
            <canvas
                ref={canvasRef}
                className="canvas | my-1 h-full w-full object-contain"
            />
        </div>
    );
};

export default Canvas;
