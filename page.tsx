import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { JetBrains_Mono } from 'next/font/google'

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
})

// Predefined array of background image URLs
const backgroundImages = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmpzxa2mcgt-Cz42wGgHffQzdPAE0CiSAwvTW98IS6.jpeg',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
  'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  'https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
]

export default function Page() {
  const [backgroundImage, setBackgroundImage] = useState(backgroundImages[0])

  useEffect(() => {
    // Select a random background image on component mount
    const randomIndex = Math.floor(Math.random() * backgroundImages.length)
    setBackgroundImage(backgroundImages[randomIndex])
  }, [])

  return (
    <>
      <Head>
        <title>boundarylab.com</title>
        <meta name="description" content="Boundarylab - Grew up in times of accelerated technological change." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`relative min-h-dvh w-full overflow-hidden bg-black ${jetBrainsMono.className}`}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative flex min-h-dvh flex-col">
          {/* Main Content */}
          <div className="flex-1 flex flex-col items-start justify-center p-4">
            <h1 className="text-[10vw] leading-none bg-clip-text text-left w-full pl-4 text-white/50">
              boundarylab_
            </h1>
            <p className="text-white/60 text-md pl-4 mt-4 max-w-md">
              Grew up in times of accelerated technological change.
            </p>
            <p className="text-white/60 text-sm pl-4 mt-4 max-w-md">
               <a
                href="mailto:office@boundarylab.com"
                className="bg-white/60 text-black hover:bg-black hover:text-white/60 px-2 py-1 transition-colors duration-200"
              >
                contact
              </a>
            </p>
          </div>

          {/* Footer */}
          <footer className="relative p-4 flex justify-between items-start text-xs text-white/70">
            <div className="flex flex-col items-start gap-2 p-4">
              <span>boundarylab.com</span>
            </div>
            <div className="flex items-center gap-8">
              
            </div>
          </footer>
        </div>
      </main>
    </>
  )
}

