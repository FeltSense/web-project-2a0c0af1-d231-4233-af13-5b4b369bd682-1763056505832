'use client';

import { Check } from 'lucide-react';

const features = [
  'Custom software development',
  'Mobile app development',
  'Cloud infrastructure setup',
  'Security implementation',
  'Data analytics dashboard',
  '24/7 dedicated support',
  'Quarterly strategy reviews',
  'Priority feature requests'
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get started with our comprehensive technology solution package
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Enterprise Solution</h3>
              <p className="text-blue-100 text-lg mb-8">
                Everything you need to transform your business
              </p>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-6xl font-bold">$29</span>
                <span className="text-2xl text-blue-200">/month</span>
              </div>
            </div>

            <div className="p-12">
              <div className="space-y-4 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-white" size={16} />
                    </div>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-blue-600 text-white text-center rounded-xl hover:bg-blue-700 transition-all duration-300 hover:shadow-xl font-semibold text-lg"
              >
                Get Started Now
              </a>

              <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Check className="text-green-500" size={16} />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="text-green-500" size={16} />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="text-green-500" size={16} />
                  <span>30-day money back</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}