import React, { useEffect, useState } from "react";
import { useDeepCompareEffect } from "ahooks";
import _ from "lodash";
import Canvas from "../../custom_components/Canvas";
import { FileWithPreview } from "../../types/types";
import { Stage, Layer, Group, Image, Rect } from "react-konva";
import { Html } from "react-konva-utils";

interface Annotation {
    x: number;
    y: number;
    width: number;
    height: number;
    key: number;
}

interface AnnotationsForImage {
    annotationList: Annotation[];
    imageName: string;
}

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
    const [annotations, setAnnotations] = useState<AnnotationsForImage[]>([]);
    const [newAnnotation, setNewAnnotation] = useState<Annotation[]>([]);

    const handleMouseDown = (event: any) => {
        if (newAnnotation.length === 0) {
            const { x, y } = event.target.getStage().getPointerPosition();
            setNewAnnotation([{ x, y, width: 0, height: 0, key: 0 }]);
        }
    };

    const handleMouseUp = (event: any) => {
        if (newAnnotation.length === 1) {
            const sx = newAnnotation[0].x;
            const sy = newAnnotation[0].y;
            const { x, y } = event.target.getStage().getPointerPosition();
            const annotationToAdd: Annotation = {
                x: sx,
                y: sy,
                width: x - sx,
                height: y - sy,
                key: annotations.length + 1,
            };

            // let annotationList: Annotation[] = [];
            // if (annotations[imageIndex]) {
            //     annotationList = [...annotations[imageIndex].annotationList];
            //     annotationList.push(annotationToAdd);
            // } else {
            //     annotationList.push(annotationToAdd);
            // }

            let imagesLabels: AnnotationsForImage[] = _.cloneDeep(annotations);
            // let imagesLabels: AnnotationsForImage[] = [...annotations];
            imagesLabels[imageIndex].annotationList.push(annotationToAdd);

            // if (fileAtIndex != null) {
            //     imagesLabels[imageIndex].imageName = fileAtIndex.name;
            // } else {
            //     imagesLabels[imageIndex].imageName = "";
            // }
            // annotations.push(annotationToAdd);
            setNewAnnotation([]);
            setAnnotations(imagesLabels);
        }
    };
    console.log("anno list", annotations);

    const handleMouseMove = (event: any) => {
        if (newAnnotation.length === 1) {
            const sx = newAnnotation[0].x;
            const sy = newAnnotation[0].y;
            const { x, y } = event.target.getStage().getPointerPosition();
            setNewAnnotation([
                {
                    x: sx,
                    y: sy,
                    width: x - sx,
                    height: y - sy,
                    key: 0,
                },
            ]);
        }
    };

    useDeepCompareEffect(() => {
        let imagesLabels: AnnotationsForImage[] = [];
        filteredImageFiles.forEach((element: any) => {
            imagesLabels.push({
                annotationList: [],
                imageName: element.name,
            });
        });
        console.log("imagesLabels", imagesLabels);
        setAnnotations(imagesLabels);
    }, [filteredImageFiles]);

    const loadImage = () => {
        const image = new window.Image();
        image.src = fileAtIndex.preview;
        image.onload = () => {
            setImage(image);
        };
    };
    useDeepCompareEffect(() => {
        if (filteredImageFiles.length !== 0) {
            loadImage();
        }
    }, [imageIndex, filteredImageFiles]);

    let annotationsToDraw: any[] = [];
    if (fileAtIndex != null && annotations.length != 0) {
        // console.log("anno listlsdsa", annotations[imageIndex].annotationList);
        annotationsToDraw = [
            ...annotations[imageIndex].annotationList,
            ...newAnnotation,
        ];
    } else {
        annotationsToDraw = [...[], ...newAnnotation];
    }

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
                <div className="canvas-container | flex justify-center items-center">
                    <Stage
                        width={imageWidth}
                        height={imageHeight}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                    >
                        <Layer>
                            <Image image={image} />
                            {annotationsToDraw.map((value) => {
                                return (
                                    <Group x={value.x} y={value.y}>
                                        {/* <Html>
                                            <button>Delete</button>
                                        </Html> */}
                                        <Rect
                                            x={0}
                                            y={0}
                                            width={value.width}
                                            height={value.height}
                                            fill="transparent"
                                            stroke="black"
                                        />
                                    </Group>
                                );
                            })}
                        </Layer>
                    </Stage>
                </div>
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
