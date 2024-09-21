import React from 'react';
import Link from 'next/link';
import { HeartPulseIcon  } from 'lucide-react'


function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center fixed w-full bg-white/90 backdrop-blur z-50 shadow-md">
      <Link className="flex items-center" href="/">
        <HeartPulseIcon className="h-8 w-8 text-primary" />
        <span className="ml-3 text-2xl font-bold text-primary">TeleMed</span>
      </Link>
      <nav className="ml-auto flex gap-6">
        <Link className="text-sm font-medium text-gray-700 hover:text-primary transition-colors" href="#features">
          Features
        </Link>
        <Link className="text-sm font-medium text-gray-700 hover:text-primary transition-colors" href="#testimonials">
          Testimonials
        </Link>
        <Link className="text-sm font-medium text-gray-700 hover:text-primary transition-colors" href="#contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Navbar