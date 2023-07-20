import sec2Img1 from "../assets/images/sec2-img1.jpeg";
import sec2Img2 from "../assets/images/sec2-img2.jpg";
import sec2Img3 from "../assets/images/sec2-img3.jpg";
import sec3Img1 from "../assets/images/sec3-img1.jpg";

function HomePage() {
  return (
    <>
      <section className="h-[513px] bg-[url('https://www.crossfit.com/wp-content/uploads/2022/07/26131121/6-highintensity.jpg')] bg-cover opacity-80">
        <div className="ml-16 flex flex-col justify-around pt-16">
          <h1 className="text-gray-400 font-sans font-extrabold text-2xl">
            UNBK TRAINING
          </h1>
          <p className="text-white font-sans font-extrabold text-[83px] h-[166px] w-[700px] leading-[5rem]">
            DO YOU HAVE WHAT IT TAKES?
          </p>
          <p className="text-white font-sans font-light text-xl h-[100px] w-[450px]">
            UNBK Training is a fitness program and community made up of HARD
            WORKERS who roll up their sleeves and get to work.{" "}
          </p>
          <button className="text-white bg-amber-500 font-sans font-extrabold text-xl h-[58px] w-[240px] hover:border-amber-500 hover:border-2 hover:bg-black hover:text-amber-500">
            JOIN NOW
          </button>
        </div>
      </section>
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
      <section className="h-[600px] bg-white flex items-center justify-around">
        <div className=" flex flex-col items-left justify-around h-[387px]">
            <h2 className="w-[470px] text-black font-sans font-extrabold text-[52px] mt-[32px]">
            UNBK PROGRAMMIMG
            </h2>
            <p className="w-[470px] text-black text-left font-sans font-normal text-xl h-[120px]">
            Ready to work hard? Browse our programs and workouts to learn more about training with HWPO.
            </p>
            <button className="text-black font-sans font-extrabold text-xl h-[58px] w-[240px] border-2 border-black hover:bg-black hover:text-white">
            VIEW PROGRAMS
            </button>
        </div>
        <div>
            <div
                className=" w-[550px] h-[600px] bg-cover bg-right contrast-75 mr-10"
                style={{ backgroundImage: `url(${sec3Img1})` }}
                alt="athlete resting"
            ></div>
        </div>
      </section>
      <section className="h-[500px] bg-gray-200 flex flex-col items-center justify-around">
            <h2 className="w-[470px] text-black text-center font-sans font-extrabold text-[52px] mt-[60px]">
            STAY UPDATED
            </h2>
            <p className="text-black text-center font-sans font-normal text-xl">
            Subscribe to our mailing list for the latest news and updates.
            </p>
        <div className=" bg-gray-300 w-[460px] h-[218px] flex-col items-center justify-around flex-wrap mb-9">
            <form className="h-[218px] flex items-center justify-around flex-wrap">
                <input className=" w-[218px] h-[50px] p-3 " type="text" name="name" placeholder="FIRST NAME"/>
                <input className=" w-[218px] h-[50px] p-3 " type="text" name="last name" placeholder="LAST NAME" />
                <input className=" w-[450px] h-[50px] p-3" type="email" name="email" placeholder="EMAIL" />
                <button className="text-black font-sans font-extrabold text-xl h-[58px] w-[450px] border-2 border-black hover:bg-black hover:text-white">
                    SUBSCRIBE
                </button>
            </form>
        </div>
      </section>
    </>
  );
}

export default HomePage;
