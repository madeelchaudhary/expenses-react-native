# RN Components and Useful Props

## View

View is the most fundamental component for building a UI. It is a container that supports layout with flexbox, style, some touch handling, and accessibility controls. View maps directly to the native view equivalent on whatever platform React Native is running on, whether that is a UIView, <div>, android.view, etc.

## Some Abstract Props

### style

The style prop can be a plain old JavaScript object. That's the simplest and what we usually use for example code. You can also pass an array of styles - the last style in the array has precedence, so you can use this to inherit styles.

```js
<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
<View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
<View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
```

### flex

When flex is a positive number, it makes the component flexible and it will be sized proportional to its flex value. So a component with flex set to 2 will take twice the space as a component with flex set to 1.

```js
<View style={{ flex: 1 }}>
  <View style={{ flex: 1, backgroundColor: "powderblue" }} />
  <View style={{ flex: 2, backgroundColor: "skyblue" }} />
  <View style={{ flex: 3, backgroundColor: "steelblue" }} />
</View>
```

### id

The id prop is a string that you can use to identify your component in the UI tree. It can be useful for end-to-end testing of your apps.

```js
<View
  id="foo"
  style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
/>
```

### testID

The testID prop is used to locate this view in end-to-end tests.

```js
<View
  testID="foo"
  style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
/>
```

### nativeID

The nativeID prop can be used to obtain the ref or find the native dom element.

```js
<View
  nativeID="foo"
  style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
/>
```

### onLayout

The onLayout prop can be used to measure the view's onLayout event.

```js
<View
  onLayout={(event) => {
    const { x, y, width, height } = event.nativeEvent.layout;
  }}
  style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
/>
```

### accessibilityLabel

The accessibilityLabel prop is used to provide an accessible label for an element. This label will be read by the screen reader when the user taps the element.

```js
<View accessibilityLabel="I am an accessible view." />
```

### accessibilityHint

The accessibilityHint prop is used to provide an additional description for screen reader users.

```js
<View accessibilityHint="I am an accessible hint." />
```

### accessibilityRole

The accessibilityRole prop is used to override the default (or inferred) role for an accessible element.

```js
<View accessibilityRole="button" />
```
