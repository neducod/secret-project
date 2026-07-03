import React, { useState } from 'react';
import { Search, Heart, Eye, ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react';

export default function DesignDiscoveryPlatform() {
  const [selectedTag, setSelectedTag] = useState('dashboard');
  
  // Popular tags list
  const tags = [
    'dashboard', 'landing page', 'mobile app', 'portfolio', 
    'ecommerce', 'animation', 'illustration', 'onboarding'
  ];

  // Mock data matching the cards in Screenshot 2026-07-03 at 18.04.39.jpg
  const cards = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80', // Pink abstract placeholder for Omnibot
      bgClass: 'bg-pink-500',
      isCustomBg: true,
      customContent: (
        <div className="flex flex-col items-center justify-center h-full text-white font-bold text-3xl tracking-wide">
          <span>🤖 Omnibot</span>
        </div>
      ),
      author: 'Deividas Bielskis',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80',
      isPro: true,
      likes: 48,
      views: '2.7k'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=600&q=80', // White/Purple abstract placeholder
      bgClass: 'bg-gray-50',
      isCustomBg: true,
      customContent: (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white text-4xl shadow-lg">
            👁️
          </div>
        </div>
      ),
      author: 'Dalius Stuoka',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=80&q=80',
      isPro: true,
      likes: 49,
      views: '3.1k'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=600&q=80', // Framer Ad dark style
      author: 'Framer',
      avatar: 'https://images.unsplash.com/photo-1618005198143-e5283b019a7f?auto=format&fit=crop&w=80&q=80',
      isAd: true,
      likes: null,
      views: null
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=600&q=80', // Eagle cartoon placeholder
      bgClass: 'bg-blue-100',
      isCustomBg: true,
      customContent: (
        <div className="flex flex-col items-center justify-center h-full text-6xl">
          🦅🇺🇸
        </div>
      ),
      author: 'Alfrey Davilla | va...',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80',
      isPro: true,
      likes: 32,
      views: '2.8k'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80', // Fashion / Dark overlay photo
      author: 'BL/S®',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80',
      isPro: true,
      likes: 96,
      views: '3.9k',
      hasBadges: true
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&q=80', // GTR car placeholder
      author: 'Alex Tass, logo de...',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80',
      isPro: true,
      likes: 74,
      views: '5.4k'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1510519138101-570d1dca3d66?auto=format&fit=crop&w=600&q=80', // Healthcare app screens mockup
      author: 'Ronas IT | UI/U...',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80',
      isPro: true,
      likes: 177,
      views: '12.3k'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80', // Muzim brand quadrant
      author: 'Lepisov Branding',
      avatar: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=80&q=80',
      isPro: true,
      likes: 32,
      views: '1.1k'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 font-sans px-4 sm:px-8 py-6">
      
      {/* Search Header Section */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="relative w-full">
          <input 
            type="text" 
            placeholder="What type of design are you interested in?" 
            className="w-full h-14 pl-6 pr-14 bg-gray-100 rounded-full text-base border-none focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-500 transition-all"
          />
          <button className="absolute right-2 top-2 w-10 h-10 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center text-white transition-colors">
            <Search size={18} />
          </button>
        </div>
      </div>

      {/* Filter and Tags Row */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        {/* Left Side: Popular Labels */}
        <div className="flex items-center flex-wrap gap-2 text-sm">
          <span className="font-bold text-gray-800 mr-2">Popular:</span>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-1.5 rounded-full border transition-all whitespace-nowrap ${
                  selectedTag === tag 
                    ? 'bg-gray-900 text-white border-transparent font-medium' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Popular Dropdown Filter */}
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium hover:border-gray-400 transition-colors ml-auto md:ml-0">
          <span>Popular</span>
          <ChevronDown size={16} className="text-gray-500" />
        </button>
      </div>

      {/* Responsive Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
        {cards.map((card) => (
          <div key={card.id} className="group flex flex-col cursor-pointer">
            
            {/* Design Thumbnail Container */}
            <div className={`relative aspect-[4/3] w-full rounded-xl overflow-hidden mb-3 ${card.isCustomBg ? card.bgClass : 'bg-gray-100'}`}>
              {card.isCustomBg ? (
                card.customContent
              ) : (
                <img 
                  src={card.image} 
                  alt={card.author} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              )}

              {/* Unique overlay content mapping to Framer's built-in ad or specific UI tags */}
              {card.isAd && (
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-4 text-white">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-xs font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-md px-2 py-1 rounded">Framer</span>
                    <div className="p-1.5 bg-white/20 backdrop-blur-md rounded-full">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                  <div className="mb-2">
                    <h3 className="text-lg font-bold leading-snug">The professional canvas with built-in agents</h3>
                  </div>
                </div>
              )}

              {/* Extra badges for video/layers if available */}
              {card.hasBadges && (
                <div className="absolute top-3 right-3 flex gap-1.5">
                  <span className="bg-black/40 text-white p-1 rounded-md backdrop-blur-sm text-xs">📄</span>
                  <span className="bg-black/40 text-white p-1 rounded-md backdrop-blur-sm text-xs">📹</span>
                </div>
              )}
            </div>

            {/* Author/Footer Meta Info */}
            <div className="flex items-center justify-between px-1 text-xs">
              <div className="flex items-center gap-2 overflow-hidden mr-2">
                <img 
                  src={card.avatar} 
                  alt={card.author} 
                  className="w-6 h-6 rounded-full object-cover flex-shrink-0" 
                />
                <span className="font-bold text-gray-800 truncate">{card.author}</span>
                {card.isPro && (
                  <span className="bg-gray-200 text-gray-600 font-extrabold text-[9px] px-1.5 py-0.5 rounded uppercase tracking-wider scale-90">
                    PRO
                  </span>
                )}
              </div>

              {/* Right Side: Metrics or Action Labels */}
              {card.isAd ? (
                <div className="flex items-center gap-1.5 text-gray-400 font-medium whitespace-nowrap">
                  <span>Hide ads</span>
                  <span>•</span>
                  <span>Advertise</span>
                </div>
              ) : (
                <div className="flex items-center gap-3 text-gray-500 flex-shrink-0 font-medium">
                  <div className="flex items-center gap-1 hover:text-pink-500 transition-colors">
                    <Heart size={14} className="fill-current text-transparent hover:text-pink-500" />
                    <span>{card.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye size={14} />
                    <span>{card.views}</span>
                  </div>
                </div>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}