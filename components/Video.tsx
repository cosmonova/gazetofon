"use client"

import React, { useState } from 'react';
import ReactPlayer from "react-player";

interface Video {
  src: string;
  title: string;
}

interface YouTubePlayerWithPlaylistProps {
  videos: Video[];
}

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return (
    <button {...props} className="p-2 bg-gray-700 hover:bg-gray-600 rounded-md">
      {children}
    </button>
  );
};

const YouTubePlayerWithPlaylist: React.FC<YouTubePlayerWithPlaylistProps> = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);

  const handleVideoChange = (index: number) => {
    console.log(`Changing video to index: ${index}`);
    setCurrentVideoIndex(index);
  };

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePreviousVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg">
      <div className="mb-4">
        <h2 className="text-xl mb-2">{videos[currentVideoIndex].title}</h2>
        <ReactPlayer url={videos[currentVideoIndex].src} width={500} controls={true} />
      </div>
      <div className="flex justify-between mb-4">
        <Button key="previous" onClick={handlePreviousVideo}>Previous</Button>
        <Button key="next" onClick={handleNextVideo}>Next</Button>
      </div>
      <ul className="space-y-2">
        {videos.map((video, index) => (
          <li
            key={index}
            onClick={() => handleVideoChange(index)}
            className={`cursor-pointer p-2 rounded-md transition-colors ${currentVideoIndex === index ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'}`}
          >
            {video.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YouTubePlayerWithPlaylist;