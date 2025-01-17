import { InfiniteSlider } from "@/components/ui/infinite-slider";

function InfiniteSliderVertical() {
    return (
        <div className='flex h-[500px] space-x-4'>
            <InfiniteSlider direction='vertical'>
                <img
                    src='/01.png'
                    alt='Dean blunt - Black Metal 2'
                    className=' w-[500px] rounded-[4px]'
                />
                <img
                    src='/02.png'
                    alt='Jungle Jack - JUNGLE DES ILLUSIONS VOL 2'
                    className=' w-[500px] rounded-[4px]'
                />
                <img
                    src='/03.png'
                    alt='Yung Lean - Stardust'
                    className=' w-[500px] rounded-[4px]'
                />
                <img
                    src='/04.png'
                    alt='Lana Del Rey - Ultraviolence'
                    className=' w-[500px] rounded-[4px]'
                />
                <img
                    src='/05.jpg'
                    alt='A$AP Rocky - Tailor Swif'
                    className=' w-[500px] rounded-[4px]'
                />
                <img
                    src='/tmpwcjawzo4.jpeg'
                    alt='Midnight Miami (feat Konvy) - Nino Paid, Konvy'
                    className=' w-[500px] rounded-[4px]'
                />
            </InfiniteSlider>
            <InfiniteSlider direction='vertical' reverse>
                <img
                    src='/01.png'
                    alt='DAYS BEFORE RODEO - Travis Scott'
                    className=' w-[500px] rounded-[4px]'
                />
                <img
                    src='/02.png'
                    alt="You're in My System - TORYONTHEBEAT"
                    className=' w-[500px] rounded-[4px]'
                />
                <img
                    src='/03.png'
                    alt="You can't tell me - People Make the World Go Round"
                    className=' w-[500px] rounded-[4px]'
                />
                <img
                    src='/04.png'
                    alt='ye - Kanye West'
                    className=' w-[500px] rounded-[4px]'
                />
                <img
                    src='/05.jpg'
                    alt='Slime Season 3 - Young Thug'
                    className=' w-[500px] rounded-[4px]'
                />
                <img
                    src='/tmpwcjawzo4.jpeg'
                    alt='SWAG - 8ruki'
                    className=' w-[500px] rounded-[4px]'
                />
            </InfiniteSlider>
        </div>
    );
}

export default InfiniteSliderVertical;