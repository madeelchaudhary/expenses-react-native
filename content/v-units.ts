import { useWindowDimensions } from "react-native";

function useVUnits() {
  const { width, height } = useWindowDimensions();
  const vw = width / 100;
  const vh = height / 100;
  const vmin = Math.min(vw, vh);
  const vmax = Math.max(vw, vh);
  return { vw, vh, vmin, vmax };
}

export default useVUnits;
