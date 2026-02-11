import React, { useState, useEffect } from 'react';

export default function App() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [showStories, setShowStories] = useState(false);
  const [stories, setStories] = useState([]);
  const [showAddStory, setShowAddStory] = useState(false);
  const [storyText, setStoryText] = useState('');
  const [storyName, setStoryName] = useState('');

  // Load stories from localStorage on mount
  useEffect(() => {
    const savedStories = localStorage.getItem('stories');
    if (savedStories) {
      setStories(JSON.parse(savedStories));
    } else {
      // Sample stories to get started
      const sampleStories = [
        {
          id: 1,
          name: 'Anonymous',
          text: 'I used to hate my body, but learning to love myself has changed everything. Now I celebrate what my body can do, not just how it looks.',
          date: 'Today',
          likes: 24
        },
        {
          id: 2,
          name: 'Sarah',
          text: 'Recovery taught me that my worth is not determined by my appearance. I am enough, exactly as I am right now.',
          date: 'Yesterday',
          likes: 18
        },
        {
          id: 3,
          name: 'Jordan',
          text: 'Every scar, every stretch mark, every "imperfection" tells a story of strength. I am beautiful in my authenticity.',
          date: '2 days ago',
          likes: 31
        }
      ];
      setStories(sampleStories);
      localStorage.setItem('stories', JSON.stringify(sampleStories));
    }
  }, []);

  const addStory = () => {
    if (storyText.trim()) {
      const newStory = {
        id: stories.length + 1,
        name: storyName.trim() || 'Anonymous',
        text: storyText,
        date: 'Just now',
        likes: 0
      };
      
      const updatedStories = [newStory, ...stories];
      setStories(updatedStories);
      localStorage.setItem('stories', JSON.stringify(updatedStories));
      
      setStoryText('');
      setStoryName('');
      setShowAddStory(false);
      alert('Your story has been shared! 💜');
    } else {
      alert('Please write a story first!');
    }
  };

  const likeStory = (id) => {
    const updatedStories = stories.map(story =>
      story.id === id ? { ...story, likes: story.likes + 1 } : story
    );
    setStories(updatedStories);
    localStorage.setItem('stories', JSON.stringify(updatedStories));
  };

  const menuItems = [
    {
      id: 'selfie',
      title: 'Take Empowering Selfie',
      icon: '🤳',
      description: 'Beautiful, Strong, Unique, Worthy',
      color: 'from-pink-500 to-red-500',
      buttonColor: 'bg-pink-600 hover:bg-pink-700'
    },
    {
      id: 'stories',
      title: 'Read Real Stories',
      icon: '📖',
      description: 'Share inspiring stories from real people',
      color: 'from-cyan-400 to-blue-500',
      buttonColor: 'bg-cyan-600 hover:bg-cyan-700'
    },
    {
      id: 'share',
      title: 'Share Campaign',
      icon: '📢',
      description: 'Spread #EverybodyIsBeautiful',
      color: 'from-green-400 to-teal-500',
      buttonColor: 'bg-green-600 hover:bg-green-700'
    }
  ];

  const handleMenuClick = (feature) => {
    console.log('Clicked: ' + feature);
    setSelectedFeature(feature);
    
    if (feature === 'selfie') {
      // Open Snapchat with custom filter
      const snapchatFilterUrl = 'https://snapchat.com/unlock/?b=d41d8cd98f00b204e9800998ecf8427e';
      window.location.href = snapchatFilterUrl;
    } else if (feature === 'stories') {
      setShowStories(true);
    } else {
      localStorage.setItem('selectedFeature', feature);
      
      const messages = {
        'share': 'Sharing options coming soon! 📢'
      };
      
      alert(messages[feature] || 'Feature coming soon!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 px-5 py-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">💜</div>
          <h1 className="text-5xl font-bold text-white mb-3">Everybody Is Beautiful</h1>
          <p className="text-xl text-purple-100">End Body Shaming, Celebrate Every Body</p>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`bg-gradient-to-br ${item.color} rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer`}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-white opacity-90 mb-6 text-sm">{item.description}</p>
              <button
                onClick={() => handleMenuClick(item.id)}
                className={`w-full ${item.buttonColor} text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200`}
              >
                Explore
              </button>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-10">
          <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Inspiring Body Positivity Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-bold text-purple-600 mb-2">🎥 Watch Video</h2>
          </div>
        </div>

        {/* Stories Modal */}
        {showStories && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl my-8">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 flex justify-between items-center sticky top-0">
                <h2 className="text-2xl font-bold text-white">📖 Real Stories</h2>
                <button
                  onClick={() => setShowStories(false)}
                  className="text-white text-3xl font-bold hover:opacity-80 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 max-h-96 overflow-y-auto">
                {/* Add Story Button */}
                <button
                  onClick={() => setShowAddStory(!showAddStory)}
                  className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all mb-6"
                >
                  ✍️ Share Your Story
                </button>

                {/* Add Story Form */}
                {showAddStory && (
                  <div className="bg-gray-50 p-6 rounded-xl mb-6 border-2 border-pink-300">
                    <input
                      type="text"
                      placeholder="Your name (optional)"
                      value={storyName}
                      onChange={(e) => setStoryName(e.target.value)}
                      className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    <textarea
                      placeholder="Share your body positivity story..."
                      value={storyText}
                      onChange={(e) => setStoryText(e.target.value)}
                      className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 h-24 resize-none"
                    />
                    <div className="flex gap-3">
                      <button
                        onClick={addStory}
                        className="flex-1 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded-lg hover:shadow-lg transition-all"
                      >
                        Post Story
                      </button>
                      <button
                        onClick={() => setShowAddStory(false)}
                        className="flex-1 bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-400 transition-all"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {/* Stories List */}
                <div className="space-y-4">
                  {stories.map((story) => (
                    <div key={story.id} className="bg-gray-50 p-5 rounded-xl border-l-4 border-cyan-500">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-gray-800">{story.name}</h3>
                          <p className="text-xs text-gray-500">{story.date}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 leading-relaxed">{story.text}</p>
                      <button
                        onClick={() => likeStory(story.id)}
                        className="flex items-center gap-1 text-pink-500 hover:text-pink-600 font-semibold transition-all"
                      >
                        ❤️ {story.likes}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center text-white py-8">
          <h3 className="text-2xl font-bold mb-3">Remember: Every body is beautiful, including yours!</h3>
        </footer>
      </div>
    </div>
  );
}