
import { ChevronLeft, ChevronRight, Filter } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface Event {
    time: string
    title: string
    creator: string
    category: string
    isRed?: boolean
    isWhite?: boolean
}

interface DayEvent {
    date: number
    day: string
    events: Event[]
}

const events: DayEvent[] = [
    {
        date: 16,
        day: "Thursday",
        events: [
            {
                time: "19:00",
                title: "PseudoDeus. Povestea Automatonului.",
                creator: "IRLO",
                category: "Art / Performance",
                isRed: true
            }
        ]
    },
    {
        date: 17,
        day: "Friday",
        events: [
            {
                time: "19:00",
                title: "Masa rotunda - AI extension of the artist creation",
                creator: "IRLO / Cosmonova",
                category: "Talk",
                isRed: true
            }
        ]
    },
    {
        date: 22,
        day: "Saturday",
        events: [
            {
                time: "19:00",
                title: "Rooneysounds open workshop: Calling Cluj based Dj’s.",
                creator: "Rooneysounds",
                category: "Performance",
                isWhite: true
            }
        ]
    },
    {
        date: 25,
        day: "Monday",
        events: [
            {
                time: "19:00",
                title: "Gazetofon AI party @mushu_roi",
                creator: "Gazetofob",
                category: "Theater",
                isWhite: true
            }
        ]
    },
    {
        date: 30,
        day: "Saturday",
        events: [
            {
                time: "19:00",
                title: "A sort of Garden of Times, celebrated at the Mushuroi Creative Hub.",
                creator: "Mushuroi Creative Hub",
                category: "Drinks",
                isWhite: true
            }
        ]
    }
]

export default function CalendarView() {
    return (
        <div className="min-h-screen text-white p-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-8">
                    <ChevronLeft className="w-6 h-6" />
                    <h1 className="text-4xl font-light">01.2025</h1>
                    <ChevronRight className="w-6 h-6" />
                </div>
                <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                </Button>
            </div>

            {/* Events List */}
            <div className="relative">
                {/* Gradient overlay */}
                <div
                    className="absolute right-0 top-0 w-1/3 h-full z-10"
                    // style={{
                    //     // backgroundImage: `url(${encodeURI('01.jpg')})`,
                    //     // backgroundSize: 'cover',
                    //     // backgroundPosition: 'right center'
                    // }}
                />

                {/* Events */}
                <div className="space-y-16">
                    {events.map((day) => (
                        <div key={day.date} className="flex gap-8">
                            {/* Date */}
                            <div className="w-24">
                                <div className="text-7xl font-light">{day.date}</div>
                                <div className="text-sm mt-1">{day.day}</div>
                            </div>

                            {/* Events */}
                            <div className="flex-1 space-y-4">
                                {day.events.map((event, idx) => (
                                    <div key={idx} className="border-l-2 border-white pl-8 py-2">
                                        <div className="flex items-start gap-2 mb-2">
                                            <span className="text-sm">{event.time}</span>
                                            {event.isRed && (
                                                <div className="w-4 h-4 bg-black" />
                                            )}
                                            {event.isWhite && (
                                                <div className="w-4 h-4 border bg-white" />
                                            )}
                                        </div>
                                        <h3 className="text-xl font-light mb-2">{event.title}</h3>
                                        <div className="text-sm text-black">{event.creator}</div>
                                        <div className="text-sm text-black">{event.category}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

