import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import theme from '../theme';

const styles = {
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  } satisfies StyleProp<ViewStyle>,
  actionContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  } satisfies StyleProp<ViewStyle>,
  mt16: {
    marginTop: 16,
  } satisfies StyleProp<ViewStyle>,
  fieldLabel: {
    marginBottom: 8,
    fontSize: 18,
    fontWeight: 'bold',
  } satisfies StyleProp<TextStyle>,
  title: {
    padding: 16,
    paddingBottom: 4,
    paddingTop: 14,
    fontSize: 32,
    fontWeight: 'bold',
  } satisfies StyleProp<TextStyle>,
  subTitle: {
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 18,
    fontWeight: 'semibold',
    color: theme.colors.backdrop,
  } satisfies StyleProp<TextStyle>,
  textField: {
    borderRadius: 10,
    padding: 2,
    paddingLeft: 4,
    borderBottom: 0,
  },
  errorColor: { color: 'red' },
  linkText: { color: 'blue', marginTop: 16 },
};

export default styles;
