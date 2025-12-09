import { Stethoscope, Pill, Users, Phone, Clock, ShoppingBag } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Pill,
      title: 'Prescription Services',
      description: 'Fast, accurate prescription filling with comprehensive medication counseling.',
      color: 'bg-emerald-50 text-emerald-700'
    },
    {
      icon: Stethoscope,
      title: 'Health Consultations',
      description: 'Professional guidance on managing your health and wellness journey.',
      color: 'bg-purple-50 text-purple-700'
    },
    {
      icon: Users,
      title: 'Family Care Plans',
      description: 'Customized healthcare solutions for your entire family.',
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: Clock,
      title: 'Extended Hours',
      description: 'Convenient service hours to accommodate your busy schedule.',
      color: 'bg-emerald-50 text-emerald-700'
    },
    {
      icon: ShoppingBag,
      title: 'Wellness Products',
      description: 'Carefully curated health and wellness products for everyday care.',
      color: 'bg-purple-50 text-purple-700'
    },
    {
      icon: Phone,
      title: 'Medication Support',
      description: 'Round-the-clock support for questions about your medications.',
      color: 'bg-red-50 text-red-600'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive healthcare services designed with your wellbeing in mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
