import {Circle, Hexagon} from 'lucide-react'
import Image from "next/image";

interface NewsArticle {
    category: string
    date: string
    day: string
    title: string
    description?: string
}

const newsArticles: NewsArticle[] = [
    {
        category: "News",
        date: "30.11.2024",
        day: "Sat",
        title: "Radar Digital Art festival",
        description: "Weekendul trecut am vizitat Radar Digital Art festival care este la editia a V-a și a cărui temă a fost Future Nature.\n" +
            "Expoziția a fost compusă din peste 20 de instalații imersive realizate atât de artiști internaționali cât și naționali.\n" +
            "S-a simțit ca un talcioc cultural. Ne-a făcut să ne jucăm, mirăm și să contemplăm la fiecare lucrare.\n" +
            "*documentare realizată de Raluca Pelin*"
    },
    {
        category: "Event",
        date: "19.12.2023",
        day: "Tue",
        title: "Murals of Youth",
        description: "În perioada 30.08 - 01.09 a avut loc în Cluj cea de-a doua ediție a festivalului internațional de artă murală, Murals of Youth, la care, deși pot participa doar elevi de liceu, este destinat publicului curios și deschis. Este organizat în centrul Clujului și reprezintă o celebrare a creativității ce mocnește în capetele adolescenților.\n" +
            "Acest festival oferă participanților oportunitatea de a-și expune abilitățile pe panouri mari, urmând ca acestea să fie jurizate de patru membri, specialiști în domeniu.\n" +
            "Zece panouri au fost transformate în zece murale executate de echipele participante.\n" +
            "Puteți admira lucrarea “My Involution” desenatǎ de Tudor și Matei, elevi ai Liceului de Arte Vizuale „Romulus Ladea”, membri @comunitatea156 , în curtea căminului, pe Strada Fericirii numărul 12, din 24 până în 27 octombrie, cu ocazia aniversării a 6 ani de când exista Căminul Subcultural."
    },
    {
        category: "News",
        date: "04.11.2023",
        day: "Sat",
        title: "Gazetofon AI party",
        description: "Gazetofon AI party\n" +
            "19.00 @irloirlo PseudoDeus finnisage\n" +
            "21.00 @silviughermanofficial AI show\n" +
            "23.00 @_khidja_ AI party\n"
    },
    {
        category: "News",
        date: "20.05.2023",
        day: "Sat",
        title: "Khidja - 1st of June",
        description: "“Cu zeci de discuri lansate la case de discuri notabile (între care Malka Tuti, Hivern Discs și recent DFA Records) și gig-uri în cadrul unor festivaluri foarte mari (precum Dekmantel sau Primavera Sound) dar și nopți intime în cluburi din toată lumea (de la Tokio la New York și Berlin), Khidja sunt astăzi mai activi ca niciodată.\n" +
            "După ani de experimente sonice, Khidja au ajuns astăzi, prin propriile metode, la un sound unic, original, șlefuit și matur, lucru care se poate observa ușor și pe cel de-al 21-lea EP din catalogul casei de discuri Malka Tuti. Acest alt tip de Romanian sound, despre care nu prea se vorbește la noi, pare complet ieșit din tiparele estetice în care se scaldă momentan muzica electronică românească.\n" +
            "Dacă totuși e musai să descriem sound-ul Khidja, putem vorbi despre o explozie de sunete, tonuri, armonii și ritmuri diferite care coexistă în pace și umplu cu naturalețe și cele mai ascunse colțuri ale unei camere.”"
    },
    {
        category: "News",
        date: "14.05.2023",
        day: "Sun",
        title: "PseudoDeus: Povestea Automatonului",
        description: "PseudoDeus: A story of the Automata: by IRLO\n" +
            "Finisaj, sâmbătă 1 iunie, 19.00H - 00.00H\n" +
            "Altoi Studio, etaj 1 Mushuroi creative hub\n" +
            "Piața 1 Mai, nr. 7, Cluj-Napoca\n"
    },
    {
        category: "News",
        date: "29.03.2023",
        day: "Wed",
        title: "Silviu Gherman prezintă: Inteligența Artificială Ciung👆🏼",
        description: "“Corporația Teleschpenker lansează CiungAI, o inteligență artificială descoperită din întîmplare. " +
            "Nimeni nu se aștepta ca această inteligență să apară pe calculator și să genereze ce generează. Dar știți " +
            "ce lucruri generează? Eu cînd am văzut m-am speriat. Veniți cît mai repede să vedeți și voi. Se schimbă " +
            "paradigma, se dă totul peste cap, e practic un fel de întîlnire cu destinul. Treaba voastră dacă nu vreți să veniți.”"
    },
    {
        category: "News",
        date: "24.11.2022",
        day: "Thu",
        title: "Prompting IRLO to AI >>>FINISSAGE of PseudoDeus. A story of the Automata.",
        description: "A multimedia installation set as a dance floor ambiance, showcasing the exclusive collaboration between IRLO and video artist Cosmonova, using artificial intelligence in harmony with the modular architecture of mushuroi.\n" +
            "Visual artists IRLO // Cosmonova\n" +
            "Audio artists: KHIDJA // Esaunue // Dakograff // Florem Lipsum\n" +
            "Power & Light: Vintage Meyer Sound System & Light design by CUE++\n" +
            "Rooted in Graffiti and Street art, against a backdrop of muralism, IRLO's creation takes shape under the influence of the street and public space."
    },
    {
        category: "News",
        date: "20.05.2022",
        day: "Fri",
        title: "Gazetofon Ai Party part. 1",
        description: "A magazine, a story, a crowd and some great sound :) All in the ambiance of visual artistry, shot by analogue lenses and projected on the walls of the Mushuroi creative hub."
    }
]


export default function NewsPage() {
    return (
        <div className="min-h-screen w-full pt-12">
            <div className="w-full mx-auto">
                <h1 className="text-6xl font-light mb-16">News</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {newsArticles.map((article, index) => (
                        <div key={index} className="border-t border-black pt-4">
                            {/*<div className="text-sm text-white mb-4">*/}
                            {/*    {article.category}*/}
                            {/*</div>*/}

                            <div className="flex items-center gap-2 mb-4">
                                <Circle className="w-4 h-4 fill-current"/>
                                <span className="font-medium text-xl">
                                    {article.date} {article.day}
                                 </span>
                            </div>

                            <h2 className="text-2xl font-bold mb-4 leading-tight">
                                 {article.title}
                            </h2>

                            {article.description && (
                                <p >
                                    {article.description}
                                </p>
                            )}
                            

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

