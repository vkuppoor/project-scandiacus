import React, { useState, useEffect, useRef } from "react";

export interface coordinateObj {
    x: number;
    y: number;
}

// Path2D for a Heart SVG
const heartSVG =
    "M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z";
const SVG_PATH = new Path2D(heartSVG);

// Scaling Constants for Canvas
const SCALE = 0.1;
const OFFSET = 80;

export function draw(
    ctx: CanvasRenderingContext2D | null,
    location: coordinateObj,
    img: HTMLImageElement | undefined
) {
    if (ctx !== null && img !== undefined) {
        console.log("attempting to draw");
        ctx.drawImage(img, location.x, location.y);
        //   ctx.fillStyle = 'red';
        //   ctx.shadowColor = 'blue';
        //   ctx.shadowBlur = 15;
        //   ctx.save();
        //   ctx.scale(SCALE, SCALE);
        //   ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET);
        //   ctx.rotate(225 * Math.PI / 180);
        //   ctx.fill(SVG_PATH);
        // .restore(): Canvas 2D API restores the most recently saved canvas state
        //   ctx.restore();
    }
}

export const useCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [coordinates, setCoordinates] = useState<coordinateObj[]>([]);
    const [canvasWidth, setCanvasWidth] = useState<number>(
        window.innerWidth * 0.5
    );
    const [canvasHeight, setCanvasHeight] = useState<number>(
        window.innerHeight * 0.5
    );
    const [img, setImg] = useState<HTMLImageElement>();

    useEffect(() => {
        const canvasObj: HTMLCanvasElement =
            canvasRef.current as HTMLCanvasElement;
        const ctx = canvasObj.getContext("2d");
        // clear the canvas area before rendering the coordinates held in state
        if (ctx != null) {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        }

        // draw all coordinates held in state
        coordinates.forEach((coordinate) => {
            draw(ctx, coordinate, img);
        });
    }, [img]);

    return [
        coordinates,
        setCoordinates,
        canvasRef,
        canvasWidth,
        setCanvasWidth,
        canvasHeight,
        setCanvasHeight,
    ];
};
