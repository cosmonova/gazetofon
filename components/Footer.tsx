'use client'

import Link from "next/link"
import { CenterUnderline, ComesInGoesOutUnderline, GoesOutComesInUnderline } from "@/components/ui/underline-animation"

function UnderlineDemo() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-background">
            <div className="flex flex-row font-overusedGrotesk items-start text-[#0015ff] h-full py-36 uppercase space-x-8 text-sm sm:text-xl md:text-2xl lg:text-3xl">
                <div>Contact</div>
                <ul className="flex flex-col space-y-1 h-full">
                    <Link href="#">
                        <CenterUnderline label="FACEBOOK" />
                    </Link>
                    <Link href="#">
                        <ComesInGoesOutUnderline label="INSTAGRAM" direction="right" />
                    </Link>
                    <Link href="#">
                        <ComesInGoesOutUnderline label="X (TWITTER)" direction="left" />
                    </Link>

                    <div className="pt-12">
                        <ul className="flex flex-col space-y-1 h-full">
                            <Link href="#">
                                <GoesOutComesInUnderline
                                    label="OFFICE@GAZETOFON.COM"
                                    direction="left"
                                />
                            </Link>
                            <Link href="#">
                                <GoesOutComesInUnderline
                                    label="HELLO@GAZETOFON.COM"
                                    direction="right"
                                />
                            </Link>
                        </ul>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export { UnderlineDemo }