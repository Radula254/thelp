'use client';

import { useState, useEffect } from 'react';
import { submitAssessment } from '@/app/actions/assessment';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ArrowRight, Plus, Trash2, CheckCircle } from 'lucide-react';

interface Child {
  name: string;
  age: number;
}

interface User {
  id?: string;
  name?: string | null;
  email?: string | null;
  phone_number?: string | null;
}

interface AssessmentFormProps {
  user?: User | null;
}

const RadioOption = ({ 
  name, 
  value, 
  checked, 
  onChange, 
  label 
}: { 
  name: string; 
  value: string; 
  checked: boolean; 
  onChange: () => void; 
  label: string;
}) => (
  <label className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all min-h-[56px] ${
    checked ? "border-purple-500 bg-purple-50" : "border-gray-300 hover:border-purple-300"
  }`}>
    <input 
      type="radio" 
      name={name} 
      value={value} 
      checked={checked} 
      onChange={onChange} 
      className="w-5 h-5 accent-purple-600" 
    />
    <span className="text-gray-900 font-medium">{label}</span>
  </label>
);

export default function AssessmentForm({ user }: AssessmentFormProps) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Personal Info
  const [fullName, setFullName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone_number || '');

  // Section A - Demographics
  const [age, setAge] = useState('');
  const [disability, setDisability] = useState('');
  const [assistiveDevice, setAssistiveDevice] = useState('');
  const [education, setEducation] = useState('');
  const [children, setChildren] = useState<Child[]>([{ name: '', age: 0 }]);

  // Section B - Awareness
  const [awareness, setAwareness] = useState('');

  // Section C - Physical Accessibility
  const [accessibility, setAccessibility] = useState('');

  // Section D - Quality of Care
  const [qualityOfCare, setQualityOfCare] = useState('');

  // Suggestions
  const [suggestions, setSuggestions] = useState('');

  // Pre-fill form data when user is available
  useEffect(() => {
    if (user) {
      setFullName(user.name || '');
      setEmail(user.email || '');
      setPhone(user.phone_number || '');
    }
  }, [user]);

  const addChild = () => setChildren([...children, { name: '', age: 0 }]);
  const removeChild = (index: number) => {
    if (children.length > 1) setChildren(children.filter((_, i) => i !== index));
  };
  const updateChild = (index: number, field: keyof Child, value: string | number) => {
    const updated = [...children];
    updated[index] = { ...updated[index], [field]: value };
    setChildren(updated);
  };

  const totalSteps = 5;
  const canNext = () => {
    if (step === 0) return fullName && email && age && disability && education;
    if (step === 1) return awareness;
    if (step === 2) return accessibility;
    if (step === 3) return qualityOfCare;
    return true;
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);

    const formDataObj = new FormData();
    formDataObj.append('name', fullName);
    formDataObj.append('email', email);
    if (phone) formDataObj.append('phone_number', phone);
    formDataObj.append('age', age);
    formDataObj.append('disability', disability);
    formDataObj.append('assistiveDevice', assistiveDevice);
    formDataObj.append('education', education);
    formDataObj.append('children', JSON.stringify(children));
    formDataObj.append('awareness', awareness);
    formDataObj.append('accessibility', accessibility);
    formDataObj.append('qualityOfCare', qualityOfCare);
    if (suggestions) formDataObj.append('suggestions', suggestions);

    const result = await submitAssessment(formDataObj);

    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.message || 'Failed to submit assessment');
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-20">
        <div className="bg-white border-2 border-green-300 rounded-2xl p-12 text-center max-w-md">
          <CheckCircle className="text-green-600 mx-auto mb-6" size={64} />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Your assessment has been submitted successfully. Our team will review your responses 
            and connect you with the appropriate support services.
          </p>
          <Button onClick={() => router.push('/')} className="bg-purple-600 hover:bg-purple-700">
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  const isLoggedIn = !!user;
  const isEmailReadonly = isLoggedIn;

  return (
    <div className="flex flex-col">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div 
              key={i} 
              className={`h-2 flex-1 rounded-full transition-colors ${
                i <= step ? "bg-purple-600" : "bg-gray-200"
              }`} 
            />
          ))}
        </div>
        <p className="text-sm text-gray-600">Step {step + 1} of {totalSteps}</p>
      </div>

      {error && (
        <div className="bg-red-50 border-2 border-red-300 text-red-800 px-6 py-4 rounded-lg text-lg font-semibold mb-6" role="alert">
          {error}
        </div>
      )}

      <form onSubmit={(e) => { e.preventDefault(); if (step < totalSteps - 1) setStep(step + 1); else handleSubmit(); }} className="space-y-8">
        {/* Step 0: Demographics */}
        {step === 0 && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Section A: Personal Information & Demographics</h2>

            <div className="space-y-3">
              <Label className="text-base font-semibold">Full Name *</Label>
              <Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="h-12 text-base"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <Label className="text-base font-semibold">Email Address *</Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="h-12 text-base"
                  readOnly={isEmailReadonly}
                  required
                />
                {isEmailReadonly && (
                  <p className="text-sm text-gray-600">Your email is locked because you're signed in.</p>
                )}
              </div>
              <div className="space-y-3">
                <Label className="text-base font-semibold">Phone Number</Label>
                <Input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+254 700 000 000"
                  className="h-12 text-base"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-base font-semibold">Age Group *</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["18-24", "25-34", "35-44", "45+"].map((v) => (
                  <RadioOption key={v} name="age" value={v} checked={age === v} onChange={() => setAge(v)} label={v} />
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-base font-semibold">Type of Disability *</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Deaf", "Hard of Hearing", "Deaf-Blind", "Other"].map((v) => (
                  <RadioOption key={v} name="disability" value={v} checked={disability === v} onChange={() => setDisability(v)} label={v} />
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-base font-semibold">Do you use an assistive device? *</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Yes", "No"].map((v) => (
                  <RadioOption key={v} name="assistive" value={v} checked={assistiveDevice === v} onChange={() => setAssistiveDevice(v)} label={v} />
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-base font-semibold">Education Level *</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Primary", "Secondary", "Tertiary", "None"].map((v) => (
                  <RadioOption key={v} name="education" value={v} checked={education === v} onChange={() => setEducation(v)} label={v} />
                ))}
              </div>
            </div>

            {/* Children */}
            <div className="space-y-4">
              <Label className="text-base font-semibold">Children</Label>
              {children.map((child, index) => (
                <div key={index} className="flex items-end gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="flex-1">
                    <Label className="text-sm">Child Name</Label>
                    <Input
                      value={child.name}
                      onChange={(e) => updateChild(index, "name", e.target.value)}
                      placeholder="Name"
                      className="mt-1 h-12"
                    />
                  </div>
                  <div className="w-24">
                    <Label className="text-sm">Age</Label>
                    <Input
                      type="number"
                      value={child.age || ''}
                      onChange={(e) => updateChild(index, "age", parseInt(e.target.value) || 0)}
                      placeholder="Age"
                      className="mt-1 h-12"
                      min="0"
                    />
                  </div>
                  {children.length > 1 && (
                    <Button 
                      type="button"
                      variant="ghost" 
                      size="icon" 
                      onClick={() => removeChild(index)} 
                      className="text-red-600 hover:text-red-700 h-12 w-12"
                    >
                      <Trash2 size={18} />
                    </Button>
                  )}
                </div>
              ))}
              <Button type="button" variant="outline" onClick={addChild} className="gap-2">
                <Plus size={16} /> Add Another Child
              </Button>
            </div>
          </div>
        )}

        {/* Step 1: Awareness */}
        {step === 1 && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Section B: Awareness</h2>
            <div className="space-y-3">
              <Label className="text-base font-semibold">How did you hear about maternal health services? *</Label>
              <div className="grid grid-cols-1 gap-3">
                {["Community health worker", "Social media", "Friend or family", "Hospital or clinic", "NGO / Organization", "Never heard of them"].map((v) => (
                  <RadioOption key={v} name="awareness" value={v} checked={awareness === v} onChange={() => setAwareness(v)} label={v} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Physical Accessibility */}
        {step === 2 && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Section C: Physical Accessibility</h2>
            <div className="space-y-3">
              <Label className="text-base font-semibold">How easy is it for you to access your nearest health facility? *</Label>
              <div className="grid grid-cols-1 gap-3">
                {["Very easy", "Somewhat easy", "Difficult", "Very difficult", "Cannot access at all"].map((v) => (
                  <RadioOption key={v} name="accessibility" value={v} checked={accessibility === v} onChange={() => setAccessibility(v)} label={v} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Quality of Care */}
        {step === 3 && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Section D: Quality of Care</h2>
            <div className="space-y-3">
              <Label className="text-base font-semibold">How would you rate your experience interacting with healthcare staff? *</Label>
              <div className="grid grid-cols-1 gap-3">
                {["Excellent — Staff used sign language or provided interpreter", "Good — Staff made effort to communicate", "Fair — Some communication, but limited", "Poor — No effort to accommodate", "Never visited a facility"].map((v) => (
                  <RadioOption key={v} name="quality" value={v} checked={qualityOfCare === v} onChange={() => setQualityOfCare(v)} label={v} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Suggestions */}
        {step === 4 && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Section E: Suggestions</h2>
            <div className="space-y-3">
              <Label className="text-base font-semibold">Do you have any suggestions for improving healthcare services for Deaf mothers?</Label>
              <textarea
                value={suggestions}
                onChange={(e) => setSuggestions(e.target.value)}
                placeholder="Share your thoughts and suggestions..."
                className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all min-h-[120px]"
                rows={5}
              />
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-10">
          <Button
            type="button"
            variant="outline"
            onClick={() => setStep(step - 1)}
            disabled={step === 0}
            className="gap-2"
          >
            <ArrowLeft size={16} /> Previous
          </Button>
          {step < totalSteps - 1 ? (
            <Button 
              type="submit" 
              disabled={!canNext()} 
              className="gap-2 bg-purple-600 text-white hover:bg-purple-700"
            >
              Next <ArrowRight size={16} />
            </Button>
          ) : (
            <Button 
              type="submit" 
              disabled={!canNext() || isLoading} 
              className="gap-2 bg-green-600 text-white hover:bg-green-700"
            >
              {isLoading ? 'Submitting...' : 'Submit Assessment'} <CheckCircle size={16} />
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
