function HomeSectionFour() {
  return (
    <section className="h-[500px] bg-gray-200 flex flex-col items-center justify-around">
      <h2 className="w-[470px] text-black text-center font-sans font-extrabold text-[52px] mt-[60px]">
        STAY UPDATED
      </h2>
      <p className="text-black text-center font-sans font-normal text-xl">
        Subscribe to our mailing list for the latest news and updates.
      </p>
      <div className=" bg-gray-300 w-[460px] h-[218px] flex-col items-center justify-around flex-wrap mb-9">
        <form className="h-[218px] flex items-center justify-around flex-wrap">
          <input
            className=" w-[218px] h-[50px] p-3 "
            type="text"
            name="name"
            placeholder="FIRST NAME"
          />
          <input
            className=" w-[218px] h-[50px] p-3 "
            type="text"
            name="last name"
            placeholder="LAST NAME"
          />
          <input
            className=" w-[450px] h-[50px] p-3"
            type="email"
            name="email"
            placeholder="EMAIL"
          />
          <button className="text-black font-sans font-extrabold text-xl h-[58px] w-[450px] border-2 border-black hover:bg-black hover:text-white">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
}

export default HomeSectionFour;
