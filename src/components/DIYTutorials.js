import React, { useState } from 'react';
import Navigation from './Navigation';

const DIYTutorials = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const tutorials = [
    {
      id: 1,
      title: "How to Install Cold Air Intake",
      category: "engine",
      difficulty: "Beginner",
      duration: "15 mins",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoId: "dQw4w9WgXcQ",
      description: "Step-by-step guide to installing a cold air intake system for better engine performance.",
      tools: ["Screwdriver set", "Socket wrench", "Pliers"],
      parts: ["Cold Air Intake Kit", "Clamps", "Air Filter"]
    },
    {
      id: 2,
      title: "Installing Coilover Suspension",
      category: "suspension",
      difficulty: "Advanced",
      duration: "45 mins",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoId: "dQw4w9WgXcQ",
      description: "Professional guide to installing coilover suspension for improved handling and stance.",
      tools: ["Jack", "Jack stands", "Spring compressor", "Socket set"],
      parts: ["Coilover kit", "Mounting hardware", "Alignment bolts"]
    },
    {
      id: 3,
      title: "Wheel and Tire Installation",
      category: "wheels",
      difficulty: "Beginner",
      duration: "20 mins",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoId: "dQw4w9WgXcQ",
      description: "Learn how to properly mount and balance wheels and tires.",
      tools: ["Tire iron", "Jack", "Torque wrench"],
      parts: ["Wheels", "Tires", "Lug nuts", "Valve stems"]
    },
    {
      id: 4,
      title: "Body Kit Installation Tips",
      category: "body",
      difficulty: "Intermediate",
      duration: "60 mins",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoId: "dQw4w9WgXcQ",
      description: "Professional tips for installing body kits, spoilers, and exterior accessories.",
      tools: ["Drill", "Measuring tape", "Level", "Trim removal tools"],
      parts: ["Body kit pieces", "Mounting hardware", "Adhesive"]
    },
    {
      id: 5,
      title: "Exhaust System Installation",
      category: "exhaust",
      difficulty: "Intermediate",
      duration: "35 mins",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoId: "dQw4w9WgXcQ",
      description: "Complete guide to installing cat-back exhaust systems for better sound and performance.",
      tools: ["Jack", "Jack stands", "Reciprocating saw", "Socket set"],
      parts: ["Exhaust system", "Gaskets", "Clamps", "Hangers"]
    },
    {
      id: 6,
      title: "Brake Pad Replacement",
      category: "brakes",
      difficulty: "Intermediate",
      duration: "30 mins",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoId: "dQw4w9WgXcQ",
      description: "Safety-focused guide to replacing brake pads and rotors.",
      tools: ["C-clamp", "Socket set", "Brake cleaner", "Gloves"],
      parts: ["Brake pads", "Brake rotors", "Brake fluid"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tutorials', icon: '🔧' },
    { id: 'engine', name: 'Engine', icon: '⚙️' },
    { id: 'suspension', name: 'Suspension', icon: '🔩' },
    { id: 'wheels', name: 'Wheels & Tires', icon: '🛞' },
    { id: 'body', name: 'Body Kit', icon: '🚗' },
    { id: 'exhaust', name: 'Exhaust', icon: '💨' },
    { id: 'brakes', name: 'Brakes', icon: '🛑' }
  ];

  const filteredTutorials = selectedCategory === 'all' 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category === selectedCategory);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-600';
      case 'Intermediate': return 'bg-yellow-600';
      case 'Advanced': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">DIY Installation Tutorials</h2>
            <p className="text-xl text-red-100">Learn to install your parts like a pro</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Categories */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Categories</h3>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Tutorials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTutorials.map((tutorial) => (
              <div key={tutorial.id} className="bg-gray-700 rounded-lg overflow-hidden hover:bg-gray-600 transition duration-300">
                
                {/* Video Thumbnail */}
                <div className="relative">
                  <img 
                    src={tutorial.thumbnail} 
                    alt={tutorial.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                    <button className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition duration-300">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Duration badge */}
                  <div className="absolute top-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {tutorial.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getDifficultyColor(tutorial.difficulty)}`}>
                      {tutorial.difficulty}
                    </span>
                    <span className="text-gray-400 text-sm capitalize">
                      {categories.find(cat => cat.id === tutorial.category)?.icon} {tutorial.category}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-white mb-3">{tutorial.title}</h4>
                  <p className="text-gray-300 mb-4 text-sm">{tutorial.description}</p>
                  
                  {/* Tools needed */}
                  <div className="mb-4">
                    <h5 className="text-white font-medium mb-2">Tools Needed:</h5>
                    <div className="flex flex-wrap gap-1">
                      {tutorial.tools.map((tool, index) => (
                        <span key={index} className="bg-gray-600 text-gray-300 px-2 py-1 rounded text-xs">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Parts needed */}
                  <div className="mb-6">
                    <h5 className="text-white font-medium mb-2">Parts Needed:</h5>
                    <div className="flex flex-wrap gap-1">
                      {tutorial.parts.map((part, index) => (
                        <span key={index} className="bg-red-600 text-white px-2 py-1 rounded text-xs">
                          {part}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${tutorial.videoId}`, '_blank')}
                    className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    Watch Tutorial
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No tutorials message */}
          {filteredTutorials.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-white mb-4">No tutorials found</h3>
              <p className="text-gray-400">We're working on adding more tutorials for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-white mb-4">Need Help Finding Parts?</h3>
          <p className="text-gray-300 mb-8">
            Browse our catalog to find the exact parts featured in these tutorials.
          </p>
          <button 
            onClick={() => window.location.href = '/products'}
            className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300"
          >
            Shop Parts
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
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

export default DIYTutorials;