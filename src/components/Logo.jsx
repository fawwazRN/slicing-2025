import LogoLoop from "../logo-animation/LogoLoop";
import lg1 from "../assets/logo/lg1.svg";
import lg2 from "../assets/logo/lg2.svg";
import lg3 from "../assets/logo/lg3.svg";

export default function LogoAnimate() {
  const logo = [
    { alt: "tech mate", src: lg1 },
    { alt: "tech mate", src: lg2 },
    { alt: "tech mate", src: lg3 },
  ];
  return (
    <section className="bg-white max-sm:px-5 py-24 font-inter">
      <div className="relative px-40 max-sm:px-0 pb-20 overflow-hidden text-4xl">
        <div className="right-150 -bottom-9 absolute bg-linear-to-bl from-[#F76680] to-[#57007B] rounded-full size-18"></div>
        <div className="bg-linear-to-bl from-[#F76680] to-[#57007B] mb-5 w-17 h-1.25"></div>
        <h2 className="leading-[55px]">
          Meet the People{" "}
          <span className="block font-bold">We are Working With</span>
        </h2>
      </div>
      <div className="bg-[#F9F9FF] py-15">
        <LogoLoop
          logos={logo}
          speed={100}
          direction="left"
          logoHeight={60}
          gap={100}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
}
