import sec2Img1 from '../assets/images/sec2-img1.jpeg';
import sec2Img2 from '../assets/images/sec2-img2.jpg';
import sec2Img3 from '../assets/images/sec2-img3.jpg';

function HomePage () {
    return(
        <>
            <section className="h-[513px] bg-[url('https://www.crossfit.com/wp-content/uploads/2022/07/26131121/6-highintensity.jpg')] bg-cover opacity-80">
                <div className="ml-16 flex flex-col justify-around pt-16">
                    <h1 className="text-gray-400 font-sans font-extrabold text-2xl">UNBK TRAINING</h1>
                    <p className="text-white font-sans font-extrabold text-[83px] h-[166px] w-[700px] leading-[5rem]">DO YOU HAVE WHAT IT TAKES?</p>
                    <p className="text-white font-sans font-light text-xl h-[100px] w-[450px]">UNBK Training is a fitness program and community made up of HARD WORKERS who roll up their sleeves and get to work. </p>
                    <button className='text-white bg-amber-500 font-sans font-extrabold text-xl h-[58px] w-[240px] hover:border-amber-500 hover:border-2 hover:bg-black hover:text-amber-500'>JOIN NOW</button>
                </div>
            </section>
            <section className='h-[850px] bg-gray-200 flex flex-col items-center justify-around'>
                <div className=' flex flex-col items-center justify-around h-[387px]'>
                    <h2 className='text-black font-sans font-extrabold text-[64px] mt-[32px]'>UNBROKEN FITNESS</h2>
                    <p className='text-black text-center font-sans font-normal text-xl h-[120px] w-[580px]'>UNBK TRAINING is a program for those who are ready to take their health to the next level. It embodies tenacity, grit, relentless focus and greatness. While born in the gym and on the competition floor, it bleeds into every aspect of our lives.</p>
                    <button className='text-black font-sans font-extrabold text-xl h-[58px] w-[240px] border-2 border-black hover:bg-black hover:text-white'>HEAD COACH BIO</button>
                </div>
                <div className='flex items-center justify-around w-[980px]'>
                    <div className=' w-[308px] h-[300px] bg-cover bg-center contrast-75 flex items-end justify-center' style={{backgroundImage: `url(${sec2Img1})`}} alt='athlete talking to the coach'>
                        <p className='text-white font-sans font-extrabold text-[38px] mb-10'>SHOW UP.</p>
                    </div>
                    <div className=' w-[308px] h-[300px] bg-cover bg-center contrast-75 flex items-end justify-center' style={{backgroundImage: `url(${sec2Img2})`}} alt='athlete talking to the coach'>
                        <p className='text-white font-sans font-extrabold text-[38px] mb-10'>WORK HARD.</p>
                    </div>
                    <div className=' w-[308px] h-[300px] bg-cover bg-center contrast-75 flex items-end justify-center' style={{backgroundImage: `url(${sec2Img3})`}} alt='athlete talking to the coach'>
                        <p className='text-white font-sans font-extrabold text-[38px] mb-10'>UNBK.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage;
