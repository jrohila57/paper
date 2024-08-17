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

// Interfaces for API response
export interface NewsArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export interface NewsResponse {
  status: string;
  totalResults: number;
  articles: NewsArticle[];
}

export interface NewsQuery {
  country?: string;
  category?: string;
  q?: string;
  pageSize?: number;
  page?: number;
}

export interface NewsSource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

export interface NewsSourcesResponse {
  status: string;
  sources: NewsSource[];
}

// Auth

// Type for sign-in and sign-up requests
export interface AuthQuery {
  email: string;
  password: string;
}

// Type for the response of sign-in and sign-up
export interface AuthResponse {
  token: string; // JWT or other token
  user: {
    id: string;
    email: string;
    name?: string;
    // Add other user properties as needed
  };
}

// Type for forgot password request
export interface ForgotPasswordQuery {
  email: string;
}

// Type for reset password request
export interface ResetPasswordQuery {
  token: string; // Token from the forgot password process
  newPassword: string;
}

// Example of a potential API response for forgot and reset password
export interface PasswordResponse {
  message: string; // Success or error message
}

export interface ThemeState {
  isThemeDark: boolean;
  loading: boolean;
}
