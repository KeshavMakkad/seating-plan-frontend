import { useState } from "react";

export const useBlurEffect = () => {
    const [showBlur, setShowBlur] = useState(false);

    const triggerBlurEffect = (callback: () => void) => {
        setShowBlur(true);
        setTimeout(() => {
            callback();
        }, 150);
        setTimeout(() => {
            setShowBlur(false);
        }, 500);
    };

    return { showBlur, triggerBlurEffect };
};
