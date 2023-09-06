import { useEffect, useState } from "react"

function useScrollPosition () {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
        };
        window.addEventListener("scroll", updatePosition);
        updatePosition();
        return() => window.removeEventListener("scroll", updatePosition);
    }, []);
    return useScrollPosition;
}

export default useScrollPosition;