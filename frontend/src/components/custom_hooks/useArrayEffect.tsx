import React, { useEffect, useRef } from "react";

const arrayEqual = (a1: any[], a2: any[]) => {
    if (a1.length !== a2.length) return false;
    for (let i = 0; i < a1.length; i++) {
        if (a1[i] !== a2[i]) {
            return false;
        }
    }
    return true;
};

type CleanUpFn = void | (() => void);

const useArrayEffect = (cb: () => CleanUpFn, deps: any[]) => {
    const ref = useRef<any[]>(deps);

    if (!arrayEqual(deps, ref.current)) {
        ref.current = deps;
    }

    useEffect(cb, [ref.current]);
};

export default useArrayEffect;
