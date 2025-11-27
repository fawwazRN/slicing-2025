import heroSVG from "../assets/hero.svg";

export default function Hero() {
  return (
    <section className="relative flex justify-center max-sm:justify-start items-center gap-40 px-40 max-sm:px-5 max-sm:pr-60 w-full h-screen overflow-hidden">
      <div>
        <h1 className="mb-7 font-light text-5xl max-sm:text-7xl">
          Great
          <span className="bg-clip-text bg-linear-to-b from-[#DE4396] to-[#0D1C9F]/50 font-semibold text-transparent">
            {" "}
            Product{" "}
          </span>{" "}
          is{" "}
          <span className="font-extrabold">
            built by great{" "}
            <span className="bg-clip-text bg-linear-to-b from-[#DE4396] to-[#0D1C9F]/50 text-transparent">
              teams
            </span>
          </span>
        </h1>
        <p className="max-sm:hidden mb-18.75 text-utama">
          We help build and manage a team of world-class developers to bring
          your vision to life
        </p>
        <button className="max-sm:hidden bg-biru px-6.25 py-3.5 rounded-md font-semibold text-white">
          Let's get started!
        </button>
      </div>
      <div className="max-sm:hidden">
        <img src={heroSVG} alt="" />
      </div>
      <div className="-bottom-9 left-120.75 absolute bg-linear-to-bl from-[#F76680] to-[#57007B] rounded-full size-18"></div>
    </section>
  );
}
