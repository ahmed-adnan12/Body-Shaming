// // import React, { useState, useEffect } from 'react';

// // export default function App() {
// //   const [selectedFeature, setSelectedFeature] = useState(null);
// //   const [showStories, setShowStories] = useState(false);
// //   const [stories, setStories] = useState([]);
// //   const [showAddStory, setShowAddStory] = useState(false);
// //   const [storyText, setStoryText] = useState('');
// //   const [storyName, setStoryName] = useState('');

// //   // Load stories from localStorage on mount
// //   useEffect(() => {
// //     const savedStories = localStorage.getItem('stories');
// //     if (savedStories) {
// //       setStories(JSON.parse(savedStories));
// //     } else {
// //       // Sample stories to get started
// //       const sampleStories = [
// //         {
// //           id: 1,
// //           name: 'Anonymous',
// //           text: 'I used to hate my body, but learning to love myself has changed everything. Now I celebrate what my body can do, not just how it looks.',
// //           date: 'Today',
// //           likes: 24
// //         },
// //         {
// //           id: 2,
// //           name: 'Sarah',
// //           text: 'Recovery taught me that my worth is not determined by my appearance. I am enough, exactly as I am right now.',
// //           date: 'Yesterday',
// //           likes: 18
// //         },
// //         {
// //           id: 3,
// //           name: 'Jordan',
// //           text: 'Every scar, every stretch mark, every "imperfection" tells a story of strength. I am beautiful in my authenticity.',
// //           date: '2 days ago',
// //           likes: 31
// //         }
// //       ];
// //       setStories(sampleStories);
// //       localStorage.setItem('stories', JSON.stringify(sampleStories));
// //     }
// //   }, []);

// //   const addStory = () => {
// //     if (storyText.trim()) {
// //       const newStory = {
// //         id: stories.length + 1,
// //         name: storyName.trim() || 'Anonymous',
// //         text: storyText,
// //         date: 'Just now',
// //         likes: 0
// //       };
      
// //       const updatedStories = [newStory, ...stories];
// //       setStories(updatedStories);
// //       localStorage.setItem('stories', JSON.stringify(updatedStories));
      
// //       setStoryText('');
// //       setStoryName('');
// //       setShowAddStory(false);
// //       alert('Your story has been shared! 💜');
// //     } else {
// //       alert('Please write a story first!');
// //     }
// //   };

// //   const likeStory = (id) => {
// //     const updatedStories = stories.map(story =>
// //       story.id === id ? { ...story, likes: story.likes + 1 } : story
// //     );
// //     setStories(updatedStories);
// //     localStorage.setItem('stories', JSON.stringify(updatedStories));
// //   };

// //   const menuItems = [
// //     {
// //       id: 'selfie',
// //       title: 'Take Empowering Selfie',
// //       icon: '🤳',
// //       description: 'Beautiful, Strong, Unique, Worthy',
// //       color: 'from-pink-500 to-red-500',
// //       buttonColor: 'bg-pink-600 hover:bg-pink-700'
// //     },
// //     {
// //       id: 'stories',
// //       title: 'Read Real Stories',
// //       icon: '📖',
// //       description: 'Share inspiring stories from real people',
// //       color: 'from-cyan-400 to-blue-500',
// //       buttonColor: 'bg-cyan-600 hover:bg-cyan-700'
// //     },
// //     {
// //       id: 'share',
// //       title: 'Share Campaign',
// //       icon: '📢',
// //       description: 'Spread #EverybodyIsBeautiful',
// //       color: 'from-green-400 to-teal-500',
// //       buttonColor: 'bg-green-600 hover:bg-green-700'
// //     }
// //   ];

// //   const handleMenuClick = (feature) => {
// //     console.log('Clicked: ' + feature);
// //     setSelectedFeature(feature);
    
// //     if (feature === 'selfie') {
// //       // Open Snapchat with custom filter
// //       const snapchatFilterUrl = 'https://snapchat.com/unlock/?b=d41d8cd98f00b204e9800998ecf8427e';
// //       window.location.href = snapchatFilterUrl;
// //     } else if (feature === 'stories') {
// //       setShowStories(true);
// //     } else {
// //       localStorage.setItem('selectedFeature', feature);
      
// //       const messages = {
// //         'share': 'Sharing options coming soon! 📢'
// //       };
      
// //       alert(messages[feature] || 'Feature coming soon!');
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 px-5 py-10">
// //       <div className="max-w-4xl mx-auto">
        
// //         {/* Header */}
// //         <div className="text-center mb-12">
// //           <div className="text-6xl mb-4">💜</div>
// //           <h1 className="text-5xl font-bold text-white mb-3">Everybody Is Beautiful</h1>
// //           <p className="text-xl text-purple-100">End Body Shaming, Celebrate Every Body</p>
// //         </div>

