import { StackNavigationProp } from '@react-navigation/stack';

type AuthStackParamList = {
  'sign-in': undefined;
  'sign-up': undefined;
  'forgot-password': undefined;
  'reset-password': undefined;
  'otp-verify': undefined;
};

export interface ComponentSignInProps {
  navigation: StackNavigationProp<AuthStackParamList, 'sign-in'>;
}
export interface ComponentSignUpProps {
  navigation: StackNavigationProp<AuthStackParamList, 'sign-up'>;
}
export interface ComponentForgotPasswordProps {
  navigation: StackNavigationProp<AuthStackParamList, 'forgot-password'>;
}
export interface ComponentResetPasswordProps {
  navigation: StackNavigationProp<AuthStackParamList, 'reset-password'>;
}
export interface ComponentOTPSubmitProps {
  navigation: StackNavigationProp<AuthStackParamList, 'otp-verify'>;
}
