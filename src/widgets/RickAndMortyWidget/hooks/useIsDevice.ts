import useWindowWidth from './useWindowWidth';

export const useIsMobile = () => {
    const width = useWindowWidth();

    return width < 576;
};

export const useIsTablet = () => {
    const width = useWindowWidth();

    return width < 1024;
};
