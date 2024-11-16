import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const PostForm = () => {
  const [message, setMessage] = useState('');
  const [platforms, setPlatforms] = useState({
    twitter: false,
    facebook: false,
    instagram: false,
    tiktok: false,
  });

  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedUserToken = localStorage.getItem("token");
    setToken(storedUserToken); 
    console.log('Usertoken:', storedUserToken);
  }, []);
  
  console.log(localStorage.getItem("token"));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedPlatforms = Object.keys(platforms).filter(platform => platforms[platform]);

    if (!message.trim()) {
        alert('Please enter a message.');
        return;
    }

    if (selectedPlatforms.length === 0) {
        alert('Please select at least one platform.');
        return;
    }

    const postData = {
        message,
        platforms: selectedPlatforms,
        token,
    };
    console.log('Posting data:', postData);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      
      const responseData = await response.json(); 
console.log('Response from API:', responseData);

if (response.ok) {
  console.log('Data:', responseData.data);
  alert("Post sucessfully")
      } else {
        const errorText = await response.text();
        const errorData = errorText ? JSON.parse(errorText) : { message: 'Unknown error' };
        console.error('Error details:', errorData);
        alert('Error sharing the post: ' + errorData.message);
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      alert('An unexpected error occurred.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Post Across All your Social Media</label>
        <textarea
          className="w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What's on your mind?"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Platforms</label>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={platforms.twitter}
              onChange={() => setPlatforms({ ...platforms, twitter: !platforms.twitter })}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span>Twitter</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={platforms.facebook}
              onChange={() => setPlatforms({ ...platforms, facebook: !platforms.facebook })}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span>Facebook</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={platforms.instagram}
              onChange={() => setPlatforms({ ...platforms, instagram: !platforms.instagram })}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span>Instagram</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={platforms.tiktok}
              onChange={() => setPlatforms({ ...platforms, tiktok: !platforms.tiktok })}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span>TikTok</span>
          </label>
        </div>
      </div>

      <button className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-semibold" type="submit">
        Post
      </button>
    </form>
  );
};

export default PostForm;
