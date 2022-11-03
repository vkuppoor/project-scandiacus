import React, { useState, useRef, useCallback, useEffect } from "react";
// import { useDeepCompareEffect } from "ahooks";
// import { FileWithPreview } from "../types/types";
// import { useCanvas } from "../../custom_hooks/useCanvas";

interface Props {
    draw: (arg1: CanvasRenderingContext2D) => void;
    height: number;
    width: number;
}

const Canvas = ({ draw, height, width }: Props) => {
    // const fileAtIndex: FileWithPreview = filteredImageFiles[imageIndex];
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    // const [currImageSrc, setCurrImageSrc] = useState<string>("");
    // const [count, setCount] = useState<number>(0);
    // const [currImage, setCurrImage] = useState<HTMLImageElement>();
    useEffect(() => {
        const context = canvasRef.current?.getContext("2d");
        if (context) {
            draw(context);
        }
    });

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

    // if (canvasRef != null && filteredImageFiles.length !== 0) {
    //     const imageFromFile: HTMLImageElement = new Image();
    //     imageFromFile.src = fileAtIndex.preview;
    //     const canvas: HTMLCanvasElement =
    //         canvasRef.current as HTMLCanvasElement;
    //     canvas.width = imageFromFile.width;
    //     canvas.height = imageFromFile.height;
    //     const context = canvas.getContext("2d");
    //     handleDrawCanvas(context, imageFromFile);
    // }
    // console.log("fileatindex", fileAtIndex);
    // useDeepCompareEffect(() => {
    //     // console.log("Component Rerenders");
    //     if (filteredImageFiles.length !== 0) {
    //         const imageFromFile: HTMLImageElement = new Image();
    //         imageFromFile.src = fileAtIndex.preview;
    //         // console.log("file preview", fileAtIndex.preview);
    //         const canvas: HTMLCanvasElement =
    //             canvasRef.current as HTMLCanvasElement;
    //         canvas.width = imageFromFile.width;
    //         canvas.height = imageFromFile.height;
    //         const context = canvas.getContext("2d");
    //         handleDrawCanvas(context, imageFromFile);
    //     }
    //     // console.log("fileatindex", fileAtIndex);
    // }, [imageIndex, filteredImageFiles]);

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
                width={width}
                height={height}
                className="canvas | my-1 h-full w-full object-contain"
            />
        </div>
    );
};

export default Canvas;
