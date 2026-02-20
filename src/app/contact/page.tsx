import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Get in touch with us. We&apos;re here to help and answer any questions you may have.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                    <Mail className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <a href="mailto:thlepfoundation@outlook.com" className="text-gray-600 hover:text-purple-600 block">
                      thlepfoundation@outlook.com
                    </a>
                    <a href="mailto:info@thlepfoundation.org" className="text-gray-600 hover:text-purple-600 block">
                      info@thlepfoundation.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-700 font-medium mb-1">Judy Kihumba</p>
                    <a href="tel:0719273813" className="text-gray-600 hover:text-purple-600 block">0719 273 813</a>
                    <a href="tel:0725733843" className="text-gray-600 hover:text-purple-600 block">0725 733 843</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0">
                    <MapPin className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Mailing Address</h3>
                    <p className="text-gray-600">P.O. Box 52246-00100</p>
                    <p className="text-gray-600 mt-1">Serving Deaf mothers globally</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Follow Us</h3>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://linkedin.com/in/judy-kihumba-sign-language-consultant-299194161" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      LinkedIn (Judy)
                    </a>
                    <a href="https://linkedin.com/company/talking-hands-listening-eyes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      LinkedIn (THLEP)
                    </a>
                    <a href="https://x.com/JUDYANDY2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                      @JUDYANDY2
                    </a>
                    <a href="https://x.com/Thleporg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                      @Thleporg
                    </a>
                    <a href="https://facebook.com/judy.andy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors text-sm font-medium">
                      Facebook
                    </a>
                    <a href="https://threads.net/@judy.andy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium">
                      Threads
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" className="mt-2 h-12" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" name="email" className="mt-2 h-12" required />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" className="mt-2 h-12" required />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="mt-2 w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
