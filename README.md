# react-native-ui-kit

This is a React Native reusable UI Kit. It contains 
- CustomButton
- CardView

## Installation

```sh
npm install react-native-ui-kit
```

## Usage


 Custom button has 5 button types available however you can customize button style and pass style in Props

```js
import CustomButton from 'rm-ui-widget';

 <CustomButton type={ButtonType.PRIMARY} onPress={onPrimaryPressHandler}>
		<Text>Primary Button</Text>
</CustomButton>

<CustomButton type={ButtonType.SECONDARY}>
	<Text>Secondary Button</Text>
</CustomButton>
```
## Customize button with custom style:
```js
export type Props = {
  children: React.ReactElement;
  onPress?: () => void;
  style?: ViewStyle;
  type?: ButtonType;
};
```
# CardView
```js
import CardView from 'rm-ui-widget';
<View style={styles.container}>
  <CardView />
</View>
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
