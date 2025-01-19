
'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Play, Pause, SkipBack, SkipForward, Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface Track {
    id: number
    title: string
    artist: string
    duration: string
    durationInSeconds: number
}

const tracks: Track[] = [
    {
        id: 1, title: "indjstione - take it slow", duration: "02:39", durationInSeconds: 159,
        artist: ''
    },
    {
        id: 2, title: "văzduh & vlad mihail - street cleaning truck", duration: "07:01", durationInSeconds: 421,
        artist: ''
    },
    {
        id: 3, title: "musai - endorphins", duration: "04:23", durationInSeconds: 263,
        artist: ''
    },
    {
        id: 4, title: "danaga ft. kata - i wanna day", duration: "04:39", durationInSeconds: 279,
        artist: ''
    },
    {
        id: 5, title: "dannilov esaunue - tuesday night", duration: "07:05", durationInSeconds: 425,
        artist: ''
    },
    {
        id: 6, title: "blanilla - 1thing", duration: "05:08", durationInSeconds: 308,
        artist: ''
    },
    {
        id: 7, title: "scuze - road rash (fast lane)", duration: "04:51", durationInSeconds: 291,
        artist: ''
    },
    {
        id: 8, title: "lvnf - piesa fără nume (2011)", duration: "06:57", durationInSeconds: 417,
        artist: ''
    }
]

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTrack, setCurrentTrack] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const audioRef = useRef<HTMLAudioElement>(null)

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = Math.floor(seconds % 60)
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
    }

    const handlePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
            } else {
                audioRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const handleTrackClick = (index: number) => {
        setCurrentTrack(index)
        setIsPlaying(true)
        if (audioRef.current) {
            audioRef.current.currentTime = 0
            audioRef.current.play()
        }
    }

    useEffect(() => {
        const audio = audioRef.current
        if (audio) {
            const updateTime = () => setCurrentTime(audio.currentTime)
            audio.addEventListener('timeupdate', updateTime)
            return () => audio.removeEventListener('timeupdate', updateTime)
        }
    }, [])

    return (
        <div className="w-full  text-black p-8">
            <div className="w-full mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                        <h1 className="text-8xl  mb-6 title-fat">GAZETOFONIAC 1</h1>
                        {/*<p className="text-gray-400 mb-8">by <a href="#" className="text-blue-500">Gazetofon</a></p>*/}

                        {/* Audio Player */}
                        <div className="mb-8">
                            <audio
                                ref={audioRef}
                                src={"/audio/01.mp3"}
                                onEnded={() => setIsPlaying(false)}
                            />

                            <div className="flex items-center gap-4 mb-4">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={handlePlayPause}
                                    className="h-12 w-12 border-2"
                                >
                                    {isPlaying ? (
                                        <Pause className="h-6 w-6" />
                                    ) : (
                                        <Play className="h-6 w-6" />
                                    )}
                                </Button>
                                <div className="text-sm">
                                    {formatTime(currentTime)} / {tracks[currentTrack].duration}
                                </div>
                            </div>

                            <div className="w-full bg-gray-700 h-1 rounded-full">
                                <div
                                    className="bg-white h-1 rounded-full"
                                    style={{
                                        width: `${(currentTime / tracks[currentTrack].durationInSeconds) * 100}%`
                                    }}
                                />
                            </div>
                        </div>

                        {/* Track List */}
                        <div className="space-y-2">
                            {tracks.map((track, index) => (
                                <button
                                    key={track.id}
                                    onClick={() => handleTrackClick(index)}
                                    className={`w-full text-left p-2 hover:bg-white/10 rounded flex items-center gap-4 ${
                                        currentTrack === index ? 'bg-white/5' : ''
                                    }`}
                                >
                                    <Play className="h-4 w-4 flex-shrink-0" />
                                    <span className="flex-grow">{track.title}</span>
                                    <span className="text-black">{track.duration}</span>
                                </button>
                            ))}
                        </div>

                        <div className="mt-8 space-y-4">

                            <Button className="w-full" variant="outline">
                                Buy Digital Album
                            </Button>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div>
                        <div className="relative aspect-square mb-6">
                            <Image
                                src="/tmpwcjawzo4.jpeg"
                                alt="Album cover"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="flex justify-between items-center mb-8">
                            <Button variant="ghost" className=" border-2">
                                Share / Embed
                            </Button>
                            <Button variant="ghost">
                                <Heart className="h-4 w-4 mr-2" />
                                Wishlist
                            </Button>
                        </div>

                        <div className="space-y-4">
                            <h2 className="font-medium">supported by</h2>
                            <div className="flex gap-2">
                                <div className="w-10 h-10 bg-gray-700 rounded" />
                                <div className="w-10 h-10 bg-gray-700 rounded" />
                                <div className="w-10 h-10 bg-gray-700 rounded" />
                            </div>
                        </div>

                        <div className="mt-8">
                            <p className="text-black text-sm">
                                Se întâmplă. În sfârșit! Și e doar începutul. Prima colecție cu producții
                                locale de muzică electronică și nu doar electronică. Muzică produsă
                                sub influența și în atmosfera Clujului Napoca, de către pionierii
                                fenomenului muzical electronic din orașul Gazetofonului.
                            </p>

                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

