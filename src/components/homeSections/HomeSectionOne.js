function HomeSectionOne() {
  return (
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
          WORKERS who roll up their sleeves and get to work.
        </p>
        <button className="text-white bg-amber-500 font-sans font-extrabold text-xl h-[58px] w-[240px] hover:border-amber-500 hover:border-2 hover:bg-black hover:text-amber-500">
          JOIN NOW
        </button>
      </div>
    </section>
  );
}

export default HomeSectionOne;
