import Link from 'next/link';
import Image from 'next/image';
import { Mail, Heart, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-4 bg-white rounded-lg p-2 inline-block">
              <Image
                src="/thlep-logo.png"
                alt="THLEP Foundation Logo"
                width={140}
                height={48}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Talking Hands, Listening Eyes on PPD Foundation — walking the motherhood journey 
              with Deaf mums, breaking the PPD silence.
            </p>
            {/* Social Links */}
            <div className="flex flex-col gap-2 text-sm">
              <a href="https://linkedin.com/company/talking-hands-listening-eyes" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                THLEP on LinkedIn
              </a>
              <a href="https://x.com/Thleporg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                @Thleporg
              </a>
              <a href="https://facebook.com/judy.andy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </a>
              <a href="https://threads.net/@judy.andy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.432 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.187.408-2.26 1.33-3.017.88-.724 2.108-1.138 3.553-1.199 1.044-.044 2.009.06 2.896.283-.072-.79-.236-1.455-.497-2.005-.402-.845-1.07-1.295-2.042-1.375-.853-.07-1.69.15-2.355.618l-1.19-1.681c.976-.691 2.2-1.093 3.553-1.093.121 0 .244.004.367.012 1.617.133 2.834.86 3.613 2.164.607 1.014.92 2.322 1.005 3.855.488.166.94.382 1.35.65 1.27.837 2.15 2.063 2.558 3.553.605 2.216.164 4.976-2.007 7.102-1.872 1.832-4.135 2.644-7.28 2.668zM12.693 13.7c-1.07.044-1.892.295-2.375.725-.378.336-.544.746-.52 1.22.025.425.235.804.607 1.045.444.287 1.065.435 1.8.399 1.076-.058 1.888-.451 2.415-1.17.37-.506.617-1.178.728-2.012-.81-.19-1.694-.258-2.655-.207z"/></svg>
                Threads
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/programs" className="hover:text-white transition-colors">Programs</Link>
              <Link href="/assessment" className="hover:text-white transition-colors">Assessment Tool</Link>
              <Link href="/get-involved" className="hover:text-white transition-colors">Get Involved & Donate</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <p className="font-medium text-white">Judy Kihumba</p>
              <a href="tel:0719273813" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={14} />
                0719 273 813
              </a>
              <a href="tel:0725733843" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={14} />
                0725 733 843
              </a>
              <a href="mailto:thlepfoundation@outlook.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} />
                thlepfoundation@outlook.com
              </a>
              <a href="mailto:info@thlepfoundation.org" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} />
                info@thlepfoundation.org
              </a>
              <div className="flex items-center gap-2 mt-1">
                <MapPin size={14} />
                P.O. Box 52246-00100
              </div>
            </div>
          </div>

          {/* Ways to Give */}
          <div>
            <h4 className="font-semibold mb-4">Ways to Give</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <div>
                <p className="text-white font-medium mb-1">Monetary Donations</p>
                <p>Account Name:</p>
                <p className="text-white text-xs">Talking Hands Listening Eyes on PPD Foundation</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">In-Kind Donations</p>
                <p>We accept baby clothes, diapers, and maternal care supplies.</p>
              </div>
              <Link href="/get-involved" className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300 font-medium mt-1">
                Learn More <ExternalLink size={12} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} THLEP Foundation. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Made with <Heart size={12} className="text-yellow-400" /> for Deaf mothers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
