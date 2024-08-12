import { StackNavigationProp } from '@react-navigation/stack';

type RoutesLink = {
  home: undefined;
  'sign-in': undefined;
  'sign-up': undefined;
  'forgot-password': undefined;
  'reset-password': undefined;
  'otp-verify': undefined;
};

export interface ComponentSignInProps {
  navigation: StackNavigationProp<RoutesLink, 'sign-in'>;
}
export interface ComponentSignUpProps {
  navigation: StackNavigationProp<RoutesLink, 'sign-up'>;
}
export interface ComponentForgotPasswordProps {
  navigation: StackNavigationProp<RoutesLink, 'forgot-password'>;
}
export interface ComponentResetPasswordProps {
  navigation: StackNavigationProp<RoutesLink, 'reset-password'>;
}
export interface ComponentOTPSubmitProps {
  navigation: StackNavigationProp<RoutesLink, 'otp-verify'>;
}
export interface ComponentHomeProps {
  navigation: StackNavigationProp<RoutesLink, 'home'>;
}
