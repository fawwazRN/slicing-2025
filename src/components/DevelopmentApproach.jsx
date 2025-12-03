import code from "../assets/services/code.svg";

export default function DevelopmentApproach() {
  const dataTugas = [
    {
      nama: "UX Driven Engineering",
      deskripsi: [
        "Unlike other companies, we are a ",
        // ✨ Bagian yang ingin di-gradient
        <span
          key="highlight1"
          className="bg-clip-text text-transparent bg-linear-to-b from-(--color-start) to-(--color-end) font-bold">
          UX first
        </span>,
        " development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      ],
      img: code,
      colorFirst: "#29272E",
      colorSecond: "#27272E",
      id: 1,
    },
    {
      nama: "Developing Shared Understanding",
      deskripsi: [
        "Unlike other companies, we are a ",
        // ✨ Bagian yang ingin di-gradient
        <span
          key="highlight1"
          className="bg-clip-text text-transparent bg-linear-to-b from-(--color-start) to-(--color-end) font-bold">
          UX first
        </span>,
        " development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      ],
      img: code,
      colorFirst: "#68DBF2",
      colorSecond: "#509CF5",
      id: 2,
    },
    {
      nama: "Proven Experience and Expertise",
      deskripsi: [
        "Unlike other companies, we are a ",
        // ✨ Bagian yang ingin di-gradient
        <span
          key="highlight1"
          className="bg-clip-text text-transparent bg-linear-to-b from-(--color-start) to-(--color-end) font-bold">
          UX first
        </span>,
        " development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      ],
      img: code,
      colorFirst: "#FF92AE",
      colorSecond: "#FF3D9A",
      id: 3,
    },
    {
      nama: "Security & Intellectual Property (IP)",
      deskripsi: [
        "Unlike other companies, we are a ",
        // ✨ Bagian yang ingin di-gradient
        <span
          key="highlight1"
          className="bg-clip-text text-transparent bg-linear-to-b from-(--color-start) to-(--color-end) font-bold">
          UX first
        </span>,
        " development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      ],
      img: code,
      colorFirst: "#67E9F1",
      colorSecond: "#24E795",
      id: 4,
    },
  ];
  return (
    <section className="relative flex flex-col justify-center items-center gap-20 max-sm:gap-10 bg-[#F7F7FA] px-40 max-sm:px-5 pt-20 pb-20 w-full overflow-hidden font-inter">
      <div className="text-4xl text-center leading-[55px]">
        <div className="bg-linear-to-bl from-[#F76680] to-[#57007B] m-auto mb-5 w-17 h-1.25"></div>

        <h3>Our design and</h3>
        <h2 className="font-bold">development approach</h2>
      </div>
      <div className="gap-6.25 grid grid-cols-2 max-sm:grid-cols-1">
        {dataTugas.map((datas) => (
          <div
            key={datas.id}
            className="group flex max-sm:flex-col justify-center items-start gap-10 bg-[#FAFAFA] px-5 py-12.5 border border-[#E7DAED]"
            style={{
              "--color-start": datas.colorFirst,
              "--color-end": datas.colorSecond,
            }}>
            <img
              src={datas.img}
              alt={datas.nama}
              className="px-2.5 py-3 bg-linear-to-bl from-(--color-start) to-(--color-end) rounded-xl"
            />
            <div className="">
              <div className="space-y-3">
                <h3 className="font-semibold text-[#2D3748] text-xl">
                  {datas.nama}
                </h3>
                <p className="text-[#4A5568] text-[14px]">{datas.deskripsi}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
