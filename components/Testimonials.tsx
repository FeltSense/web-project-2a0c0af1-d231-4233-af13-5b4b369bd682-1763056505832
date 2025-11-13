'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Jennifer Adams',
    role: 'CEO',
    company: 'GlobalTech Inc',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    quote: 'TechBusiness transformed our operations completely. Their team delivered beyond our expectations, and the results speak for themselves. Revenue increased by 150% in just 6 months.'
  },
  {
    name: 'Robert Mitchell',
    role: 'CTO',
    company: 'InnovateCorp',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    quote: 'Working with TechBusiness was a game-changer. Their technical expertise and strategic insights helped us scale our platform to handle millions of users seamlessly.'
  },
  {
    name: 'Lisa Wang',
    role: 'Founder',
    company: 'StartupHub',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    quote: 'The level of professionalism and dedication from TechBusiness is unmatched. They truly understood our vision and brought it to life with exceptional quality.'
  },
  {
    name: 'Marcus Johnson',
    role: 'Director of IT',
    company: 'Enterprise Solutions',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    quote: 'Outstanding service from start to finish. TechBusiness modernized our entire infrastructure, reducing costs by 40% while improving performance dramatically.'
  },
  {
    name: 'Amanda Foster',
    role: 'VP of Operations',
    company: 'TechVentures',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
    quote: 'The team at TechBusiness is simply brilliant. They delivered a complex enterprise solution on time and under budget. Highly recommend their services!'
  },
  {
    name: 'Daniel Brooks',
    role: 'Managing Director',
    company: 'Digital Dynamics',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    quote: 'TechBusiness exceeded all our expectations. Their innovative approach and attention to detail resulted in a product that our customers absolutely love.'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Don't just take our word for it - hear from businesses we've helped transform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center space-x-4 pt-6 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}