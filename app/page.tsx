"use client"

import Link from 'next/link'
import {AudioWaveform, Circle, Diamond, DiamondIcon, Disc, Moon, Plane, PlaneTakeoff} from "lucide-react"
// import { Chakra_Petch, Major_Mono_Display } from 'next/font/google'
import EventPage from "@/components/Event";
import NewsPage from "@/components/News";
import CalendarView from "@/components/Calendar";
import ImagePage from "@/components/Image";
import AudioPlayerWithPlaylist from "@/components/Audio";
import YouTubePlayerWithPlaylist from "@/components/Video";
import MusicPlayer from "@/components/AudioPlayer";

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

                <div className="flex items-center gap-2 mb-4 pl-6 pt-4 pb-4 text-sm bg-violet-400/90 text-white">
                    <AudioWaveform className="w-8 h-8 "/>
                    <span className="font-medium text-md">
                    Se întâmplă, în sfârșit! Și e doar începutul. Prima colecție cu producții locale
                        de muzică electronică și nu doar electronică. Muzică produsă sub influența și în atmosfera Clujului Napoca,
                        de către pionierii fenomenului muzical electronic din orașul Gazetofonului
                   </span>
                </div>

            </header>

            <div className="flex flex-col fixed bottom-0 left-0 right-0 z-50">
                <nav className="flex items-center justify-between w-full bg-white =">
                    <div className="p-5">
                        <Link href="#">
                            <Disc/>
                        </Link>
                    </div>
                    <div className="flex space-x-1 text-left">
                        <Link href="#" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors font-extrabold">
                            NEWSLETTER
                        </Link>
                        <Link href="#" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors font-extrabold">
                            ABOUT
                        </Link>
                        <a href="#" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors font-extrabold" target="_blank">
                            EDITORIAL
                        </a>
                    </div>
                    <div className="bg-[#FF4C2C] p-5">
                        <Link href="#" className="text-2xl font-extrabold">
                            GZTFN
                        </Link>
                    </div>
                </nav>
            </div>

            <main className="overflow-auto">
                <section className="bg-emerald-400 min-h-screen flex flex-col  p-6 ">
                    <div className="w-full p-0 s-0 pt-16">
                        <h1 className="text-6xl font-light mb-8">Compilation 2025</h1>
                        <AudioPlayerWithPlaylist tracks={[{
                            src: "/audio/01.mp3",
                            title: "Die Zukunft - Drogen nehmen und rumfahren (Yusuf Lemone Edit)"
                        }, {
                            src: "/audio/02.mp3",
                            title: "Tapan - Europa (Album Version)"
                        }]}/>
                        <br/>
                        <YouTubePlayerWithPlaylist videos={[
                            {
                                src: "https://www.youtube.com/embed/AMcREX5E1ZM",
                                title: "Adina Oros - still"
                            },
                            {
                                src: "https://www.youtube.com/embed/oQLSESN4Jqs",
                                title: "Opal Deluge - X-TRA TIME (lyric video)"
                            }
                        ]}/>
                    </div>
                </section>
                <section className="bg-yellow-300 min-h-screen flex flex-col  p-6 ">
                    <div className="w-full p-0 s-0">
                        <NewsPage/>
                    </div>
                </section>

                {/*<section className="min-h-screen flex flex-col text-center bg-[#5200FF]">*/}
                {/*    <div className="columns-2 w-full p-0 s-0">*/}
                {/*        <div className="bg-blue-300 p-2">*/}

                {/*            <MediaThemeMicrovideo>*/}
                {/*                <YoutubeVideo*/}
                {/*                    slot="media"*/}
                {/*                    src="https://www.youtube.com/watch?v=uxsOYVWclA0"*/}
                {/*                    playsInline*/}
                {/*                ></YoutubeVideo>*/}
                {/*            </MediaThemeMicrovideo>*/}


                {/*        </div>*/}
                {/*        <div className="bg-red-300 p-2">*/}
                {/*            <h1 className="text-8xl">*/}
                {/*                <span className={majorMonoDisplay.className}> BRUTALISM DELIVERY ...</span>*/}
                {/*            </h1>*/}
                {/*            <p className={jetBrainsMono.className}>*/}
                {/*                If you need your footer to be seen always on the screen or like this at the end of the*/}
                {/*                page, here is the answer.*/}
                {/*            </p>*/}
                {/*            <p>*/}
                {/*                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a*/}
                {/*                piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard*/}
                {/*                McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of*/}
                {/*                the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through*/}
                {/*                the cites of the word in classical literature, discovered the undoubtable source. Lorem*/}
                {/*                Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The*/}
                {/*                Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the*/}
                {/*                theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,*/}
                {/*                Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.*/}
                {/*                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those*/}
                {/*                interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero*/}
                {/*                are also reproduced in their exact original form, accompanied by English versions from*/}
                {/*                the 1914 translation by H. Rackham.*/}
                {/*            </p>*/}

                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
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