// //         {/* Menu Cards Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
// //           {menuItems.map((item) => (
// //             <div
// //               key={item.id}
// //               className={`bg-gradient-to-br ${item.color} rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer`}
// //             >
// //               <div className="text-5xl mb-4">{item.icon}</div>
// //               <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
// //               <p className="text-white opacity-90 mb-6 text-sm">{item.description}</p>
// //               <button
// //                 onClick={() => handleMenuClick(item.id)}
// //                 className={`w-full ${item.buttonColor} text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200`}
// //               >
// //                 Explore
// //               </button>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Video Section */}
// //         <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-10">
// //           <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
// //             <iframe
// //               className="absolute inset-0 w-full h-full"
// //               src="https://www.youtube.com/embed/dQw4w9WgXcQ"
// //               title="Inspiring Body Positivity Video"
// //               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// //               allowFullScreen
// //             ></iframe>
// //           </div>
// //           <div className="p-8">
// //             <h2 className="text-3xl font-bold text-purple-600 mb-2">🎥 Watch Video</h2>
// //           </div>
// //         </div>

// //         {/* Stories Modal */}
// //         {showStories && (
// //           <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 overflow-y-auto">
// //             <div className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl my-8">
// //               <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 flex justify-between items-center sticky top-0">
// //                 <h2 className="text-2xl font-bold text-white">📖 Real Stories</h2>
// //                 <button
// //                   onClick={() => setShowStories(false)}
// //                   className="text-white text-3xl font-bold hover:opacity-80 cursor-pointer"
// //                 >
// //                   ✕
// //                 </button>
// //               </div>

// //               <div className="p-6 max-h-96 overflow-y-auto">
// //                 {/* Add Story Button */}
// //                 <button
// //                   onClick={() => setShowAddStory(!showAddStory)}
// //                   className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all mb-6"
// //                 >
// //                   ✍️ Share Your Story
// //                 </button>

// //                 {/* Add Story Form */}
// //                 {showAddStory && (
// //                   <div className="bg-gray-50 p-6 rounded-xl mb-6 border-2 border-pink-300">
// //                     <input
// //                       type="text"
// //                       placeholder="Your name (optional)"
// //                       value={storyName}
// //                       onChange={(e) => setStoryName(e.target.value)}
// //                       className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
// //                     />
// //                     <textarea
// //                       placeholder="Share your body positivity story..."
// //                       value={storyText}
// //                       onChange={(e) => setStoryText(e.target.value)}
// //                       className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 h-24 resize-none"
// //                     />
// //                     <div className="flex gap-3">
// //                       <button
// //                         onClick={addStory}
// //                         className="flex-1 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded-lg hover:shadow-lg transition-all"
// //                       >
// //                         Post Story
// //                       </button>
// //                       <button
// //                         onClick={() => setShowAddStory(false)}
// //                         className="flex-1 bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-400 transition-all"
// //                       >
// //                         Cancel
// //                       </button>
// //                     </div>
// //                   </div>
// //                 )}

// //                 {/* Stories List */}
// //                 <div className="space-y-4">
// //                   {stories.map((story) => (
// //                     <div key={story.id} className="bg-gray-50 p-5 rounded-xl border-l-4 border-cyan-500">
// //                       <div className="flex justify-between items-start mb-2">
// //                         <div>
// //                           <h3 className="font-bold text-gray-800">{story.name}</h3>
// //                           <p className="text-xs text-gray-500">{story.date}</p>
// //                         </div>
// //                       </div>
// //                       <p className="text-gray-700 mb-4 leading-relaxed">{story.text}</p>
// //                       <button
// //                         onClick={() => likeStory(story.id)}
// //                         className="flex items-center gap-1 text-pink-500 hover:text-pink-600 font-semibold transition-all"
// //                       >
// //                         ❤️ {story.likes}
// //                       </button>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {/* Footer */}
// //         <footer className="text-center text-white py-8">
// //           <h3 className="text-2xl font-bold mb-3">Remember: Every body is beautiful, including yours!</h3>
// //         </footer>
// //       </div>
// //     </div>
// //   );
// // }
// import React, { useState, useEffect } from 'react';


// export function Landing() {
//   const [selectedFeature, setSelectedFeature] = useState(null);
//   const [showStories, setShowStories] = useState(false);
//   const [stories, setStories] = useState([]);
//   const [showAddStory, setShowAddStory] = useState(false);
//   const [storyText, setStoryText] = useState('');
//   const [storyName, setStoryName] = useState('');
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [showShareModal, setShowShareModal] = useState(false);
//   const [activeTab, setActiveTab] = useState('home');
  

