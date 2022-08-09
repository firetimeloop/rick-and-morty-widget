import {
    useCallback,
    useEffect,
    useState,
} from 'react';

function getWindowWidth() {
    const {innerWidth: width} = window;

    return width;
}

export default function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState<number>(getWindowWidth());

    const handleResize = useCallback(() => {
        setWindowWidth(getWindowWidth());
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    return windowWidth;
}
