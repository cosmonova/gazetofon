import Image from 'next/image'
import { Badge } from "@/components/ui/badge"

interface EventDate {
    date: string
    day: string
    time: string
    theater: string
    soldOut: boolean
}

const upcomingDates: EventDate[] = [
    {
        date: "18.01",
        day: "Sat",
        time: "19:00",
        theater: "Theater",
        soldOut: true
    },
    {
        date: "19.01",
        day: "Sun",
        time: "19:00",
        theater: "Theater",
        soldOut: true
    },
    {
        date: "19.02",
        day: "Sun",
        time: "19:00",
        theater: "Theater",
        soldOut: true
    },
    {
        date: "18.03",
        day: "Sat",
        time: "19:00",
        theater: "Theater",
        soldOut: true
    },
    {
        date: "19.04",
        day: "Sun",
        time: "19:00",
        theater: "Theater",
        soldOut: true
    },
    {
        date: "19.05",
        day: "Sun",
        time: "19:00",
        theater: "Theater",
        soldOut: true
    }
]

export default function EventPage() {
    return (
        <div className="min-h-screen  text-white p-6">
            <div className="flex mx-auto ">
                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-8 ">
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h1 className="text-6xl font-light">Gazetofoniac</h1>
                            <p className="text-xl text-gray-400">locals</p>
                        </div>
                        <div>
                            {/*<Image*/}
                            {/*    src="/cover.jpg"*/}
                            {/*    alt="Event visual"*/}
                            {/*    fill*/}
                            {/*    style={{objectFit: 'cover', opacity: 0.9}}*/}
                            {/*    priority*/}
                            {/*/>*/}
                        </div>

                        <p className="text-3xl leading-relaxed ">
                            Cu rădăcini în Graffiti și Street art, pe un fundal al muralismului, creația lui IRLO se
                            conturează sub influența străzii și a spațiului public.<br/><br/>

                            Căutând o relație între dimensiunea pânzei și a pereților, lucrările din aceasta colectie
                            conturează ideea de “pictură modulară”.
                            O alăturare de mai multe pânze, care rotite pe fiecare latura, generează noi compoziții și
                            povești. <br/><br/>

                            Temele sunt de natură socială, spirituală, științifico-fantastică..., iar lumina, culoarea
                            și jocul sunt tratate cu seriozitate.
                        </p>

                        <div className="space-y-4 ">
                            <p>The Sub Place</p>
                            <p>Masa rotunda ‘AI extension of the artist creation’
                                moderata de Gazetofon, IRLO si Cosmonova.</p>
                            <p>Joi 25 aprilie, 16.00H</p>
                            <p>Tickets: X5 RON</p>
                        </div>


                    </div>

                    {/* Image Section */}
                    {/*<div className="relative lg:h-auto">*/}
                    {/*    <Image*/}
                    {/*        src="/02.jpg"*/}
                    {/*        alt="Event visual"*/}
                    {/*        fill*/}
                    {/*        style={{objectFit: 'cover', opacity: 0.9}}*/}
                    {/*        priority*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>

                {/* Upcoming Dates */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-light mb-6">Upcoming dates</h2>
                    <div className="space-y-4">
                        {upcomingDates.map((date, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between border-t border-gray-800 py-4"
                            >
                                <div className="flex items-center gap-8">
                                    <div className="w-32">
                                        <span className="text-xl">{date.date}</span>
                                        <span className="ml-2 text-black">{date.day}</span>
                                        <span className="ml-2">{date.time}</span>
                                    </div>
                                    <div className="text-green-300">
                                        {date.theater}
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    {/*<div className="w-4 h-4 border border-white"></div>*/}
                                  
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