//   // Load stories from localStorage on mount
//   useEffect(() => {
//     const savedStories = localStorage.getItem('bodyPositivityStories');
//     if (savedStories) {
//       setStories(JSON.parse(savedStories));
//     } else {
//       const sampleStories = [
//         {
//           id: 1,
//           name: 'Anonymous',
//           text: 'I used to hate my body, but learning to love myself has changed everything. Now I celebrate what my body can do, not just how it looks.',
//           date: 'Today',
//           likes: 24,
//           image: null
//         },
//         {
//           id: 2,
//           name: 'Sarah',
//           text: 'Recovery taught me that my worth is not determined by my appearance. I am enough, exactly as I am right now.',
//           date: 'Yesterday',
//           likes: 18,
//           image: null
//         },
//         {
//           id: 3,
//           name: 'Jordan',
//           text: 'Every scar, every stretch mark, every "imperfection" tells a story of strength. I am beautiful in my authenticity.',
//           date: '2 days ago',
//           likes: 31,
//           image: null
//         }
//       ];
//       setStories(sampleStories);
//       localStorage.setItem('bodyPositivityStories', JSON.stringify(sampleStories));
//     }
//   }, []);

//   useEffect(() => {
//   // Track page visit on component load
//   const visitCount = localStorage.getItem('visitCount');
//   const newCount = visitCount ? parseInt(visitCount) + 1 : 1;
//   localStorage.setItem('visitCount', newCount);
  
//   console.log('Total visits:', newCount);
// }, []);

//   const saveStoriesToStorage = (updatedStories) => {
//     setStories(updatedStories);
//     localStorage.setItem('bodyPositivityStories', JSON.stringify(updatedStories));
//   };

//   const addStory = () => {
//     if (storyText.trim()) {
//       const newStory = {
//         id: Date.now(),
//         name: storyName.trim() || 'Anonymous',
//         text: storyText,
//         date: 'Just now',
//         likes: 0,
//         image: uploadedImage
//       };
      
//       const updatedStories = [newStory, ...stories];
//       saveStoriesToStorage(updatedStories);
      
//       setStoryText('');
//       setStoryName('');
//       setUploadedImage(null);
//       setShowAddStory(false);
//     }
//   };

//   const deleteStory = (id) => {
//     const updatedStories = stories.filter(story => story.id !== id);
//     saveStoriesToStorage(updatedStories);
//   };

//   const likeStory = (id) => {
//     const updatedStories = stories.map(story =>
//       story.id === id ? { ...story, likes: story.likes + 1 } : story
//     );
//     saveStoriesToStorage(updatedStories);
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setUploadedImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const openSnapchat = () => {
//     // Deep link to open Snapchat app
//     const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
//     if (isMobile) {
//       // Try to open Snapchat app directly
//       window.location.href = 'snapchat://';
      
//       // Fallback after 2 seconds if app isn't installed
//       setTimeout(() => {
//         window.location.href = 'https://www.snapchat.com';
//       }, 2000);
//     } else {
//       // Desktop - open Snapchat web
//       window.open('https://www.snapchat.com', '_blank');
//     }
//   };

//   const shareOnSocial = (platform) => {
//     const message = encodeURIComponent('Everybody Is Beautiful! 💜 Join the movement to end body shaming. #EverybodyIsBeautiful #BodyPositivity');
//     const url = encodeURIComponent(window.location.href);
    
//     const urls = {
//       twitter: `https://twitter.com/intent/tweet?text=${message}&url=${url}`,
//       facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${message}`,
//       whatsapp: `https://wa.me/?text=${message}%20${url}`,
//       instagram: 'https://www.instagram.com'
//     };
    
//     window.open(urls[platform], '_blank');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
//       {/* Animated Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
//         <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>
//       </div>

//       <div className="relative z-10 px-4 py-8 max-w-6xl mx-auto">
        
//         {/* Navigation */}
//         <nav className="flex justify-center gap-4 mb-8">
//           {['home', 'stories', 'share'].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
//                 activeTab === tab
//                   ? 'bg-white text-purple-900 shadow-lg shadow-white/20'
//                   : 'bg-white/10 text-white hover:bg-white/20'
//               }`}
//             >
//               {tab.charAt(0).toUpperCase() + tab.slice(1)}
//             </button>
//           ))}
//         </nav>

//         {/* Header */}
//         <header className="text-center mb-16">
//           <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 shadow-2xl shadow-purple-500/50 mb-6 animate-bounce">
//             <span className="text-5xl">💜</span>
//           </div>
//           <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 mb-4">
//             Everybody Is Beautiful
//           </h1>
//           <p className="text-xl text-purple-200 max-w-2xl mx-auto">
//             Join our movement to end body shaming and celebrate every body in all its unique beauty
//           </p>
//         </header>

//         {/* Home Tab */}
//         {activeTab === 'home' && (
//           <>
//             {/* Feature Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
//               {/* Selfie Card */}
//               <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-500 to-pink-600 p-1">
//                 <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="relative bg-gray-900/90 rounded-[22px] p-8 h-full">
//                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center mb-6 shadow-lg">
//                     <span className="text-3xl">🤳</span>
//                   </div>
//                   <h3 className="text-2xl font-bold text-white mb-3">Empowering Selfie</h3>
//                   <p className="text-gray-400 mb-6">Open Snapchat to take an empowering selfie with our custom filter</p>
//                   <button
//                     onClick={openSnapchat}
//                     className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300 transform hover:scale-105"
//                   >
//                     Open Snapchat App
//                   </button>
//                 </div>
//               </div>

//               {/* Stories Card */}
//               <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 p-1">
//                 <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="relative bg-gray-900/90 rounded-[22px] p-8 h-full">
//                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-6 shadow-lg">
//                     <span className="text-3xl">📖</span>
//                   </div>
//                   <h3 className="text-2xl font-bold text-white mb-3">Real Stories</h3>
//                   <p className="text-gray-400 mb-6">Read and share inspiring stories from real people on their journey</p>
//                   <button
//                     onClick={() => setActiveTab('stories')}
//                     className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
//                   >
//                     Read Stories
//                   </button>
//                 </div>
//               </div>

//               {/* Share Card */}
//               <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 p-1">
//                 <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="relative bg-gray-900/90 rounded-[22px] p-8 h-full">
//                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mb-6 shadow-lg">
//                     <span className="text-3xl">📢</span>
//                   </div>
//                   <h3 className="text-2xl font-bold text-white mb-3">Spread the Word</h3>
//                   <p className="text-gray-400 mb-6">Share our campaign and help us reach more people with positivity</p>
//                   <button
//                     onClick={() => setActiveTab('share')}
//                     className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105"
//                   >
//                     Share Campaign
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Inspirational Quote Section */}
//             <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 mb-16">
//               <div className="flex flex-col md:flex-row items-center gap-8">
//                 <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center flex-shrink-0">
//                   <span className="text-6xl">✨</span>
//                 </div>
//                 <div className="text-center md:text-left">
//                   <blockquote className="text-2xl md:text-3xl font-light text-white italic mb-4">
//                     "Your body is not an ornament, it's the vehicle to your dreams."
//                   </blockquote>
//                   <p className="text-purple-300">— Body Positivity Movement</p>
//                 </div>
//               </div>
//             </div>

