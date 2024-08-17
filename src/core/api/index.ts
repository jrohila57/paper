import {
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useSignInMutation,
  useSignOutMutation,
  useSignUpMutation,
} from './auth-api';

export const apis = {
  signIn: useSignInMutation,
  signOut: useSignOutMutation,
  signUp: useSignUpMutation,
  forgotPassword: useForgotPasswordMutation,
  resetPassword: useResetPasswordMutation,
};
