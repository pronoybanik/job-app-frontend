export type TAuthUser = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};

export type TAuthState = {
  user: TAuthUser | null;
  token: string | null;
  loading: boolean,
  error: string | null
};

export type TUser = {
  fullName?: string;
  email: string;
  password: number;
};