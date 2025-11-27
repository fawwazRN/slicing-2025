import lorem from "../assets/hero.svg";

export default function Penjelasan() {
  return (
    <section className="relative flex max-sm:flex-col-reverse justify-center items-center gap-40 max-sm:gap-20 bg-white px-40 max-sm:px-5 pt-20 w-full overflow-hidden font-inter">
      <div className="-top-9 left-120.75 absolute bg-linear-to-bl from-[#F76680] to-[#57007B] rounded-full size-18"></div>
      <div className="w-4/5">
        <div className="bg-linear-to-bl from-[#F76680] to-[#57007B] mb-5 w-17 h-1.25"></div>
        <h2 className="mb-7.5 text-4xl leading-[55px]">
          Leading companies trust us{" "}
          <span className="font-bold">to develop software</span>
        </h2>
        <p className="mb-12.5 leading-9">
          We{" "}
          <span className="bg-clip-text bg-linear-to-bl from-[#F76680] to-[#57007B] text-transparent">
            add development capacity
          </span>{" "}
          to tech teams. Our value isn't limited to building teams but is
          equally distributed across the project lifecycle. We are a custom
          software development company that guarantees the successful delivery
          of your project.
        </p>
        <a
          href=""
          className="bg-clip-text bg-linear-to-bl from-[#F76680] to-[#57007B] text-transparent">
          See more Information →
        </a>
      </div>
      <div className="w-full">
        <img src={lorem} alt="" />
      </div>
    </section>
  );
}
