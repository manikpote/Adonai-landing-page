import { Heart, Shield, Sparkles } from "lucide-react";
import logo from "./assests/logo.png";

export default function About() {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Healthcare Inspired by{" "}
              <span className="text-emerald-700">Faith</span> and{" "}
              <span className="text-purple-700">Compassion</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Adonai Life Pharmacy, we believe that true wellness encompasses
              mind, body, and spirit. Our commitment goes beyond dispensing
              medications—we provide a caring environment where every individual
              receives personalized attention and holistic support.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded on Christian values and dedicated to modern medical
              excellence, we strive to be your trusted partner in health,
              offering guidance, support, and the highest quality pharmaceutical
              care.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Compassionate Care
                  </h3>
                  <p className="text-gray-600">
                    Every patient receives personalized attention and support
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-purple-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Trusted Expertise
                  </h3>
                  <p className="text-gray-600">
                    Licensed professionals committed to your wellbeing
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Holistic Approach
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive care that addresses all aspects of health
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-emerald-200 via-purple-200 to-red-200 flex items-center justify-center">
                <img src={logo} alt="logo" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-600 rounded-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-purple-700 rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
