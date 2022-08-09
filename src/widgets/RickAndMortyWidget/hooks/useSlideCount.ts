import { useIsMobile, useIsTablet } from "./useIsDevice";
import { MOBILE_SLIDE_COUNT, DESKTOP_SLIDE_COUNT, TABLET_SLIDE_COUNT } from "./consts";

export default function useSlideCount() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  if (isMobile) {
    return MOBILE_SLIDE_COUNT;
  }

  if (isTablet) {
    return TABLET_SLIDE_COUNT;
  }

  return DESKTOP_SLIDE_COUNT;
}
