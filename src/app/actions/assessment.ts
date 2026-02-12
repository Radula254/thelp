'use server';

import { auth } from '@/auth';
import connectDB from '@/lib/mongodb';
import Assessment from '@/lib/models/Assessment';
import User from '@/lib/models/User';
import { z } from 'zod';

const ChildSchema = z.object({
  name: z.string().min(1, 'Child name is required'),
  age: z.number().min(0, 'Age must be a positive number'),
});

const AssessmentSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone_number: z.string().optional(),
  age: z.string().optional(),
  disability: z.string().optional(),
  assistiveDevice: z.string().optional(),
  education: z.string().optional(),
  children: z.array(ChildSchema).default([]),
  awareness: z.string().optional(),
  accessibility: z.string().optional(),
  qualityOfCare: z.string().optional(),
  suggestions: z.string().optional(),
});

export async function submitAssessment(formData: FormData) {
  try {
    const session = await auth();
    
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone_number: formData.get('phone_number') as string | undefined,
      age: formData.get('age') as string | undefined,
      disability: formData.get('disability') as string | undefined,
      assistiveDevice: formData.get('assistiveDevice') as string | undefined,
      education: formData.get('education') as string | undefined,
      children: JSON.parse(formData.get('children') as string || '[]'),
      awareness: formData.get('awareness') as string | undefined,
      accessibility: formData.get('accessibility') as string | undefined,
      qualityOfCare: formData.get('qualityOfCare') as string | undefined,
      suggestions: formData.get('suggestions') as string | undefined,
    };

    // Validate the data
    const validatedData = AssessmentSchema.parse(data);

    await connectDB();

    let userId: string;

    if (session?.user?.id) {
      // User is logged in - update their profile if name or phone changed
      userId = session.user.id;
      
      const updateFields: { name?: string; phone_number?: string } = {};
      if (validatedData.name !== session.user.name) {
        updateFields.name = validatedData.name;
      }
      if (validatedData.phone_number !== (session.user as any).phone_number) {
        updateFields.phone_number = validatedData.phone_number;
      }

      if (Object.keys(updateFields).length > 0) {
        await User.findByIdAndUpdate(userId, updateFields);
      }

      // Ensure email matches logged-in user's email
      validatedData.email = session.user.email!;
    } else {
      // User is not logged in - create assessment without userId
      userId = new (await import('mongoose')).Types.ObjectId().toString();
    }

    // Create assessment
    const assessment = new Assessment({
      userId: session?.user?.id ? new (await import('mongoose')).Types.ObjectId(session.user.id) : undefined,
      ...validatedData,
    });

    await assessment.save();

    return { success: true, message: 'Assessment submitted successfully' };
  } catch (error) {
    console.error('Error submitting assessment:', error);
    
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: 'Validation error',
        errors: error.errors,
      };
    }

    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to submit assessment',
    };
  }
}
