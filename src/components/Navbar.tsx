'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';
import { logoutAction } from '@/app/actions/auth';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Assessment', href: '/assessment' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-xl font-bold text-gray-900">THLEP</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors min-h-[48px] flex items-center ${
                pathname === link.href
                  ? 'text-purple-600 bg-purple-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          {session ? (
            <>
              <Link href="/profile" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 min-h-[48px] flex items-center">
                Profile
              </Link>
              <form action={logoutAction} className="ml-2">
                <Button size="sm" variant="default">
                  Sign Out
                </Button>
              </form>
            </>
          ) : (
            <Link href="/signup" className="ml-2">
              <Button size="sm" variant="default">
                Join Our Mission
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-gray-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block px-3 py-3 rounded-md text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'text-purple-600 bg-purple-50'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
          {session ? (
            <>
              <Link href="/profile" onClick={() => setOpen(false)} className="block px-3 py-3 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900">
                Profile
              </Link>
              <form action={logoutAction} className="mt-2">
                <Button size="sm" variant="default" className="w-full">
                  Sign Out
                </Button>
              </form>
            </>
          ) : (
            <Link href="/signup" onClick={() => setOpen(false)} className="mt-2 block">
              <Button size="sm" variant="default" className="w-full">
                Join Our Mission
              </Button>
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