//             {/* Stats Section */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
//               {[
//                 { number: '10K+', label: 'Supporters' },
//                 { number: stories.length, label: 'Stories Shared' },
//                 { number: '50+', label: 'Countries' },
//                 { number: '∞', label: 'Love' }
//               ].map((stat, index) => (
//                 <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
//                   <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-cyan-300 mb-2">
//                     {stat.number}
//                   </div>
//                   <div className="text-purple-300 text-sm">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}

//         {/* Stories Tab */}
//         {activeTab === 'stories' && (
//           <div className="space-y-8">
//             {/* Add Story Button */}
//             <button
//               onClick={() => setShowAddStory(!showAddStory)}
//               className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 px-8 rounded-2xl hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center gap-3"
//             >
//               <span className="text-2xl">✍️</span>
//               <span>Share Your Story</span>
//             </button>

//             {/* Add Story Form */}
//             {showAddStory && (
//               <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
//                 <h3 className="text-2xl font-bold text-white mb-6">Share Your Journey</h3>
                
//                 <div className="space-y-4">
//                   <input
//                     type="text"
//                     placeholder="Your name (optional - leave blank for Anonymous)"
//                     value={storyName}
//                     onChange={(e) => setStoryName(e.target.value)}
//                     className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   />
                  
//                   <textarea
//                     placeholder="Share your body positivity story. What makes you feel beautiful? How have you learned to love yourself?"
//                     value={storyText}
//                     onChange={(e) => setStoryText(e.target.value)}
//                     className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 h-32 resize-none"
//                   />
                  
//                   {/* Image Upload */}
//                   <div className="flex flex-col items-center gap-4">
//                     <label className="w-full cursor-pointer">
//                       <div className="p-6 border-2 border-dashed border-white/30 rounded-xl hover:border-purple-400 transition-colors text-center">
//                         {uploadedImage ? (
//                           <div className="relative">
//                             <img src={uploadedImage} alt="Uploaded" className="max-h-48 mx-auto rounded-lg" />
//                             <button
//                               onClick={(e) => {
//                                 e.preventDefault();
//                                 setUploadedImage(null);
//                               }}
//                               className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
//                             >
//                               ×
//                             </button>
//                           </div>
//                         ) : (
//                           <div className="text-gray-400">
//                             <span className="text-3xl block mb-2">📷</span>
//                             <span>Click to upload an image (optional)</span>
//                           </div>
//                         )}
//                       </div>
//                       <input
//                         type="file"
//                         accept="image/*"
//                         onChange={handleImageUpload}
//                         className="hidden"
//                       />
//                     </label>
//                   </div>
                  
