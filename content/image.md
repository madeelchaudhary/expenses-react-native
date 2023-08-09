## Image

A React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll.

### Props

#### source

The source prop identifies the image source, either a remote URL or a local file resource.

```js
<Image source={require("./my-icon.png")} />
```

#### resizeMode

Determines how to resize the image when the frame doesn't match the raw image dimensions.

```js
<Image
  source={{
    uri: "https://reactnative.dev/img/tiny_logo.png",
  }}
  style={{
    width: 50,
    height: 50,
    resizeMode: "stretch",
  }}
/>
```

#### onLoad

Invoked when load completes successfully.

```js
<Image
  source={{
    uri: "https://reactnative.dev/img/tiny_logo.png",
  }}
  onLoad={() => console.log("Image loaded!")}
/>
```

#### onError

Invoked on load error.

```js
<Image
  source={{
    uri: "https://reactnative.dev/img/tiny_logo.png",
  }}
  onError={() => console.log("Cannot load image")}
/>
```

#### blurRadius

The blurRadius property is used only with static image sources. It determines the blur radius of the image. This is an experimental feature and the API is subject to change in future.

```js
<Image
  source={require("./my-icon.png")}
  style={{ width: 50, height: 50 }}
  blurRadius={1}
/>
```

#### alt

A string that defines an alternative text description of the image, which will be read by the screen reader when the user interacts with it.

```js
<Image
  source={{
    uri: "https://reactnative.dev/img/tiny_logo.png",
  }}
  alt="React Native Logo"
/>
```

#### fadeDuration

Determines how long it takes for the image to fade in when it is loaded. Only supported on Android.

```js
<Image
  source={{
    uri: "https://reactnative.dev/img/tiny_logo.png",
  }}
  fadeDuration={1000}
/>
```

#### loadingIndicatorSource

Determines the mechanism to use when waiting for the image to load and display. Either a static resource or a reference to a local image.

```js
<Image
  source={{
    uri: "https://reactnative.dev/img/tiny_logo.png",
  }}
  loadingIndicatorSource={require("./my-icon.png")}
/>
```
