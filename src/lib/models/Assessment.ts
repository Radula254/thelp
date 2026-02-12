import mongoose, { Schema, Model } from 'mongoose';

export interface IChild {
  name: string;
  age: number;
}

export interface IAssessment {
  _id: string;
  userId: mongoose.Types.ObjectId;
  name: string;
  email: string;
  phone_number?: string;
  // Demographics
  age?: string;
  disability?: string;
  assistiveDevice?: string;
  education?: string;
  children: IChild[];
  // Section B - Awareness
  awareness?: string;
  // Section C - Physical Accessibility
  accessibility?: string;
  // Section D - Quality of Care
  qualityOfCare?: string;
  // Suggestions
  suggestions?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ChildSchema = new Schema<IChild>(
  {
    name: {
      type: String,
      required: [true, 'Child name is required'],
      trim: true,
    },
    age: {
      type: Number,
      required: [true, 'Child age is required'],
      min: [0, 'Age must be a positive number'],
    },
  },
  { _id: false }
);

const AssessmentSchema = new Schema<IAssessment>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      trim: true,
    },
    phone_number: {
      type: String,
      trim: true,
    },
    // Demographics
    age: {
      type: String,
      trim: true,
    },
    disability: {
      type: String,
      trim: true,
    },
    assistiveDevice: {
      type: String,
      trim: true,
    },
    education: {
      type: String,
      trim: true,
    },
    children: {
      type: [ChildSchema],
      default: [],
    },
    // Section B - Awareness
    awareness: {
      type: String,
      trim: true,
    },
    // Section C - Physical Accessibility
    accessibility: {
      type: String,
      trim: true,
    },
    // Section D - Quality of Care
    qualityOfCare: {
      type: String,
      trim: true,
    },
    // Suggestions
    suggestions: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create indexes
AssessmentSchema.index({ userId: 1 });
AssessmentSchema.index({ email: 1 });

const Assessment: Model<IAssessment> =
  mongoose.models.Assessment || mongoose.model<IAssessment>('Assessment', AssessmentSchema);

export default Assessment;