//                   <div className="flex gap-4">
//                     <button
//                       onClick={addStory}
//                       disabled={!storyText.trim()}
//                       className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                       Post Story 💜
//                     </button>
//                     <button
//                       onClick={() => {
//                         setShowAddStory(false);
//                         setUploadedImage(null);
//                         setStoryText('');
//                         setStoryName('');
//                       }}
//                       className="px-6 py-4 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all"
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Stories List */}
//             <div className="space-y-6">
//               {stories.length === 0 ? (
//                 <div className="text-center py-16">
//                   <span className="text-6xl block mb-4">📝</span>
//                   <p className="text-purple-300 text-xl">No stories yet. Be the first to share!</p>
//                 </div>
//               ) : (
//                 stories.map((story) => (
//                   <div key={story.id} className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
//                     <div className="flex items-start gap-4">
//                       <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center flex-shrink-0">
//                         <span className="text-white font-bold">{story.name.charAt(0).toUpperCase()}</span>
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex justify-between items-start mb-2">
//                           <div>
//                             <h4 className="font-bold text-white">{story.name}</h4>
//                             <p className="text-purple-400 text-sm">{story.date}</p>
//                           </div>
//                           <button
//                             onClick={() => deleteStory(story.id)}
//                             className="text-gray-500 hover:text-red-400 transition-colors"
//                           >
//                             🗑️
//                           </button>
//                         </div>
//                         <p className="text-gray-300 leading-relaxed mb-4">{story.text}</p>
//                         {story.image && (
//                           <img src={story.image} alt="Story" className="rounded-xl max-h-64 mb-4" />
//                         )}
//                         <button
//                           onClick={() => likeStory(story.id)}
//                           className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
//                         >
//                           <span className="text-xl">❤️</span>
//                           <span className="font-semibold">{story.likes}</span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>
//           </div>
//         )}

//         {/* Share Tab */}
//         {activeTab === 'share' && (
//           <div className="space-y-8">
//             <div className="text-center mb-8">
//               <h2 className="text-4xl font-bold text-white mb-4">Spread the Love 💜</h2>
//               <p className="text-purple-300 text-lg">Help us reach more people with our message of body positivity</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Twitter */}
//               <button
//                 onClick={() => shareOnSocial('twitter')}
//                 className="flex items-center gap-4 p-6 bg-[#1DA1F2]/20 hover:bg-[#1DA1F2]/30 rounded-2xl border border-[#1DA1F2]/30 transition-all group"
//               >
//                 <div className="w-14 h-14 bg-[#1DA1F2] rounded-xl flex items-center justify-center">
//                   <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
//                   </svg>
//                 </div>
//                 <div className="text-left">
//                   <h3 className="text-xl font-bold text-white group-hover:text-[#1DA1F2] transition-colors">Twitter / X</h3>
//                   <p className="text-gray-400">Share with your followers</p>
//                 </div>
//               </button>

//               {/* Facebook */}
//               <button
//                 onClick={() => shareOnSocial('facebook')}
//                 className="flex items-center gap-4 p-6 bg-[#4267B2]/20 hover:bg-[#4267B2]/30 rounded-2xl border border-[#4267B2]/30 transition-all group"
//               >
//                 <div className="w-14 h-14 bg-[#4267B2] rounded-xl flex items-center justify-center">
//                   <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                   </svg>
//                 </div>
//                 <div className="text-left">
//                   <h3 className="text-xl font-bold text-white group-hover:text-[#4267B2] transition-colors">Facebook</h3>
//                   <p className="text-gray-400">Share with friends</p>
//                 </div>
//               </button>

//               {/* WhatsApp */}
//               <button
//                 onClick={() => shareOnSocial('whatsapp')}
//                 className="flex items-center gap-4 p-6 bg-[#25D366]/20 hover:bg-[#25D366]/30 rounded-2xl border border-[#25D366]/30 transition-all group"
//               >
//                 <div className="w-14 h-14 bg-[#25D366] rounded-xl flex items-center justify-center">
//                   <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
//                   </svg>
//                 </div>
//                 <div className="text-left">
//                   <h3 className="text-xl font-bold text-white group-hover:text-[#25D366] transition-colors">WhatsApp</h3>
//                   <p className="text-gray-400">Send to contacts</p>
//                 </div>
//               </button>

