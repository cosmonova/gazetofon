
import React from "react";

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
            <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1  gap-8">
                {/* Main Content */}

                <div className="space-y-6 w-full">
                    <div className="space-y-4 antialiased">
                        <h1 className=" lg:text-8xl md:text-4xl sm:text-4xl text-4xl title-fat">
                            Gazetofoniac 2
                        </h1>
                        <p className="text-xl text-gray-400">locals</p>

                        <p className="text-2xl leading-relaxed ">
                            Cu rădăcini în Graffiti și Street art, pe un fundal al muralismului, creația lui IRLO se
                            conturează sub influența străzii și a spațiului public.<br/><br/>

                            Căutând o relație între dimensiunea pânzei și a pereților, lucrările din aceasta colectie
                            conturează ideea de “pictură modulară”.
                            O alăturare de mai multe pânze, care rotite pe fiecare latura, generează noi compoziții și
                            povești. <br/><br/>

                            Temele sunt de natură socială, spirituală, științifico-fantastică..., iar lumina, culoarea
                            și jocul sunt tratate cu seriozitate.
                        </p>
                    </div>
                    <div className="space-y-4 ">
                        <p>The Sub Place</p>
                        <p>Masa rotunda ‘AI extension of the artist creation’
                            moderata de Gazetofon, IRLO si Cosmonova.</p>
                        <p>Joi 25 aprilie, 16.00H</p>
                        <p>Tickets: X5 RON</p>
                    </div>
                </div>


                {/* Upcoming Dates */}
                <div className="w-full rounded-md bg-background text-black">
                    <h2 className="text-3xl m-6">Upcoming dates</h2>
                    <div className="text-black m-6">
                        <table className="w-full text-left p-6 text-xl table-auto ">
                            <tbody>
                            {upcomingDates.map((date, index) => (
                                <tr className="hover:bg-yellow-400" key={index}>
                                    <td className="text-left p-2">{date.date}</td>
                                    <td className="text-left ">{date.day}</td>
                                    <td className="text-left">{date.time}</td>
                                    <td className="text-green-300 text-left">{date.theater}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

