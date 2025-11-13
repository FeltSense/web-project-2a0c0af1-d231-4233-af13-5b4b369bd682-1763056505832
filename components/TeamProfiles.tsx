'use client';

import { Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
  {
    name: 'Sarah Chen',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    bio: '15+ years leading technology companies. Former VP at Microsoft, passionate about innovation.',
    linkedin: '#',
    twitter: '#',
    email: 'sarah@techbusiness.com'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: 'Tech visionary with expertise in AI and cloud architecture. Built systems serving millions.',
    linkedin: '#',
    twitter: '#',
    email: 'michael@techbusiness.com'
  },
  {
    name: 'Emily Thompson',
    role: 'Head of Product Design',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    bio: 'Award-winning designer focused on creating intuitive experiences. Former lead at Apple.',
    linkedin: '#',
    twitter: '#',
    email: 'emily@techbusiness.com'
  },
  {
    name: 'David Kim',
    role: 'VP of Engineering',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    bio: 'Engineering leader building high-performance teams. Expert in scalable systems.',
    linkedin: '#',
    twitter: '#',
    email: 'david@techbusiness.com'
  },
  {
    name: 'Jessica Martinez',
    role: 'Head of Customer Success',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80',
    bio: 'Customer advocate ensuring client satisfaction. 10+ years in enterprise software.',
    linkedin: '#',
    twitter: '#',
    email: 'jessica@techbusiness.com'
  },
  {
    name: 'James Wilson',
    role: 'Chief Security Officer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    bio: 'Cybersecurity expert protecting enterprise systems. Former Pentagon security advisor.',
    linkedin: '#',
    twitter: '#',
    email: 'james@techbusiness.com'
  }
];

export default function TeamProfiles() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Industry leaders and innovators dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {member.bio}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={member.twitter}
                    className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}