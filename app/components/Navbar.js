'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-700">
            Leah D. Gibson
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-700 transition">
              Home
            </Link>

            {/* Portfolio Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-700 transition">
                Portfolio ▾
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-lg py-2">
                  <Link 
                    href="/data-science"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                  >
                    Data Science
                  </Link>
                  <Link 
                    href="/mathematics"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                  >
                    Mathematics
                  </Link>
                  <Link 
                    href="/research"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                  >
                    Research
                  </Link>
                  <Link 
                    href="/software-engineering"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                  >
                    Software Engineering
                  </Link>
                  <Link 
                    href="/ultrarunning"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                  >
                    Ultrarunning
                  </Link>
                  <Link 
                    href="/background"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                  >
                    Background
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}