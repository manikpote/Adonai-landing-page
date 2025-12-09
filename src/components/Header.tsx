import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Product', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Contact Us', href: '#' }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-7 h-7 border-4 border-purple-700 transform rotate-0" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full border-4 border-red-500"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-2 h-0.5 bg-emerald-600"></div>
                  <div className="w-0.5 h-2 bg-emerald-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            </div>
            <div className="hidden sm:block">
              <p className="text-lg font-bold text-gray-900">Adonai</p>
              <p className="text-xs text-gray-600">Life Pharmacy</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 font-medium hover:text-emerald-700 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <button className="px-6 py-2.5 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Consult Us
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-gray-700 font-medium hover:bg-gray-50 hover:text-emerald-700 rounded-lg transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <button className="w-full px-6 py-2.5 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-all duration-300">
              Consult Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
