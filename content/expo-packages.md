# Expo Packages

## expo linear gradient

```js
<LinearGradient
  // Background Linear Gradient
  colors={["rgba(0,0,0,0.5)", "transparent"]}
  style={{
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  }}
/>
```

## expo status bar

```js
<StatusBar style="auto" />
```

## expo splash screen

```js
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

const [loaded] = useFonts({
  "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
  "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
});

if (!loaded) {
  return null;
}

const onLayoutRootView = React.useCallback(async () => {
  if (loaded) {
    await SplashScreen.hideAsync();
  }
}, [loaded]);

return (
  <View onLayout={onLayoutRootView}>
    <Text>Open up App.js to start working on your app!</Text>
  </View>
);
```

## expo fonts

```js
import { useFonts } from "expo-font";

const [loaded] = useFonts({
  "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
  "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
});
```

## expo google fonts

```js
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";

const [loaded] = useFonts({
  OpenSans_400Regular,
  OpenSans_700Bold,
});
```

## expo icons

```js
import { Ionicons } from "@expo/vector-icons";

<Ionicons name="ios-star" size={24} color="black" />;
```