//               {/* Instagram */}
//               <button
//                 onClick={() => shareOnSocial('instagram')}
//                 className="flex items-center gap-4 p-6 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 hover:from-purple-500/30 hover:via-pink-500/30 hover:to-orange-500/30 rounded-2xl border border-pink-500/30 transition-all group"
//               >
//                 <div className="w-14 h-14 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center">
//                   <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                   </svg>
//                 </div>
//                 <div className="text-left">
//                   <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">Instagram</h3>
//                   <p className="text-gray-400">Tag us in your posts</p>
//                 </div>
//               </button>
//             </div>

//             {/* Copy Link */}
//             <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
//               <h3 className="text-lg font-semibold text-white mb-3">Copy Campaign Link</h3>
//               <div className="flex gap-3">
//                 <input
//                   type="text"
//                   readOnly
//                   value="everybodyisbeautiful.org"
//                   className="flex-1 p-4 bg-white/10 border border-white/20 rounded-xl text-white"
//                 />
//                 <button
//                   onClick={() => {
//                     navigator.clipboard.writeText(window.location.href);
//                     alert('Link copied! 📋');
//                   }}
//                   className="px-6 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors"
//                 >
//                   Copy
//                 </button>
//               </div>
//             </div>

//             {/* Hashtag Section */}
//             <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-8 text-center border border-pink-500/30">
//               <h3 className="text-2xl font-bold text-white mb-4">Use Our Hashtag</h3>
//               <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-cyan-300 mb-4">
//                 #EverybodyIsBeautiful
//               </p>
//               <p className="text-purple-300">Use this hashtag when posting to join the conversation!</p>
//             </div>
//           </div>
//         )}

//         {/* Footer */}
//         <footer className="mt-16 text-center">
//           <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
//             <p className="text-2xl font-light text-white mb-4">
//               Remember: Every body is beautiful, including yours! 💜
//             </p>
//             <div className="flex justify-center gap-4 text-purple-400">
//               <span>Made with 💜</span>
//               <span>•</span>
//               <span>Body Positivity Movement</span>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// }
// export default Landing;


import React, { useState, useEffect } from 'react';
import { useAnalytics } from './useAnalytics';
import AnalyticsDashboard from './AnalyticsDashboard';

