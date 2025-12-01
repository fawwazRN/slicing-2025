import { useState } from "react";
import zhafran from "../assets/orang/zhafran.jpg";
import bobo from "../assets/orang/bobo.jpg";
const testimoniin = [
  {
    id: 1,
    review:
      "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've came across so far. Wouldn't be hesitant to introduce their work to someone else.",
    name: "Zhafran Atha",
    title: "Web Developer With AI",
    rating: 5,
    avatar: zhafran, // Ganti dengan URL/path gambar Anda
  },
  {
    id: 2,
    review:
      "Kualitas kerja yang sangat profesional dan hasil digital marketing mereka luar biasa. Sangat direkomendasikan untuk semua kebutuhan pemasaran online.",
    name: "Zhafran Kebo Suka Bobo",
    title: "Penyelenggara Lomba Tidur Terlama",
    rating: 4,
    avatar: bobo, // Ganti dengan URL/path gambar Anda
  },
  {
    id: 3,
    review:
      "Pelayanannya cepat dan timnya sangat responsif. Mereka benar-benar mengerti apa yang kami butuhkan dan melampaui harapan kami.",
    name: "John Doe",
    title: "Project Manager",
    rating: 5,
    avatar: "https://via.placeholder.com/150/24375e", // Ganti dengan URL/path gambar Anda
  },
];
function CardProfile({ Testimoni, isActive, onClick }) {
  const bintang = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };
  return (
    <div
      className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
        isActive ? "opacity-100" : "opacity-60"
      }`}
      onClick={onClick}>
      <div
        className={`p-1 rounded-full transition-all duration-300 ${
          isActive ? "bg-linear-to-r from-purple-500 to-pink-500" : ""
        }`}>
        <img
          src={Testimoni.avatar}
          alt={Testimoni.name}
          className="border-4 border-white rounded-full w-20 h-20 object-cover"
        />
        {/* Bintang */}
      </div>
      <div className="mt-2 text-yellow-400 text-xl">
        {bintang(Testimoni.rating)}
      </div>

      {/* Nama dan Jabatan */}
      <p className="mt-1 font-bold text-gray-800">{Testimoni.name}</p>
      <p className="text-gray-500 text-sm">{Testimoni.title}</p>
    </div>
  );
}

export default function Testimoni() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentTestimonial = testimoniin[activeIndex];
  const next = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimoniin.length);
  };
  const sebelum = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimoniin.length) % testimoniin.length
    );
  };
  const handleProfile = (index) => {
    setActiveIndex(index);
  };
  return (
    <section className="bg-white py-12 font-inter">
      <div className="mx-auto px-20">
        {/* header */}
        <div className="mb-10 text-center">
          <div className="bg-purple-600 mx-auto mb-2 w-16 h-1"></div>
          <h2 className="text-gray-800 text-4xl">
            Why customers love{" "}
            <span className="block font-bold">working with us</span>
          </h2>
        </div>
        {/* slider container */}
        <div className="flex justify-between items-center gap-20">
          {/* Tombol Kiri (Prev) */}
          <button
            // Styling Tombol Kiri: lingkaran putih, border ungu, ikon ungu, posisi absolut
            className="flex justify-center items-center bg-white hover:bg-[#57007B] p-5 border-[#57007B] border-2 hover:border-white rounded-full text-[#57007B] hover:text-white transition-all duration-300 cursor-pointer"
            onClick={sebelum}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon-tabler-arrow-left icons-tabler-outline icon icon-tabler">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M5 12l6 6" />
              <path d="M5 12l6 -6" />
            </svg>
          </button>

          {/* Konten Ulasan Aktif */}
          <div className="relative flex items-center min-h-[120px] text-center transition-opacity duration-500">
            <svg
              className="top-0 absolute"
              width="14"
              height="24"
              viewBox="0 0 14 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.63251 11.7051C3.7578 12.6801 5.1771 13.2504 6.66417 13.325C8.15124 13.3996 9.62047 12.9742 10.8377 12.1166C12.0549 11.2591 12.95 10.0188 13.3803 8.59339C13.8106 7.16799 13.7513 5.63956 13.212 4.25175C12.6726 2.86393 11.6842 1.69661 10.4043 0.935866C9.12438 0.175121 7.62663 -0.135258 6.1498 0.0542014C4.67296 0.243661 3.30206 0.922055 2.25561 1.98124C1.20916 3.04043 0.547413 4.41945 0.37584 5.89847C-0.217493 8.91513 -0.210827 12.5101 1.14917 15.7318C2.58584 19.1318 5.48417 21.9985 10.4325 23.2935C10.5919 23.3368 10.7582 23.3481 10.922 23.3268C11.0857 23.3055 11.2436 23.2519 11.3866 23.1692C11.5295 23.0865 11.6547 22.9763 11.7548 22.8449C11.8548 22.7136 11.9279 22.5637 11.9698 22.404C12.0116 22.2442 12.0214 22.0777 11.9985 21.9142C11.9756 21.7506 11.9206 21.5932 11.8365 21.4511C11.7525 21.3089 11.6411 21.1849 11.5088 21.086C11.3765 20.9871 11.226 20.9155 11.0658 20.8751C6.84751 19.7701 4.57917 17.4251 3.45251 14.7585C3.04615 13.7812 2.77044 12.7545 2.63251 11.7051Z"
                fill="url(#paint0_linear_1_535)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_535"
                  x1="9.53674e-06"
                  y1="0"
                  x2="20.3519"
                  y2="11.9167"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#F76680" />
                  <stop offset="1" stop-color="#57007B" />
                </linearGradient>
              </defs>
            </svg>

            <p className="text-gray-700 text-xl italic leading-relaxed">
              {currentTestimonial.review}
            </p>
            <svg
              className="right-0 bottom-0 absolute rotate-y-180"
              width="14"
              height="24"
              viewBox="0 0 14 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.63251 11.7051C3.7578 12.6801 5.1771 13.2504 6.66417 13.325C8.15124 13.3996 9.62047 12.9742 10.8377 12.1166C12.0549 11.2591 12.95 10.0188 13.3803 8.59339C13.8106 7.16799 13.7513 5.63956 13.212 4.25175C12.6726 2.86393 11.6842 1.69661 10.4043 0.935866C9.12438 0.175121 7.62663 -0.135258 6.1498 0.0542014C4.67296 0.243661 3.30206 0.922055 2.25561 1.98124C1.20916 3.04043 0.547413 4.41945 0.37584 5.89847C-0.217493 8.91513 -0.210827 12.5101 1.14917 15.7318C2.58584 19.1318 5.48417 21.9985 10.4325 23.2935C10.5919 23.3368 10.7582 23.3481 10.922 23.3268C11.0857 23.3055 11.2436 23.2519 11.3866 23.1692C11.5295 23.0865 11.6547 22.9763 11.7548 22.8449C11.8548 22.7136 11.9279 22.5637 11.9698 22.404C12.0116 22.2442 12.0214 22.0777 11.9985 21.9142C11.9756 21.7506 11.9206 21.5932 11.8365 21.4511C11.7525 21.3089 11.6411 21.1849 11.5088 21.086C11.3765 20.9871 11.226 20.9155 11.0658 20.8751C6.84751 19.7701 4.57917 17.4251 3.45251 14.7585C3.04615 13.7812 2.77044 12.7545 2.63251 11.7051Z"
                fill="url(#paint0_linear_1_535)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_535"
                  x1="9.53674e-06"
                  y1="0"
                  x2="20.3519"
                  y2="11.9167"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#F76680" />
                  <stop offset="1" stop-color="#57007B" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Tombol Kanan (Next) */}
          <button
            // Styling Tombol Kanan: lingkaran ungu, ikon putih, posisi absolut
            className="flex justify-center items-center bg-white hover:bg-[#57007B] p-5 border-[#57007B] border-2 hover:border-white rounded-full text-[#57007B] hover:text-white transition-all duration-300 cursor-pointer"
            onClick={next}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon-tabler-arrow-right icons-tabler-outline icon icon-tabler">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </svg>
          </button>
        </div>
        {/* Daftar Profil Pelanggan di Bagian Bawah */}
        <div className="flex justify-center gap-25 mt-16">
          {testimoniin.map((t, index) => (
            <CardProfile
              key={t.id}
              Testimoni={t}
              isActive={index === activeIndex}
              onClick={() => handleProfile(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
