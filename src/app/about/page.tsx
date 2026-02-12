import { Heart, Users, Brain, HandHeart, Sparkles, Eye } from 'lucide-react';

const values = [
  { label: "Integrity", icon: Sparkles, description: "We uphold the highest standards of honesty and ethical conduct in all our work." },
  { label: "Compassion", icon: Heart, description: "We approach every interaction with empathy, care, and genuine understanding." },
  { label: "Equity", icon: Users, description: "We champion equal access to healthcare and opportunities for Deaf mothers." },
  { label: "Empowerment", icon: HandHeart, description: "We equip mothers with the tools and resources to thrive independently." },
  { label: "Innovation", icon: Brain, description: "We embrace creative solutions to bridge the gap between hearing and Deaf worlds." },
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
            Talking Hands, Listening Eyes Foundation — a foundation born from the belief that 
            every mother's voice deserves to be heard, even when it speaks through hands.
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

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
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
