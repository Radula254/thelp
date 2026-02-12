import 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      phone_number?: string | null;
    };
  }

  interface User {
    id: string;
    email: string;
    name: string;
    phone_number?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    phone_number?: string;
  }
}
