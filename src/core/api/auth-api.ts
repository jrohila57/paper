import { createApi } from '@reduxjs/toolkit/query/react';
import createApiConfig from '../hooks/useApiConfig';
import { AuthQuery, AuthResponse, ForgotPasswordQuery, ResetPasswordQuery } from '../../resources/types';
import { apiUrls } from '../../resources/configs/urls';

const { baseQuery, headers, reducerPath, tagTypes } = createApiConfig({
  tag: ['Auth'],
  reducerPath: 'authApi',
});

const method = 'POST';
export const authApi = createApi({
  reducerPath,
  baseQuery,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes,
  endpoints: (builder) => ({
    signIn: builder.mutation<AuthResponse, AuthQuery>({
      query: (credentials) => ({ url: apiUrls.signIn, method, headers, body: credentials }),
      // You might want to handle auth tokens and user info here
    }),
    signOut: builder.mutation<void, void>({
      query: () => ({ url: apiUrls.signOut, method, headers }),
      // Handle session invalidation or token removal
    }),
    signUp: builder.mutation<AuthResponse, AuthQuery>({
      query: (newUser) => ({ url: apiUrls.signUp, method, headers, body: newUser }),
      // Similar handling as signIn
    }),
    forgotPassword: builder.mutation<void, ForgotPasswordQuery>({
      query: (email) => ({ url: apiUrls.forgotPassword, method, headers, body: email }),
      // Handle email sent status
    }),
    resetPassword: builder.mutation<void, ResetPasswordQuery>({
      query: (resetInfo) => ({ url: apiUrls.resetPassword, method, headers, body: resetInfo }),
      // Handle password reset status
    }),
  }),
});

export const {
  useSignInMutation,
  useSignOutMutation,
  useSignUpMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;
