import Image from "next/image";


export default function ImagePage() {
    return (
        <div className="w-full">
            <Image src="/g_01.png" alt="Background"
                width={1920} height={1080}

                   style={{ width: '100%' }}/>
        </div>
    )
}

