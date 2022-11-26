import { useState } from "react";

export const useScrollIndicator = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);

    const onScrollHandler = (event: any) => {
        setScrollTop(event.target.scrollTop);
        setScrollHeight(event.target.scrollHeight);
        setClientHeight(event.target.clientHeight);
    };

    const getBoxShadow = () => {
        const isBottom = clientHeight === Math.trunc(scrollHeight - scrollTop);
        const isTop = scrollTop === 0;
        const isBetween =
            scrollTop > 0 &&
            clientHeight < Math.trunc(scrollHeight - scrollTop);

        let boxShadow = "none";
        const top = "border-t-2 border-solid border-slate-300";
        const bottom = "border-b-2 border-solid border-slate-300";

        if (isTop) {
            boxShadow = bottom;
        } else if (isBetween) {
            boxShadow = `${top} ${bottom}`;
            // boxShadow = `${top}, ${bottom}`;
        } else if (isBottom) {
            boxShadow = top;
        }
        return boxShadow;
    };

    return { boxShadow: getBoxShadow(), onScrollHandler };
};
