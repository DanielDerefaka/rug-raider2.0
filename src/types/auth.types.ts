export type AuthStatus = 'idle' | 'generating' | 'verifying' | 'creating';

export interface AuthError {
  errors: Array<{
    code: string;
    message: string;
  }>;
}

export interface SignUpValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  clerkId?: string;
  type?: string;
}

export interface OTPInputProps {
  otp: string;
  setOtp: (value: string) => void;
  disabled?: boolean;
}
