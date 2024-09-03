// schema

export enum Role {
  USER = 'user',
  ADMIN = 'admin',
  MANAGER = 'manager',
}

export interface DeviceInfo {
  deviceIps: string[];
  deviceType: string[];
  deviceLocation: string[];
}
export enum TokenType {
  OTP_TOKEN = 'otpToken',
  RESET_PASSWORD_TOKEN = 'resetPasswordToken',
  FORGOT_PASSWORD_TOKEN = 'forgotPasswordToken',
  VERIFY_PHONE_TOKEN = 'verifyPhoneToken',
  VERIFY_EMAIL_TOKEN = 'verifyEmailToken',
}

export interface Token {
  tokenType: string;
  token: string;
}

export interface Session {
  loginTimeStamp: Date;
  sessionId: string;
}

export enum AuthProvider {
  GOOGLE_PROVIDER = 'googleProvider',
  CREDENTIALS_Provider = 'credentialsProvider',
}

export interface Feedback {
  feedbackType: string;
  feedbackRating: number;
  feedbackMessage: string;
};

export interface UserOnboarding {
  privacyPolicyAgreement: boolean;
  termsAndConditionAgreement: boolean;
  profileSetup: boolean;
  cookiesConsignment: boolean;
  feedbacks: Feedback[];
}

export interface Auth {
  tokens: Token[];
  session: Session[];
  password: string;
  emailVerified: boolean;
  emailVerifiedAt: Date;
  phoneVerified: boolean;
  phoneVerifiedAt: Date;
  authProvider: AuthProvider;
}

export interface Profile {
  fullName: string;
  email: string;
  phone: string;
  dob: Date;
  age: number;
}

export interface User {
  profile: Profile;
  auth: Auth;
  role: Role;
  deviceInfo: DeviceInfo;
  onboarding: UserOnboarding;
}
