interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface UserSignInProps {
  email: string;
  password: string;
}

interface UserSignUpProps extends UserSignInProps {
  firstName: string;
  lastName: string;
}

export type { User, UserSignInProps, UserSignUpProps };
