import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, Mail } from 'lucide-react';
import Link from 'next/link';

export default function GetInvolvedPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Involved
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Whether you're a donor, partner, volunteer, or a mother seeking support — there's a place for you here.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                <Heart className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Donate</h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                Your contribution helps us provide essential services to Deaf mothers and their families.
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
                Join our team of dedicated volunteers working to support Deaf mothers in your community.
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Partner</h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                Partner with us to expand our reach and impact in supporting Deaf mothers globally.
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
            Ready to Make a Difference?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
            Join us in our mission to ensure every Deaf mother has access to the support and care she deserves.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-yellow-500 text-gray-900 hover:bg-yellow-600 text-base px-8">
                Contact Us
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
