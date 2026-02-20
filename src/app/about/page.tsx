import { Heart, Users, Brain, HandHeart, Sparkles, Eye, Award, Globe, GraduationCap, Wheat } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const values = [
  { label: "Integrity", icon: Sparkles, description: "We uphold the highest standards of honesty and ethical conduct in all our work." },
  { label: "Compassion", icon: Heart, description: "We approach every interaction with empathy, care, and genuine understanding." },
  { label: "Equity", icon: Users, description: "We champion equal access to healthcare and opportunities for Deaf mothers." },
  { label: "Empowerment", icon: HandHeart, description: "We equip mothers with the tools and resources to thrive independently." },
  { label: "Innovation", icon: Brain, description: "We embrace creative solutions to bridge the gap between hearing and Deaf worlds." },
];

const sdgGoals = [
  { icon: Users, title: "No Poverty", description: "Economic empowerment programs giving Deaf mothers pathways to financial independence.", color: "text-red-600", bg: "bg-red-100" },
  { icon: Wheat, title: "Zero Hunger", description: "Nutrition support and food security initiatives for Deaf mothers and their children.", color: "text-yellow-700", bg: "bg-yellow-100" },
  { icon: Heart, title: "Good Health & Well-being", description: "Accessible maternal healthcare and PPD screening in sign language.", color: "text-green-600", bg: "bg-green-100" },
  { icon: GraduationCap, title: "Quality Education", description: "Sign language resources and inclusive education for Deaf parents and their children.", color: "text-blue-600", bg: "bg-blue-100" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About THLEP
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Talking Hands, Listening Eyes on PPD Foundation — born from the belief that
            every mother&apos;s voice deserves to be heard, even when it speaks through hands.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="text-purple-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            A world where Deaf mothers have full access to maternal healthcare, mental health
            support, and economic opportunities — where the bridge between the hearing and the
            Deaf world is built on understanding, compassion, and equity.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              THLEP Foundation was born from witnessing the silent struggles of Deaf mothers —
              women who navigated pregnancy, childbirth, and motherhood without access to
              information in their own language.
            </p>
            <p>
              Postpartum depression among Deaf mothers often goes undiagnosed and untreated,
              leaving countless women isolated at a time when they need support the most.
              We set out to change this.
            </p>
            <p>
              Today, we work to ensure every Deaf mother has access to prenatal and postnatal
              education in sign language, Deaf-friendly mental health counseling, and pathways
              to economic independence.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="flex justify-center">
              <div className="w-72 h-72 rounded-full shadow-xl overflow-hidden border-4 border-purple-300">
                <Image
                  src="/judy-kihumba.jpeg"
                  alt="Judy Kihumba - Founder & CEO of THLEP Foundation"
                  width={288}
                  height={288}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 font-semibold text-sm px-4 py-2 rounded-full mb-4">
                <Award size={16} />
                BBC 100 Most Inspiring Women 2022
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                <strong>Judy Kihumba</strong> is a certified Sign Language Consultant and the visionary
                behind THLEP Foundation. Named among the <strong>BBC 100 Most Inspiring Women of 2022</strong>,
                Judy has dedicated her life to bridging the gap between the hearing and Deaf worlds.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Through her partnership with <strong>Pumwani Maternity Hospital</strong>, she has pioneered
                sign language interpretation services during maternal care, ensuring Deaf mothers receive
                the same quality of information and support as hearing mothers.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://linkedin.com/in/judy-kihumba-sign-language-consultant-299194161" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  LinkedIn Profile
                </a>
                <a href="https://x.com/JUDYANDY2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                  @JUDYANDY2
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDG 2027 */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 font-semibold text-sm px-4 py-2 rounded-full mb-4">
              <Globe size={16} />
              SDG 2027 Strategy
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Global Impact by 2027
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to the United Nations Sustainable Development Goals drives every program.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {sdgGoals.map((goal) => (
              <div key={goal.title} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all text-center">
                <div className={`w-14 h-14 rounded-xl ${goal.bg} flex items-center justify-center mb-4 mx-auto`}>
                  <goal.icon className={goal.color} size={28} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{goal.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value) => (
              <div key={value.label} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <value.icon className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
