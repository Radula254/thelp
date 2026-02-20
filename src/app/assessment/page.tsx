import { auth } from '@/auth';
import AssessmentForm from '@/components/AssessmentForm';

export default async function AssessmentPage() {
  const session = await auth();

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-12 bg-purple-600">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Access to Care Assessment
          </h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Help us understand your needs so we can connect you with the right support.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          {session && (
            <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
              <p className="text-green-800 font-semibold text-lg">
                Signed in as {session.user?.email}
              </p>
              <p className="text-green-700 text-sm mt-1">
                Your name, email, and phone number have been pre-filled. Email cannot be changed.
              </p>
            </div>
          )}

          <AssessmentForm user={session?.user} />
        </div>
      </section>
    </div>
  );
}
