'use server';

import { signIn, signOut } from '@/auth';
import connectDB from '@/lib/mongodb';
import User from '@/lib/models/User';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

const SignUpSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  phone_number: z.string().optional(),
});

export async function signUpAction(formData: FormData) {
  try {
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      phone_number: formData.get('phone_number') as string | undefined,
    };

    const validatedData = SignUpSchema.parse(data);

    await connectDB();

    // Check if user already exists
    const existingUser = await User.findOne({ email: validatedData.email });
    if (existingUser) {
      return {
        success: false,
        message: 'User with this email already exists',
      };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(validatedData.password, 10);

    // Create user
    const user = new User({
      ...validatedData,
      password: hashedPassword,
    });

    await user.save();

    // Sign in the user
    try {
      await signIn('credentials', {
        email: validatedData.email,
        password: validatedData.password,
        redirect: false,
      } as any);
    } catch (error) {
      // If sign-in fails, the user creation was successful but login failed
      // This shouldn't happen, but handle it gracefully
      console.error('Sign-in after signup failed:', error);
    }

    return { success: true, message: 'Account created successfully' };
  } catch (error) {
    console.error('Error signing up:', error);
    
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: 'Validation error',
        errors: error.issues,
      };
    }

    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to create account',
    };
  }
}

export async function loginAction(formData: FormData) {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      await signIn('credentials', {
        email,
        password,
        redirect: false,
      } as any);
    } catch (error: any) {
      // Auth.js v5 throws errors for failed sign-ins
      return {
        success: false,
        message: 'Invalid email or password',
      };
    }

    return { success: true, message: 'Logged in successfully' };
  } catch (error) {
    console.error('Error logging in:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to log in',
    };
  }
}

export async function logoutAction() {
  await signOut({ redirectTo: '/' });
}
