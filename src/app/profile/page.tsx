import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import connectDB from '@/lib/mongodb';
import User from '@/lib/models/User';
import Assessment from '@/lib/models/Assessment';
import { Mail, Phone, User as UserIcon, Calendar } from 'lucide-react';

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect('/login');
  }

  await connectDB();
  const user = await User.findById(session.user.id);
  const assessments = await Assessment.find({ userId: session.user.id }).sort({ createdAt: -1 });

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-yellow-50 to-green-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-purple-900 mb-3">Your Profile</h1>
            <p className="text-lg text-gray-600">
              View and manage your account information and assessment history.
            </p>
          </div>

          {/* User Information */}
          <div className="border-2 border-purple-200 rounded-xl p-6 bg-purple-50 mb-8">
            <h2 className="text-2xl font-bold text-purple-900 mb-6 flex items-center gap-2">
              <UserIcon className="text-purple-600" size={24} />
              Personal Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="font-semibold text-gray-700 min-w-[120px]">Name:</span>
                <span className="text-gray-900">{user.name}</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-purple-600 mt-1" size={18} />
                <div>
                  <span className="font-semibold text-gray-700 min-w-[120px] block mb-1">Email:</span>
                  <span className="text-gray-900">{user.email}</span>
                </div>
              </div>
              {user.phone_number && (
                <div className="flex items-start gap-3">
                  <Phone className="text-purple-600 mt-1" size={18} />
                  <div>
                    <span className="font-semibold text-gray-700 min-w-[120px] block mb-1">Phone:</span>
                    <span className="text-gray-900">{user.phone_number}</span>
                  </div>
                </div>
              )}
              <div className="flex items-start gap-3">
                <Calendar className="text-purple-600 mt-1" size={18} />
                <div>
                  <span className="font-semibold text-gray-700 min-w-[120px] block mb-1">Member Since:</span>
                  <span className="text-gray-900">
                    {new Date(user.createdAt).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Assessment History */}
          <div className="border-2 border-yellow-200 rounded-xl p-6 bg-yellow-50">
            <h2 className="text-2xl font-bold text-yellow-900 mb-6">Assessment History</h2>
            {assessments.length === 0 ? (
              <p className="text-gray-600 mb-4">You haven't submitted any assessments yet.</p>
            ) : (
              <div className="space-y-4">
                {assessments.map((assessment: any) => (
                  <div key={assessment._id.toString()} className="bg-white border border-yellow-300 rounded-lg p-5">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Assessment #{assessments.indexOf(assessment) + 1}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Submitted on {new Date(assessment.createdAt).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      {assessment.age && (
                        <div>
                          <span className="font-medium text-gray-700">Age Group: </span>
                          <span className="text-gray-900">{assessment.age}</span>
                        </div>
                      )}
                      {assessment.disability && (
                        <div>
                          <span className="font-medium text-gray-700">Disability: </span>
                          <span className="text-gray-900">{assessment.disability}</span>
                        </div>
                      )}
                      {assessment.children && assessment.children.length > 0 && (
                        <div className="md:col-span-2">
                          <span className="font-medium text-gray-700">Children: </span>
                          <span className="text-gray-900">
                            {assessment.children.map((child: any, idx: number) => 
                              `${child.name} (${child.age}${idx < assessment.children.length - 1 ? ', ' : ''})`
                            ).join('')}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-6">
              <a
                href="/assessment"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg text-base transition-all focus:outline-none focus:ring-4 focus:ring-yellow-300 min-h-[48px]"
              >
                Submit New Assessment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
