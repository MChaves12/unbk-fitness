import sec3Img1 from "../../assets/images/sec3-img1.jpg";

function HomeSectionThree() {
  return (
    <section className="h-[600px] bg-white flex items-center justify-around">
      <div className=" flex flex-col items-left justify-around h-[387px]">
        <h2 className="w-[470px] text-black font-sans font-extrabold text-[52px] mt-[32px]">
          UNBK PROGRAMMIMG
        </h2>
        <p className="w-[470px] text-black text-left font-sans font-normal text-xl h-[120px]">
          Ready to work hard? Browse our programs and workouts to learn more
          about training with HWPO.
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
  );
}

export default HomeSectionThree;
