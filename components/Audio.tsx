import React, { useState, useRef, useEffect } from 'react';
import {Button} from "@/components/ui/button";

interface Track {
  src: string;
  title: string;
  isSoundCloud?: boolean;
}

interface AudioPlayerWithPlaylistProps {
  tracks: Track[];
}

const AudioPlayerWithPlaylist: React.FC<AudioPlayerWithPlaylistProps> = ({ tracks }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [currentTrackSrc, setCurrentTrackSrc] = useState<string>(tracks[0].src);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {


    if (tracks[currentTrackIndex].isSoundCloud) {
      // loadSoundCloudTrack(tracks[currentTrackIndex].src);
    } else {
      setCurrentTrackSrc(tracks[currentTrackIndex].src);
    }
  }, [currentTrackIndex, tracks]);

  const loadSoundCloudTrack = async (url: string) => {
    const response = await fetch(`https://api.soundcloud.com/resolve?url=${url}&client_id=YOUR_SOUNDCLOUD_CLIENT_ID`);
    const data = await response.json();
    setCurrentTrackSrc(data.stream_url + '?client_id=YOUR_SOUNDCLOUD_CLIENT_ID');
  };

  const handleTrackChange = (index: number) => {
    setCurrentTrackIndex(index);
    if (audioRef.current) {
      // if (tracks[index].isSoundCloud) {
      //   const loadSoundCloudTrack = async (url: string) => {
      //     const response = await fetch(`https://api.soundcloud.com/resolve?url=${url}&client_id=YOUR_SOUNDCLOUD_CLIENT_ID`);
      //     const data = await response.json();
      //     audioRef.current!.src = data.stream_url + '?client_id=YOUR_SOUNDCLOUD_CLIENT_ID';
      //     audioRef.current!.play();
      //   };
      //   loadSoundCloudTrack(tracks[index].src);
      // } else {
        audioRef.current.src = tracks[index].src;
        audioRef.current.play();
      // }
    }
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg">
      <audio controls ref={audioRef} className="w-full mb-4 z-40">
        <source src={currentTrackSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <ul className="space-y-2">
        {tracks.map((track, index) => (
          <li key={index}>
            <Button onClick={() => handleTrackChange(index)} className="cursor-pointer p-2 rounded-md transition-colors">{track.title}</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AudioPlayerWithPlaylist;