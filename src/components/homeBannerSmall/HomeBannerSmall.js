
function HomeBannerSmall ({bannerImg, bannerText}) {
    return (
        <>
         <div
            className=" w-[308px] h-[300px] bg-cover bg-center contrast-75 flex items-end justify-center"
            style={{ backgroundImage: `url(${bannerImg})` }}
            alt="athlete talking to the coach"
          >
            <p className="text-white font-sans font-extrabold text-[38px] mb-10">
              {bannerText}
            </p>
          </div>
        </>
    );
};

export default HomeBannerSmall;
