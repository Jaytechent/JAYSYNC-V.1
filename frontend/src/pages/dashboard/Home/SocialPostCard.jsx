import React from 'react';

const SocialPostCard = ({ message, platforms }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <p className="text-gray-800">{message}</p>
      <div className="mt-2 flex space-x-2">
        {platforms.includes('twitter') && <span className="bg-blue-500 text-white p-1 rounded">Twitter</span>}
        {platforms.includes('facebook') && <span className="bg-blue-600 text-white p-1 rounded">Facebook</span>}
        {platforms.includes('instagram') && <span className="bg-pink-500 text-white p-1 rounded">Instagram</span>}
        {platforms.includes('tiktok') && <span className="bg-black text-white p-1 rounded">TikTok</span>}
      </div>
    </div>
  );
};

export default SocialPostCard;
