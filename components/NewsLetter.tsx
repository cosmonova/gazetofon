"use client";
import React from "react";

import { Input } from "@/components/ui/input";

function NewsLetter() {
    return (
        <div className="h-[40rem] w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center title-fat">
                    Join the waitlist
                </h1>
                <p></p>
                <p className="text-muted-foreground max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Welcome to Gazetofon, the best  email service on the web.

                </p>
                <Input
                    type="email"
                    placeholder="hi@email.com"
                    className="w-full mt-4 relative z-10"
                />
            </div>
            {/*<BackgroundBeams />*/}
        </div>
    );
}

export { NewsLetter };