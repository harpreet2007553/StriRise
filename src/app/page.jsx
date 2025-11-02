"use client"

import { Users, Target, ArrowRight, Brain, ShoppingBag, BookOpen, MessageCircle, Facebook, Twitter, Linkedin, Mail, Phone, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import "./globals.css"

function App() {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const stories = [
    {
      name: "Sarah Chen",
      title: "Founder, Tech Solutions",
      image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "Stririse helped me turn my idea into a thriving business. The mentorship was invaluable."
    },
    {
      name: "Maria Rodriguez",
      title: "E-commerce Entrepreneur",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "The marketplace integration doubled my sales in just 3 months."
    },
    {
      name: "Amara Johnson",
      title: "Consultant & Coach",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "Connecting with other entrepreneurs here transformed my business journey."
    }
  ];

  const nextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStoryIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-pink-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-pink-600" />
              <span className="text-xl font-semibold text-pink-600">Stririse</span>
            </div>
            <button className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section
          className="relative py-32 px-6 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1200)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-white mb-6">
              Empowering Women Through Micro-Entrepreneurship
            </h1>
            <p className="text-xl text-pink-100 mb-10">
              Build your business with AI-powered mentorship, skill development, and a thriving community of women entrepreneurs.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-8 py-4 bg-pink-600 text-white rounded text-lg font-medium hover:bg-pink-700 transition inline-flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white text-pink-600 rounded text-lg font-medium hover:bg-pink-50 transition">
                Explore Courses
              </button>
            </div>
          </div>
        </section>

        <section className="bg-pink-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-lg mb-4">
                  <Brain className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Mentorship</h3>
                <p className="text-gray-600">
                  Get personalized guidance from AI and experienced mentors to accelerate your business growth.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-lg mb-4">
                  <Target className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Business Recommendations</h3>
                <p className="text-gray-600">
                  Receive data-driven insights and recommendations tailored to your business needs.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-lg mb-4">
                  <BookOpen className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Skill Development Hub</h3>
                <p className="text-gray-600">
                  Access courses and resources to master essential entrepreneurial skills.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-lg mb-4">
                  <ShoppingBag className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrated Marketplace</h3>
                <p className="text-gray-600">
                  Showcase and sell your products or services to a supportive community.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-lg mb-4">
                  <MessageCircle className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Peer Networking Forum</h3>
                <p className="text-gray-600">
                  Connect, collaborate, and learn from fellow women entrepreneurs around the world.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-lg mb-4">
                  <Users className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Support</h3>
                <p className="text-gray-600">
                  Build meaningful relationships and receive support from a thriving community.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Success Stories</h2>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-12 min-h-96">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3">
                    <img
                      src={stories[currentStoryIndex].image}
                      alt={stories[currentStoryIndex].name}
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-xl text-gray-700 mb-6 italic">
                      "{stories[currentStoryIndex].quote}"
                    </p>
                    <div>
                      <p className="text-xl font-semibold text-gray-900">
                        {stories[currentStoryIndex].name}
                      </p>
                      <p className="text-pink-600">
                        {stories[currentStoryIndex].title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={prevStory}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextStory}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="flex justify-center gap-2 mt-6">
                {stories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStoryIndex(index)}
                    className={`w-3 h-3 rounded-full transition ${
                      index === currentStoryIndex ? 'bg-pink-600' : 'bg-pink-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-pink-600 py-16">
          <div className="max-w-6xl mx-auto px-6 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-pink-100 text-lg mb-8">
              Join thousands of women entrepreneurs building successful businesses with Stririse.
            </p>
            <button className="px-8 py-4 bg-white text-pink-600 rounded text-lg font-medium hover:bg-pink-50 transition">
              Start Your Journey Today
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Users className="w-6 h-6 text-pink-600" />
                <span className="text-xl font-semibold text-white">Stririse</span>
              </div>
              <p className="text-gray-400">
                Empowering women entrepreneurs through technology and community.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-pink-600 transition">Home</a></li>
                <li><a href="#" className="hover:text-pink-600 transition">Features</a></li>
                <li><a href="#" className="hover:text-pink-600 transition">Courses</a></li>
                <li><a href="#" className="hover:text-pink-600 transition">Community</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-pink-600" />
                  <a href="mailto:info@stririse.com" className="hover:text-pink-600 transition">info@stririse.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-pink-600" />
                  <a href="tel:+1234567890" className="hover:text-pink-600 transition">+1 (234) 567-890</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-pink-600" />
                  <span>123 Business Ave, City, State</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-pink-600 transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-pink-600 transition">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-pink-600 transition">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2025 Stririse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

