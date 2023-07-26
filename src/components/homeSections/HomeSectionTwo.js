import sec2Img1 from "../../assets/images/sec2-img1.jpeg";
import sec2Img2 from "../../assets/images/sec2-img2.jpg";
import sec2Img3 from "../../assets/images/sec2-img3.jpg";
import HomeBannerSmall from "../homeBannerSmall/HomeBannerSmall";
import { easeIn, motion } from "framer-motion";

function HomeSectionTwo() {
  return (
    <section className="h-[850px] bg-gray-200 flex flex-col items-center justify-around">
      <div className=" flex flex-col items-center justify-around h-[387px]">
        <h2 className="text-black font-sans font-extrabold text-[64px] mt-[32px]">
          UNBROKEN FITNESS
        </h2>
        <p className="text-black text-center font-sans font-normal text-xl h-[120px] w-[580px]">
          UNBK TRAINING is a program for those who are ready to take their
          health to the next level. It embodies tenacity, grit, relentless focus
          and greatness. While born in the gym and on the competition floor, it
          bleeds into every aspect of our lives.
        </p>
        <button className="text-black font-sans font-extrabold text-xl h-[58px] w-[240px] border-2 border-black hover:bg-black hover:text-white">
          HEAD COACH BIO
        </button>
      </div>
      <motion.div
        initial={{opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{y: [0, -70]}}
        transition={{type: easeIn}}
        className="flex items-center justify-around w-[980px]"
      >
        <HomeBannerSmall bannerImg={sec2Img1} bannerText={"SHOW UP"} />
        <HomeBannerSmall bannerImg={sec2Img2} bannerText={"WORK HARD"} />
        <HomeBannerSmall bannerImg={sec2Img3} bannerText={"UNBK"} />
      </motion.div>
    </section>
  );
}

export default HomeSectionTwo;
