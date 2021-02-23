export type signInReducerType = {
  username: string;
  password: string;
};

export type root = {
  signIn: signInReducerType;
};
