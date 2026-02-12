import Link from 'next/link';
import { Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-bold">THLEP</span>
            </div>
            <p className="text-gray-300 max-w-md text-sm leading-relaxed">
              Talking Hands, Listening Eyes Foundation — connecting the hearing and the Deaf world 
              by promoting maternal and mental health of Deaf mothers globally.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/programs" className="hover:text-white transition-colors">Programs</Link>
              <Link href="/assessment" className="hover:text-white transition-colors">Assessment Tool</Link>
              <Link href="/get-involved" className="hover:text-white transition-colors">Get Involved</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <p>Judy Kihumba</p>
              <a href="mailto:thlepfoundation@outlook.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} />
                thlepfoundation@outlook.com
              </a>
              <a href="mailto:info@thlep.org" className="flex items-center gap-2 hover:text-white transition-colors mt-2">
                <Mail size={14} />
                info@thlep.org
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
          <p>© {new Date().getFullYear()} THLEP Foundation. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Made with <Heart size={12} className="text-yellow-400" /> for Deaf mothers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
