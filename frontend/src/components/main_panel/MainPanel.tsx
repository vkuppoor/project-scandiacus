import React, { useEffect, useState } from "react";
import { useDeepCompareEffect } from "ahooks";
import Canvas from "../../custom_components/Canvas";
import { FileWithPreview } from "../../types/types";
import { Stage, Layer, Image } from "react-konva";
interface Props {
    files: any;
    setFiles: React.Dispatch<React.SetStateAction<any>>;
    imageFileTypes: string[];
    filteredImageFiles: any;
    imageIndex: number;
}
const MainPanel = ({
    files,
    setFiles,
    imageFileTypes,
    filteredImageFiles,
    imageIndex,
}: Props) => {
    const [image, setImage] = useState<CanvasImageSource>();
    const imageWidth = image?.width as number;
    const imageHeight = image?.height as number;
    const fileAtIndex: FileWithPreview = filteredImageFiles[imageIndex];

    // Link to draw annotations: https://codesandbox.io/s/react-konva-create-draw-rect-fw9hw?file=/src/index.js:160-269
    const [annotations, setAnnotations] = useState([]);
    const [newAnnotation, setNewAnnotation] = useState([]);

    useDeepCompareEffect(() => {
        if (filteredImageFiles.length !== 0) {
            loadImage();
        }
    }, [imageIndex, filteredImageFiles]);
    const loadImage = () => {
        const image = new window.Image();
        image.src = fileAtIndex.preview;
        image.onload = () => {
            setImage(image);
        };
    };
    // const imageAtIndex: HTMLImageElement = new Image();
    // let heightTemp = 100;
    // let widthTemp = 100;
    // if (filteredImageFiles.length !== 0) {
    //     imageAtIndex.src = fileAtIndex.preview;
    //     heightTemp = imageAtIndex.height;
    //     widthTemp = imageAtIndex.width;
    // }

    // const handleDrawCanvas = (ctx: CanvasRenderingContext2D) => {
    //     // imageAtIndex.onload = () => {
    //     if (ctx != null) {
    //         ctx.drawImage(imageAtIndex, 0, 0);
    //         ctx.fillStyle = "rgb(200, 0, 0)";
    //         ctx.fillRect(10, 10, 50, 50);

    //         ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    //         ctx.fillRect(30, 30, 50, 50);
    //     }
    //     // setCurrImageSrc(img.src);
    //     // setCount(count + 1);
    //     // console.log("src", currImageSrc);
    //     // console.log("count", count);
    //     // setCurrImage(img);
    //     // };
    // };

    return (
        <div className="main-panel | flex justify-center items-center | w-full h-screen">
            {filteredImageFiles.length !== 0 && image ? (
                // <div
                //     key={fileAtIndex.name}
                //     className="image-container |  flex justify-center items-center | w-full h-full"
                // >
                //     <img
                //         src={fileAtIndex.preview}
                //         className="image | my-1 h-full w-auto object-contain"
                //         alt=""
                //     />
                // </div>
                <Stage width={imageWidth} height={imageHeight}>
                    <Layer>
                        <Image image={image} />
                    </Layer>
                </Stage>
            ) : null}
            {/* <Canvas
                draw={handleDrawCanvas}
                height={heightTemp}
                width={widthTemp}
            /> */}
        </div>
    );
};

export default MainPanel;
