import { Heart, Brain, HandHeart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    icon: Heart,
    title: "Maternal Wellness Program",
    description: "Comprehensive prenatal and postnatal sign language education to ensure every Deaf mother receives the care she deserves.",
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    icon: Brain,
    title: "Mental Health Support",
    description: "Deaf-friendly counseling and support groups for postpartum depression and maternal mental health.",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: HandHeart,
    title: "Economic Empowerment",
    description: "Skills development and economic opportunities to help Deaf mothers build independent, fulfilling lives.",
    color: "text-yellow-600",
    bg: "bg-yellow-100",
  },
];

export default function ProgramsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Programs
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Three interconnected programs that form the foundation of our impact.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div
                key={program.title}
                className="group bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl ${program.bg} flex items-center justify-center mb-6`}>
                  <program.icon className={program.color} size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  {program.description}
                </p>
                <Link href="/get-involved">
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Image Section */}
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/programs-support.jpg"
                alt="Women in a support group using sign language"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Building Bridges of Understanding
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our programs bring together Deaf mothers in supportive communities where they 
                can share experiences, access healthcare information in sign language, and find 
                strength in solidarity.
              </p>
              <Link href="/get-involved">
                <Button className="bg-green-600 text-white hover:bg-green-700">
                  Get Involved <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
