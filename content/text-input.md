## TextInput

A foundational component for inputting text into the app via a keyboard. Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.

### Props

#### autoCapitalize

Can tell TextInput to automatically capitalize certain characters.

```js
<TextInput autoCapitalize="none" />
```

#### autoCorrect

Can tell TextInput to automatically capitalize certain characters.

```js
<TextInput autoCorrect={false} />
```

#### autoFocus

If true, focuses the input on componentDidMount.

```js
<TextInput autoFocus={true} />
```

#### editable

If false, text is not editable. The default value is true.

```js
<TextInput editable={false} />
```

#### keyboardType

Determines which keyboard to open, e.g.numeric.

```js
<TextInput keyboardType="numeric" />
```

#### maxLength

Limits the maximum number of characters that can be entered. Use this instead of implementing the logic in JS to avoid flicker.

```js
<TextInput maxLength={5} />
```

#### multiline

If true, the text input can be multiple lines.

```js
<TextInput multiline={true} />
```

#### placeholder

The string that will be rendered before text input has been entered.

```js
<TextInput placeholder="Enter your name" />
```

#### placeholderTextColor

The text color of the placeholder string.

```js
<TextInput placeholderTextColor="red" />
```

#### secureTextEntry

If true, the text input obscures the text entered so that sensitive text like passwords stay secure. The default value is false. Does not work with multiline = true.

```js
<TextInput secureTextEntry={true} />
```

#### value

The value to show for the text input. TextInput is a controlled component, which means the native value will be forced to match this value prop if provided. For most uses this works great, but in some cases this may cause flickering - one common cause is preventing edits by keeping value the same. In addition to simply setting the same value, either set editable={false}, or set/update maxLength to prevent unwanted edits without flicker.

```js
<TextInput value="Hello, world!" />
```

#### onBlur

Callback that is called when the text input is blurred.

```js
<TextInput onBlur={() => console.log("TextInput blurred")} />
```

#### onChange

Callback that is called when the text input's text changes.

```js
<TextInput onChange={() => console.log("TextInput changed")} />
```

#### onChangeText

Callback that is called when the text input's text changes. Changed text is passed as an argument to the callback handler.

```js
<TextInput onChangeText={(text) => console.log(text)} />
```

#### onFocus

Callback that is called when the text input is focused.

```js
<TextInput onFocus={() => console.log("TextInput focused")} />
```

#### onKeyPress

Callback that is called when a key is pressed. This will be called with { nativeEvent: { key: keyValue } } where keyValue is 'Enter' or 'Backspace' for respective keys and the typed-in character otherwise including ' ' for space. Fires before onChange callbacks.

```js
<TextInput onKeyPress={(e) => console.log(e.nativeEvent.key)} />
```

#### onLayout

Invoked on mount and layout changes with {nativeEvent: { layout: {x, y, width, height}}}

```js
<TextInput onLayout={(e) => console.log(e.nativeEvent.layout)} />
```
