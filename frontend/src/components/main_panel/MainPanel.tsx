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

            let imagesLabels: AnnotationsForImage[] = _.cloneDeep(annotations);
            imagesLabels[imageIndex].annotationList.push(annotationToAdd);
            setNewAnnotation([]);
            setAnnotations(imagesLabels);
        }
    };

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
        annotationsToDraw = [
            ...annotations[imageIndex].annotationList,
            ...newAnnotation,
        ];
    } else {
        annotationsToDraw = [...[], ...newAnnotation];
    }

    return (
        <div className="main-panel | flex justify-center items-center | w-full h-screen">
            {filteredImageFiles.length !== 0 && image ? (
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
