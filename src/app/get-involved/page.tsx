import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, Mail, Gift, Baby, Phone, MapPin, Banknote } from 'lucide-react';
import Link from 'next/link';

export default function GetInvolvedPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Involved & Donate
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Whether you&apos;re a donor, partner, volunteer, or a mother seeking support — there&apos;s a place for you here.
          </p>
        </div>
      </section>

      {/* Ways to Give - Monetary */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ways to Give</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Your generosity directly impacts the lives of Deaf mothers and their families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Monetary Donations */}
            <div className="bg-white rounded-xl p-8 border-2 border-purple-200 shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                <Banknote className="text-purple-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Monetary Donations</h3>
              <div className="space-y-4 text-gray-700">
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-purple-800 mb-1">Account Name</p>
                  <p className="font-semibold text-gray-900">Talking Hands Listening Eyes on PPD Foundation</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-purple-800 mb-1">Mailing Address</p>
                  <p className="font-semibold text-gray-900">P.O. Box 52246-00100</p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  For bank transfer details or other payment options, please contact us directly.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <a href="tel:0719273813" className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium">
                  <Phone size={16} /> 0719 273 813
                </a>
                <a href="mailto:thlepfoundation@outlook.com" className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium">
                  <Mail size={16} /> thlepfoundation@outlook.com
                </a>
              </div>
            </div>

            {/* In-Kind Donations */}
            <div className="bg-white rounded-xl p-8 border-2 border-green-200 shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                <Gift className="text-green-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">In-Kind Donations</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We gratefully accept physical donations that directly support Deaf mothers and their babies.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-green-50 rounded-lg p-4">
                  <Baby className="text-green-600 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Baby Clothes</p>
                    <p className="text-sm text-gray-600">New or gently used baby clothing</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-green-50 rounded-lg p-4">
                  <Heart className="text-green-600 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Diapers & Supplies</p>
                    <p className="text-sm text-gray-600">Diapers, wipes, and maternal care items</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-2 text-green-700 text-sm">
                  <MapPin size={16} />
                  Drop-off: Contact us for delivery arrangements
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Other Ways to Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                <Heart className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sponsor a Mother</h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                Sponsor a Deaf mother through her pregnancy journey, covering healthcare, counseling, and sign language support.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="w-full">
                  Contact Us <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                <Users className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Volunteer</h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                Join our team of dedicated volunteers — sign language interpreters, counselors, and community workers.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="w-full">
                  Contact Us <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-14 h-14 rounded-xl bg-yellow-100 flex items-center justify-center mb-6">
                <Mail className="text-yellow-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Partner With Us</h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                Partner with us as a hospital, NGO, or corporate sponsor to expand our reach and impact globally.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="w-full">
                  Contact Us <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Every Contribution Matters
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
            Join us in our mission to ensure every Deaf mother has access to the support and care she deserves.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-yellow-500 text-gray-900 hover:bg-yellow-600 text-base px-8">
                Contact Us to Donate
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
