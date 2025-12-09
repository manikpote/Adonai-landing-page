import { CheckCircle } from 'lucide-react';

export default function Features() {
  const features = [
    'Licensed pharmacists available for consultations',
    'Wide range of prescription and over-the-counter medications',
    'Personalized medication therapy management',
    'Insurance coordination and billing support',
    'Home delivery services available',
    'Immunization and vaccination programs',
    'Health screening services',
    'Wellness and nutrition counseling'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-purple-700 to-purple-900 rounded-3xl p-12 shadow-2xl text-white">
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-4">Why Choose Adonai Life Pharmacy?</h3>
                <p className="text-purple-100 text-lg">
                  Experience the difference of care that goes beyond prescriptions
                </p>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-purple-50 text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <p className="text-sm text-purple-100 mb-2">Our Promise</p>
                <p className="text-lg font-semibold text-white">
                  "Your health and wellbeing are our highest priority. We're here to serve you with excellence, integrity, and compassion."
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-3xl border border-emerald-100 shadow-lg">
                <div className="text-5xl font-bold text-emerald-700 mb-2">15+</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Years of Service</div>
                <p className="text-gray-600">Trusted healthcare partner in the community</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-3xl border border-purple-100 shadow-lg">
                <div className="text-5xl font-bold text-purple-700 mb-2">10k+</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Happy Patients</div>
                <p className="text-gray-600">Families we've had the privilege to serve</p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-3xl border border-red-100 shadow-lg">
                <div className="text-5xl font-bold text-red-600 mb-2">100%</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Commitment</div>
                <p className="text-gray-600">Dedicated to your health and wellness</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
