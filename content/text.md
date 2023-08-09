## Text

A React component for displaying text which supports nesting, styling, and touch handling.

> Note: Text supports nesting, styling, and touch handling. Text content must be wrapped and placed inside a <Text> component. A text component inherits all text-related props (e.g., fontSize, fontFamily, etc.) that are set on the parent <Text> element, and all text-related props (e.g., color, fontWeight, etc.) that are set on the parent <Text> element are inherited by nested <Text> elements.

### Props

#### numberOfLines

Specifies how many lines of text are shown.

```js
<Text numberOfLines={1}>Hello, world!</Text>
```

#### userSelect

Specifies whether the text can be selected.

```js
<Text userSelect="none">Hello, world!</Text>
```
