import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
import { Heart, Users, Brain, HandHeart, ArrowRight, Sparkles, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Heart,
    title: "Maternal Wellness",
    description: "Prenatal and postnatal sign language education to ensure every Deaf mother receives the care she deserves.",
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

const values = [
  { label: "Integrity", icon: Sparkles },
  { label: "Compassion", icon: Heart },
  { label: "Equity", icon: Users },
  { label: "Empowerment", icon: HandHeart },
  { label: "Innovation", icon: Brain },
];

export default async function Home() {
  const session = await auth();

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/hero-mother.jpg"
            alt="A mother tenderly holding her baby"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-gray-900/20" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-2xl">
            <p className="text-yellow-400 font-semibold text-sm tracking-widest uppercase mb-4">
              Talking Hands, Listening Eyes
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Every Deaf Mother Deserves to Be <span className="text-yellow-400">Heard</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
              We connect the hearing and the Deaf world by promoting maternal and mental health 
              of Deaf mothers globally.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-involved">
                <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700 text-base px-8">
                  Join Our Mission <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link href="/assessment">
                <Button size="lg" variant="outline" className="border-white text-white bg-white/10 hover:bg-white/20 text-base px-8">
                  Access Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            To connect the hearing and the Deaf world by promoting maternal and mental health 
            of Deaf mothers globally — ensuring no mother faces motherhood in silence.
          </p>
        </div>
      </section>

      {/* Vision Statement */}
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

      {/* Core Pillars */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Pillars
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Three interconnected pillars that form the foundation of our impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl ${pillar.bg} flex items-center justify-center mb-6`}>
                  <pillar.icon className={pillar.color} size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {pillar.description}
                </p>
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
              <Link href="/programs">
                <Button className="bg-green-600 text-white hover:bg-green-700">
                  Explore Our Programs <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Our Values
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((value) => (
              <div
                key={value.label}
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-6 py-3 hover:shadow-md transition-shadow"
              >
                <value.icon size={18} className="text-purple-600" />
                <span className="font-medium text-gray-900">{value.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Be Part of the Change
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
            Whether you're a donor, partner, or a mother seeking support — there's a place for you here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-involved">
              <Button size="lg" className="bg-yellow-500 text-gray-900 hover:bg-yellow-600 text-base px-8">
                Join Our Mission
              </Button>
            </Link>
            <Link href="/assessment">
              <Button size="lg" variant="outline" className="border-white text-white bg-white/10 hover:bg-white/20 text-base px-8">
                Access Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
