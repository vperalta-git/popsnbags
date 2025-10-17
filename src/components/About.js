import React from 'react';
import Navigation from './Navigation';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <Navigation />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">About Pops & Bags</h2>
            <p className="text-xl text-red-100">Pop loud, drop low</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-gray-300 mb-6">
              Born from pure car passion, Pops & Bags started with a mission to make the car scene more 
              accessible to everyone — from beginners exploring their first mods to enthusiasts chasing 
              that perfect stance. We know that every car is more than just a ride; it's self-expression, 
              identity, and pride on four wheels.
            </p>
            <p className="text-gray-300 mb-8">
              That's why we focus on giving the community quality aftermarket parts that don't break the bank. 
              Whether you're upgrading your exhaust, going bagged, or just adding some clean details, we've got your back.
            </p>

            <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-gray-300 mb-8">
              To make car modification affordable, reliable, and exciting for every enthusiast. Pops & Bags 
              connects style and performance by offering trusted parts, honest support, and content that 
              inspires creativity in the local car community.
            </p>

            <h3 className="text-3xl font-bold text-white mb-6">Why Choose Us?</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">Quality You Can Trust</h4>
                <p className="text-gray-300">
                  We carefully select brands and parts that meet or exceed standards — tested by enthusiasts, for enthusiasts.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">Built for the Community</h4>
                <p className="text-gray-300">
                  Our team is made up of car lovers who know the scene. We're here to help you find what fits, what works, and what makes your build stand out.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">Fast & Reliable Shipping</h4>
                <p className="text-gray-300">
                  We know how important time is when you're building your car. That's why we make sure orders are processed fast and arrive safely.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">Value for Every Build</h4>
                <p className="text-gray-300">
                  We keep prices fair without cutting corners — giving you access to high-quality alternatives to expensive imports.
                </p>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-white mb-6">Learn. Build. Drive.</h3>
            <p className="text-gray-300 mb-8">
              We also provide DIY installation videos and setup guides for those who want to get hands-on. 
              Whether you're new or experienced, our goal is to make every build a learning experience.
            </p>

            <div className="text-center mt-12 p-8 bg-gradient-to-r from-red-600 to-red-800 rounded-lg">
              <h4 className="text-2xl font-bold text-white mb-4">Pop loud, drop low, be yourself — define who you are.</h4>
              <p className="text-red-100">Your build, your identity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Our Impact</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">5,000+</div>
              <div className="text-gray-300">Happy Builders</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">25,000+</div>
              <div className="text-gray-300">Parts Sold</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">98%</div>
              <div className="text-gray-300">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">24/7</div>
              <div className="text-gray-300">Community Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Pops & Bags</h3>
            <p className="text-gray-400 mb-4">Built for passion, driven by style</p>
            <p className="text-gray-500">&copy; 2025 Pops & Bags. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;