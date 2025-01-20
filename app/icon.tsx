import { ImageResponse } from 'next/og'
import {  Major_Mono_Display } from 'next/font/google'
// Image metadata
export const size = {
    width: 32,
    height: 32,
}



const majorMonoDisplay = Major_Mono_Display({
    subsets: ['latin'],
    weight: ['400']
})

export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: '20px',
                    background: '#FF4C2C',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'black',
                    borderRadius: '8px',
                    fontFamily: majorMonoDisplay.className
                }}
            >g
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported icons size metadata
            // config to also set the ImageResponse's width and height.
            ...size,
        }
    )
}