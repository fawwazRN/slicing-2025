import appLari from "../assets/design/app-lari.jpg";
import appGoal from "../assets/design/app-goal.jpg";
import appAntistress from "../assets/design/app-antistress.jpg";

export default function CaseStudies() {
  const dataProject = [
    {
      nama: "Website Lariyuk",
      deskripsi:
        "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
      link: "www.google.com",
      img: appLari,
      color: "F1F2FF",
      id: 1,
    },
    {
      nama: "Website myGoals",
      deskripsi:
        "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
      link: "www.google.com",
      img: appGoal,
      color: "F0FFF7",
      id: 2,
    },
    {
      nama: "Website Tahan Marah",
      deskripsi:
        "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
      link: "www.google.com",
      img: appAntistress,
      color: "FFF4F4",
      id: 3,
    },
  ];
  return (
    <section className="relative flex flex-col justify-center items-center gap-20 max-sm:gap-20 bg-[#F9F9FF] px-40 max-sm:px-5 pt-20 w-full overflow-hidden font-inter">
      <div className="text-4xl text-center leading-[55px]">
        <h3>Our recent</h3>
        <h2 className="font-bold">Case studies</h2>
      </div>
      <div className="space-y-20">
        {dataProject.map((datas) => (
          <div
            key={datas.id}
            style={{ backgroundColor: `#${datas.color}` }}
            className="group relative flex flex-row max-sm:flex-col justify-end items-center rounded-2xl h-[400px] max-sm:h-full">
            <img
              src={datas.img}
              alt={datas.nama}
              className="block top-0 left-0 absolute rounded-2xl w-full group-hover:w-1/2 h-full max-sm:h-50 object-cover transition-all duration-300"
            />
            <div className="-z-10 max-sm:z-10 group-hover:z-10 flex flex-col justify-center gap-20 max-sm:mt-60 max-sm:mb-5 px-12.5 max-sm:px-5 w-1/2 max-sm:w-full transition-all -translate-x-full max-sm:translate-x-0 group-hover:translate-x-0 duration-300">
              <div className="space-y-10">
                <h3 className="font-semibold text-[#2D3748] text-3xl">
                  {datas.nama}
                </h3>
                <p className="text-[#4A5568] text-[14px]">{datas.deskripsi}</p>
              </div>
              <div className="flex justify-end">
                <a
                  href={datas.link}
                  className="bg-clip-text bg-linear-to-bl from-[#F76680] to-[#57007B] text-transparent">
                  read more ›
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
