import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import AssessmentForm from '@/components/AssessmentForm';

export default async function AssessmentPage() {
  const session = await auth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-yellow-50 to-green-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-purple-900 mb-3">Combo Assessment Tool</h1>
            <p className="text-lg text-gray-600">
              Please fill out the form below. All fields marked with an asterisk (*) are required.
            </p>
            {session && (
              <div className="mt-4 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                <p className="text-green-800 font-semibold text-lg">
                  ✓ Signed in as {session.user?.email}
                </p>
              </div>
            )}
          </div>

          <AssessmentForm user={session?.user} />
        </div>
      </div>
    </div>
  );
}