export function Landing() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [showStories, setShowStories] = useState(false);
  const [stories, setStories] = useState([]);
  const [showAddStory, setShowAddStory] = useState(false);
  const [storyText, setStoryText] = useState('');
  const [storyName, setStoryName] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  
  // Initialize analytics hook
  const { trackClick, trackTabChange, trackStoryAction } = useAnalytics();

  // Load stories from localStorage on mount
  useEffect(() => {
    const savedStories = localStorage.getItem('bodyPositivityStories');
    if (savedStories) {
      setStories(JSON.parse(savedStories));
    } else {
      const sampleStories = [
        {
          id: 1,
          name: 'Anonymous',
          text: 'I used to hate my body, but learning to love myself has changed everything. Now I celebrate what my body can do, not just how it looks.',
          date: 'Today',
          likes: 24,
          image: null
        },
        {
          id: 2,
          name: 'Sarah',
          text: 'Recovery taught me that my worth is not determined by my appearance. I am enough, exactly as I am right now.',
          date: 'Yesterday',
          likes: 18,
          image: null
        },
        {
          id: 3,
          name: 'Jordan',
          text: 'Every scar, every stretch mark, every "imperfection" tells a story of strength. I am beautiful in my authenticity.',
          date: '2 days ago',
          likes: 31,
          image: null
        }
      ];
      setStories(sampleStories);
      localStorage.setItem('bodyPositivityStories', JSON.stringify(sampleStories));
    }
  }, []);

  const saveStoriesToStorage = (updatedStories) => {
    setStories(updatedStories);
    localStorage.setItem('bodyPositivityStories', JSON.stringify(updatedStories));
  };

  const addStory = () => {
    if (storyText.trim()) {
      trackStoryAction('story_posted', storyName || 'Anonymous');
      
      const newStory = {
        id: Date.now(),
        name: storyName.trim() || 'Anonymous',
        text: storyText,
        date: 'Just now',
        likes: 0,
        image: uploadedImage
      };
      
      const updatedStories = [newStory, ...stories];
      saveStoriesToStorage(updatedStories);
      
      setStoryText('');
      setStoryName('');
      setUploadedImage(null);
      setShowAddStory(false);
    }
  };

  const deleteStory = (id) => {
    trackStoryAction('story_deleted', 'Story removed');
    const updatedStories = stories.filter(story => story.id !== id);
    saveStoriesToStorage(updatedStories);
  };

  const likeStory = (id) => {
    trackStoryAction('story_liked', 'Story liked');
    const updatedStories = stories.map(story =>
      story.id === id ? { ...story, likes: story.likes + 1 } : story
    );
    saveStoriesToStorage(updatedStories);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const openSnapchat = () => {
    trackClick('Open Snapchat');
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      window.location.href = 'snapchat://';
      
      setTimeout(() => {
        window.location.href = 'https://www.snapchat.com';
      }, 2000);
    } else {
      window.open('https://www.snapchat.com', '_blank');
    }
  };

  const shareOnSocial = (platform) => {
    trackClick(`Share on ${platform}`);
    const message = encodeURIComponent('Everybody Is Beautiful! 💜 Join the movement to end body shaming. #EverybodyIsBeautiful #BodyPositivity');
    const url = encodeURIComponent(window.location.href);
    
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${message}&url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${message}`,
      whatsapp: `https://wa.me/?text=${message}%20${url}`,
      instagram: 'https://www.instagram.com'
    };
    
    window.open(urls[platform], '_blank');
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    trackTabChange(tab);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 px-4 py-8 max-w-6xl mx-auto">
        
        {/* Navigation */}
        <nav className="flex justify-center gap-4 mb-8">
          {['home', 'stories', 'share'].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-white text-purple-900 shadow-lg shadow-white/20'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>

        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 shadow-2xl shadow-purple-500/50 mb-6 animate-bounce">
            <span className="text-5xl">💜</span>
          </div>
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 mb-4">
            Everybody Is Beautiful
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Join our movement to end body shaming and celebrate every body in all its unique beauty
          </p>
        </header>

        {/* Home Tab */}
        {activeTab === 'home' && (
          <>
            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {/* Selfie Card */}
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-500 to-pink-600 p-1">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gray-900/90 rounded-[22px] p-8 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center mb-6 shadow-lg">
                    <span className="text-3xl">🤳</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Empowering Selfie</h3>
                  <p className="text-gray-400 mb-6">Open Snapchat to take an empowering selfie with our custom filter</p>
                  <button
                    onClick={openSnapchat}
                    className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300 transform hover:scale-105"
                  >
                    Open Snapchat App
                  </button>
                </div>
              </div>

              {/* Stories Card */}
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 p-1">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gray-900/90 rounded-[22px] p-8 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-6 shadow-lg">
                    <span className="text-3xl">📖</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Real Stories</h3>
                  <p className="text-gray-400 mb-6">Read and share inspiring stories from real people on their journey</p>
                  <button
                    onClick={() => handleTabChange('stories')}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
                  >
                    Read Stories
                  </button>
                </div>
              </div>

              {/* Share Card */}
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 p-1">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gray-900/90 rounded-[22px] p-8 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mb-6 shadow-lg">
                    <span className="text-3xl">📢</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Spread the Word</h3>
                  <p className="text-gray-400 mb-6">Share our campaign and help us reach more people with positivity</p>
                  <button
                    onClick={() => handleTabChange('share')}
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105"
                  >
                    Share Campaign
                  </button>
                </div>
              </div>
            </div>

            {/* Inspirational Quote Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 mb-16">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-6xl">✨</span>
                </div>
                <div className="text-center md:text-left">
                  <blockquote className="text-2xl md:text-3xl font-light text-white italic mb-4">
                    "Your body is not an ornament, it's the vehicle to your dreams."
                  </blockquote>
                  <p className="text-purple-300">— Body Positivity Movement</p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {[
                { number: '10K+', label: 'Supporters' },
                { number: stories.length, label: 'Stories Shared' },
                { number: '50+', label: 'Countries' },
                { number: '∞', label: 'Love' }
              ].map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-cyan-300 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-purple-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Stories Tab */}
        {activeTab === 'stories' && (
          <div className="space-y-8">
            {/* Add Story Button */}
            <button
              onClick={() => {
                setShowAddStory(!showAddStory);
                trackClick('Share Your Story');
              }}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 px-8 rounded-2xl hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span className="text-2xl">✍️</span>
              <span>Share Your Story</span>
            </button>

            {/* Add Story Form */}
            {showAddStory && (
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Share Your Journey</h3>
                
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your name (optional - leave blank for Anonymous)"
                    value={storyName}
                    onChange={(e) => setStoryName(e.target.value)}
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  
                  <textarea
                    placeholder="Share your body positivity story. What makes you feel beautiful? How have you learned to love yourself?"
                    value={storyText}
                    onChange={(e) => setStoryText(e.target.value)}
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 h-32 resize-none"
                  />
                  
                  {/* Image Upload */}
                  <div className="flex flex-col items-center gap-4">
                    <label className="w-full cursor-pointer">
                      <div className="p-6 border-2 border-dashed border-white/30 rounded-xl hover:border-purple-400 transition-colors text-center">
                        {uploadedImage ? (
                          <div className="relative">
                            <img src={uploadedImage} alt="Uploaded" className="max-h-48 mx-auto rounded-lg" />
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setUploadedImage(null);
                              }}
                              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
                            >
                              ×
                            </button>
                          </div>
                        ) : (
                          <div className="text-gray-400">
                            <span className="text-3xl block mb-2">📷</span>
                            <span>Click to upload an image (optional)</span>
                          </div>
                        )}
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                  
                  <div className="flex gap-4">
                    <button
                      onClick={addStory}
                      disabled={!storyText.trim()}
                      className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Post Story 💜
                    </button>
                    <button
                      onClick={() => {
                        setShowAddStory(false);
                        setUploadedImage(null);
                        setStoryText('');
                        setStoryName('');
                      }}
                      className="px-6 py-4 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Stories List */}
            <div className="space-y-6">
              {stories.length === 0 ? (
                <div className="text-center py-16">
                  <span className="text-6xl block mb-4">📝</span>
                  <p className="text-purple-300 text-xl">No stories yet. Be the first to share!</p>
                </div>
              ) : (
                stories.map((story) => (
                  <div key={story.id} className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">{story.name.charAt(0).toUpperCase()}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-bold text-white">{story.name}</h4>
                            <p className="text-purple-400 text-sm">{story.date}</p>
                          </div>
                          <button
                            onClick={() => deleteStory(story.id)}
                            className="text-gray-500 hover:text-red-400 transition-colors"
                          >
                            🗑️
                          </button>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-4">{story.text}</p>
                        {story.image && (
                          <img src={story.image} alt="Story" className="rounded-xl max-h-64 mb-4" />
                        )}
                        <button
                          onClick={() => likeStory(story.id)}
                          className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
                        >
                          <span className="text-xl">❤️</span>
                          <span className="font-semibold">{story.likes}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Share Tab */}
        {activeTab === 'share' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4">Spread the Love 💜</h2>
              <p className="text-purple-300 text-lg">Help us reach more people with our message of body positivity</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Twitter */}
              <button
                onClick={() => shareOnSocial('twitter')}
                className="flex items-center gap-4 p-6 bg-[#1DA1F2]/20 hover:bg-[#1DA1F2]/30 rounded-2xl border border-[#1DA1F2]/30 transition-all group"
              >
                <div className="w-14 h-14 bg-[#1DA1F2] rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#1DA1F2] transition-colors">Twitter / X</h3>
                  <p className="text-gray-400">Share with your followers</p>
                </div>
              </button>

              {/* Facebook */}
              <button
                onClick={() => shareOnSocial('facebook')}
                className="flex items-center gap-4 p-6 bg-[#4267B2]/20 hover:bg-[#4267B2]/30 rounded-2xl border border-[#4267B2]/30 transition-all group"
              >
                <div className="w-14 h-14 bg-[#4267B2] rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#4267B2] transition-colors">Facebook</h3>
                  <p className="text-gray-400">Share with friends</p>
                </div>
              </button>

              {/* WhatsApp */}
              <button
                onClick={() => shareOnSocial('whatsapp')}
                className="flex items-center gap-4 p-6 bg-[#25D366]/20 hover:bg-[#25D366]/30 rounded-2xl border border-[#25D366]/30 transition-all group"
              >
                <div className="w-14 h-14 bg-[#25D366] rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#25D366] transition-colors">WhatsApp</h3>
                  <p className="text-gray-400">Send to contacts</p>
                </div>
              </button>

              {/* Instagram */}
              <button
                onClick={() => shareOnSocial('instagram')}
                className="flex items-center gap-4 p-6 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 hover:from-purple-500/30 hover:via-pink-500/30 hover:to-orange-500/30 rounded-2xl border border-pink-500/30 transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">Instagram</h3>
                  <p className="text-gray-400">Tag us in your posts</p>
                </div>
              </button>
            </div>

            {/* Copy Link */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-3">Copy Campaign Link</h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  readOnly
                  value="everybodyisbeautiful.org"
                  className="flex-1 p-4 bg-white/10 border border-white/20 rounded-xl text-white"
                />
                <button
                  onClick={() => {
                    trackClick('Copy Link');
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied! 📋');
                  }}
                  className="px-6 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors"
                >
                  Copy
                </button>
              </div>
            </div>

            {/* Hashtag Section */}
            <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-8 text-center border border-pink-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Use Our Hashtag</h3>
              <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-cyan-300 mb-4">
                #EverybodyIsBeautiful
              </p>
              <p className="text-purple-300">Use this hashtag when posting to join the conversation!</p>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <p className="text-2xl font-light text-white mb-4">
              Remember: Every body is beautiful, including yours! 💜
            </p>
            <div className="flex justify-center gap-4 text-purple-400">
              <span>Made with 💜</span>
              <span>•</span>
              <span>Body Positivity Movement</span>
            </div>
          </div>
        </footer>

        {/* Analytics Dashboard */}
        <AnalyticsDashboard />
      </div>
    </div>
  );
}

export default Landing;
