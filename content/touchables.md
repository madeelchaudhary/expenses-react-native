# Touchable Components

## TouchableHighlight

TouchableHighlight works by adding an extra view with a black background under the single child view. This works best with composited backgrounds, but can also be made to work with non-composited backgrounds.

```js
<TouchableHighlight onPress={() => console.log("Pressed!")}>
  <View style={{ width: 50, height: 50, backgroundColor: "powderblue" }} />
</TouchableHighlight>
```

### activeOpacity

Determines what the opacity of the wrapped view should be when touch is active. Defaults to 0.85.

```js
<TouchableHighlight activeOpacity={0.5} onPress={() => console.log("Pressed!")}>
  <View style={{ width: 50, height: 50, backgroundColor: "powderblue" }} />
</TouchableHighlight>
```

### underlayColor

The color of the underlay that will show through when the touch is active. Defaults to black.

```js
<TouchableHighlight underlayColor="red" onPress={() => console.log("Pressed!")}>
  <View style={{ width: 50, height: 50, backgroundColor: "powderblue" }} />
</TouchableHighlight>
```

## TouchableOpacity

TouchableOpacity works by adding an extra view with a semi-transparent background under the single child view. This works best with composited backgrounds, but can also be made to work with non-composited backgrounds by setting the underlayColor to a semi-transparent color.

```js
<TouchableOpacity onPress={() => console.log("Pressed!")}>
  <View style={{ width: 50, height: 50, backgroundColor: "powderblue" }} />
</TouchableOpacity>
```

### activeOpacity

Determines what the opacity of the wrapped view should be when touch is active. Defaults to 0.2.

```js
<TouchableOpacity activeOpacity={0.5} onPress={() => console.log("Pressed!")}>
  <View style={{ width: 50, height: 50, backgroundColor: "powderblue" }} />
</TouchableOpacity>
```

## TouchableWithoutFeedback

TouchableWithoutFeedback does not provide any visual feedback to the user when touched. It's just used to detect touches. It can therefore be useful if you want to build your own components such as buttons, or to build a custom wrapper around other components to make them "pressable".

```js
<TouchableWithoutFeedback onPress={() => console.log("Pressed!")}>
  <View style={{ width: 50, height: 50, backgroundColor: "powderblue" }} />
</TouchableWithoutFeedback>
```
