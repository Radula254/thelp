import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
import { Heart, Users, Brain, HandHeart, ArrowRight, Sparkles, Eye, Globe, Baby, Smartphone, Watch, GraduationCap, Award, Wheat } from "lucide-react";
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

const sdgGoals = [
  { icon: Users, title: "No Poverty", description: "Economic empowerment programs giving Deaf mothers pathways to financial independence.", color: "text-red-600", bg: "bg-red-100" },
  { icon: Wheat, title: "Zero Hunger", description: "Nutrition support and food security initiatives for Deaf mothers and their children.", color: "text-yellow-700", bg: "bg-yellow-100" },
  { icon: Heart, title: "Good Health & Well-being", description: "Accessible maternal healthcare and PPD screening in sign language.", color: "text-green-600", bg: "bg-green-100" },
  { icon: GraduationCap, title: "Quality Education", description: "Sign language resources and inclusive education for Deaf parents and their children.", color: "text-blue-600", bg: "bg-blue-100" },
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
          <div className="max-w-3xl">
            <p className="text-yellow-400 font-semibold text-sm tracking-widest uppercase mb-4">
              Talking Hands, Listening Eyes on PPD
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Walking the Motherhood Journey with Deaf Mums, <span className="text-yellow-400">Breaking the PPD Silence</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
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

      {/* Founder Spotlight */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full shadow-xl overflow-hidden border-4 border-purple-300">
                <Image
                  src="/judy-kihumba.jpeg"
                  alt="Judy Kihumba - Founder & CEO of THLEP Foundation"
                  width={256}
                  height={256}
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
                  LinkedIn
                </a>
                <a href="https://x.com/JUDYANDY2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                  @JUDYANDY2
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Pillars</h2>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thlear Baby Monitor Innovation */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 font-semibold text-sm px-4 py-2 rounded-full mb-4">
                <Sparkles size={16} />
                Innovation
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Introducing Thlear Baby Monitor
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                <strong>Thlear</strong> is our innovative baby monitoring system designed specifically for
                Deaf mothers. It combines a smart mobile app with a wearable smart band to provide
                real-time alerts when a baby is crying.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The smart band vibrates on the mother&apos;s wrist and the app sends visual push notifications,
                ensuring Deaf mothers never miss their baby&apos;s needs — day or night. This groundbreaking
                technology empowers Deaf parents with the same confidence hearing parents have.
              </p>
              <Link href="/programs">
                <Button className="bg-green-600 text-white hover:bg-green-700">
                  Learn More <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-green-200 text-center">
                <Smartphone className="text-green-600 mx-auto mb-3" size={40} />
                <h3 className="font-semibold text-gray-900 mb-1">Smart App</h3>
                <p className="text-gray-600 text-sm">Visual & haptic cry alerts</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-green-200 text-center">
                <Watch className="text-green-600 mx-auto mb-3" size={40} />
                <h3 className="font-semibold text-gray-900 mb-1">Smart Band</h3>
                <p className="text-gray-600 text-sm">Vibration notifications</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-green-200 text-center">
                <Baby className="text-green-600 mx-auto mb-3" size={40} />
                <h3 className="font-semibold text-gray-900 mb-1">Baby Safe</h3>
                <p className="text-gray-600 text-sm">24/7 cry detection</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-green-200 text-center">
                <Heart className="text-green-600 mx-auto mb-3" size={40} />
                <h3 className="font-semibold text-gray-900 mb-1">Peace of Mind</h3>
                <p className="text-gray-600 text-sm">Confidence for Deaf parents</p>
              </div>
            </div>
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

      {/* SDG 2027 Global Impact */}
      <section className="py-20">
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
              Our commitment to the United Nations Sustainable Development Goals drives every program
              and initiative. By 2027, we aim to create measurable change across four key goals.
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Our Values</h2>
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
            Whether you&apos;re a donor, partner, or a mother seeking support — there&apos;s a place for you here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-involved">
              <Button size="lg" className="bg-yellow-500 text-gray-900 hover:bg-yellow-600 text-base px-8">
                Donate Now
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
