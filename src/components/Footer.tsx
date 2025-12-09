export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-9 h-9 border-4 border-purple-300 transform rotate-0" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full border-4 border-red-400"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-3 h-1 bg-emerald-400"></div>
                    <div className="w-1 h-3 bg-emerald-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Adonai Life</h3>
                <p className="text-sm text-purple-200">Pharmacy</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Your trusted partner in holistic healthcare, providing compassionate service and modern medical expertise rooted in faith and integrity.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Health Tips</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Adonai Life Pharmacy. All rights reserved. | Healthcare with heart and purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
