"use client"

import Link from 'next/link'
import {AudioWaveform} from "lucide-react"
// import { Chakra_Petch, Major_Mono_Display } from 'next/font/google'
import EventPage from "@/components/Event";
import NewsPage from "@/components/News";
import CalendarView from "@/components/Calendar";
import ImagePage from "@/components/Image";
import AudioPlayerWithPlaylist from "@/components/Audio";
// import YouTubePlayerWithPlaylist from "@/components/Video";
import MusicPlayer from "@/components/AudioPlayer";
import {PixelTrailDemo} from "@/components/screen-saver";
import {NewsLetter} from "@/components/NewsLetter";
import {UnderlineDemo} from "@/components/Footer";

// const jetBrainsMono = Chakra_Petch({
//     subsets: ['latin'],
//     weight: ['400', '700']
// })
//
// const majorMonoDisplay = Major_Mono_Display({
//     subsets: ['latin'],
//     weight: ['400']
// })



export default function Page() {
    return (
        <div >
            <header className="flex flex-col fixed top-0 left-0 right-0 z-50">

                {/*<div className="flex items-center gap-2 mb-4 pl-6 pt-4 pb-4 text-sm bg-violet-400/90 text-white">*/}
                {/*    <AudioWaveform className="w-8 h-8 "/>*/}
                {/*    <span className="font-medium text-md">*/}
                {/*    Se întâmplă, în sfârșit! Și e doar începutul. Prima colecție cu producții locale*/}
                {/*        de muzică electronică și nu doar electronică. Muzică produsă sub influența și în atmosfera Clujului Napoca,*/}
                {/*        de către pionierii fenomenului muzical electronic din orașul Gazetofonului*/}
                {/*   </span>*/}
                {/*</div>*/}

            </header>

            <div className="flex flex-col fixed bottom-0 left-0 right-0 z-50">
                <nav className="flex items-center justify-between w-full bg-white">
                    <div className="p-4 title-fat text-5xl antialiased">
                        ه
                    </div>
                    <div className="flex space-x-1 text-left lg:hidden sm:hidden">
                        <Link href="#" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors font-bold">
                            NEWSLETTER
                        </Link>
                        <Link href="#" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors font-bold">
                            ABOUT
                        </Link>
                        <a href="#" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors font-bold" target="_blank">
                            EDITORIAL
                        </a>
                    </div>
                    <div className="bg-[#FF4C2C] p-4 title-fat text-5xl antialiased">٩
                    </div>
                </nav>
            </div>

            <main className="overflow-auto">
                <section className=" min-h-screen flex flex-col  p-6 dot-background bg-emerald-400">

                    <div className="w-full p-0 s-0 pt-16">
                        <h1 className="xl:text-8xl lg:text-8xl md:text-6xl sm:text-6xl text-5xl mb-8 title-fat text-white">Compilation
                            2025</h1>
                        <AudioPlayerWithPlaylist tracks={[{
                            src: "https://s3.eu-west-1.amazonaws.com/boundarylab.com/Mad+Over+Me.mp3",
                            title: "Die Zukunft - Drogen nehmen und rumfahren (Yusuf Lemone Edit)"
                        }, {
                            src: "https://s3.eu-west-1.amazonaws.com/boundarylab.com/Matias+Aguayo+-+Rrrrr.mp3",
                            title: "Tapan - Europa (Album Version)"
                        }, {
                            src: "https://s3.eu-west-1.amazonaws.com/boundarylab.com/Oom.mp3",
                            title: "OOM"
                        }
                        ]}/>

                    </div>
                </section>
                <section className="bg-yellow-300 min-h-screen flex flex-col  p-6 ">
                    <div className="w-full p-0 s-0">
                        <NewsPage/>
                    </div>
                </section>
                <section className="min-h-screen flex flex-col bg-gray-400">
                    {/*bg-[#5200FF]*/}
                    <EventPage/>
                </section>
                <section className="min-h-screen flex flex-col bg-black">
                    {/*bg-[#5200FF]*/}
                    <ImagePage/>
                </section>

                <section className="min-h-screen flex flex-col bg-[#FF3400]">
                    <CalendarView/>
                </section>

                <section className="min-h-screen flex flex-col bg-emerald-400">
                    <MusicPlayer/>
                </section>

                <section className="min-h-screen flex flex-col bg-blue-400 p-6">
                    <PixelTrailDemo/>
                </section>

                <section className="min-h-screen flex flex-col bg-orange-500 p-8">
                    <NewsLetter/>
                </section>

                <section className="min-h-screen flex flex-col bg-violet-500 p-6">
                    <UnderlineDemo/>
                </section>

                {/*<div className="min-h-screen flex flex-col text-center bg-[#5200FF]">*/}
                {/*    <div className="columns-2 w-full p-0 s-0">*/}
                {/*        <div className="bg-blue-300 p-2">*/}
                {/*            /!*<App />*!/*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </main>
        </div>
    )
}