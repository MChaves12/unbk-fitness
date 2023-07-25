import sec2Img1 from "../../assets/images/sec2-img1.jpeg";
import sec2Img2 from "../../assets/images/sec2-img2.jpg";
import sec2Img3 from "../../assets/images/sec2-img3.jpg";

function HomeSectionTwo () {
    return(
        <section className="h-[850px] bg-gray-200 flex flex-col items-center justify-around">
        <div className=" flex flex-col items-center justify-around h-[387px]">
          <h2 className="text-black font-sans font-extrabold text-[64px] mt-[32px]">
            UNBROKEN FITNESS
          </h2>
          <p className="text-black text-center font-sans font-normal text-xl h-[120px] w-[580px]">
            UNBK TRAINING is a program for those who are ready to take their
            health to the next level. It embodies tenacity, grit, relentless
            focus and greatness. While born in the gym and on the competition
            floor, it bleeds into every aspect of our lives.
          </p>
          <button className="text-black font-sans font-extrabold text-xl h-[58px] w-[240px] border-2 border-black hover:bg-black hover:text-white">
            HEAD COACH BIO
          </button>
        </div>
        <div className="flex items-center justify-around w-[980px]">
          <div
            className=" w-[308px] h-[300px] bg-cover bg-center contrast-75 flex items-end justify-center"
            style={{ backgroundImage: `url(${sec2Img1})` }}
            alt="athlete talking to the coach"
          >
            <p className="text-white font-sans font-extrabold text-[38px] mb-10">
              SHOW UP.
            </p>
          </div>
          <div
            className=" w-[308px] h-[300px] bg-cover bg-center contrast-75 flex items-end justify-center"
            style={{ backgroundImage: `url(${sec2Img2})` }}
            alt="athlete talking to the coach"
          >
            <p className="text-white font-sans font-extrabold text-[38px] mb-10">
              WORK HARD.
            </p>
          </div>
          <div
            className=" w-[308px] h-[300px] bg-cover bg-center contrast-75 flex items-end justify-center"
            style={{ backgroundImage: `url(${sec2Img3})` }}
            alt="athlete talking to the coach"
          >
            <p className="text-white font-sans font-extrabold text-[38px] mb-10">
              UNBK.
            </p>
          </div>
        </div>
      </section>
    );
};

export default HomeSectionTwo;
