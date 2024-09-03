import {
  ComponentForgotPassword,
  ComponentHome,
  ComponentOTPVerify,
  ComponentResetPassword,
  ComponentSignIn,
  ComponentSignUp,
} from '../../module';

const routesLink = {
  HOME: 'home',
  SIGN_IN: 'sign-in',
  SIGN_Up: 'sign-up',
  OTP_VERIFY: 'otp-verify',
  FORGOT_PASSWORD: 'forgot-password',
  RESET_PASSWORD: 'reset-password',
};

const routes = [
  {
    name: routesLink.HOME,
    component: ComponentHome,
  },
  {
    name: routesLink.SIGN_IN,
    component: ComponentSignIn,
  },
  {
    name: routesLink.SIGN_Up,
    component: ComponentSignUp,
  },
  {
    name: routesLink.OTP_VERIFY,
    component: ComponentOTPVerify,
  },
  {
    name: routesLink.FORGOT_PASSWORD,
    component: ComponentForgotPassword,
  },
  {
    name: routesLink.RESET_PASSWORD,
    component: ComponentResetPassword,
  },
];


export default routes;
