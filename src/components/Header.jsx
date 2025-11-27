export default function Header() {
  return (
    <header className="max-sm:hidden z-50 fixed flex justify-between items-center bg-white px-6.25 py-2.5 w-full font-inter text-utama">
      <div>
        <h1>LOGO HIRE</h1>
      </div>
      <ul className="flex justify-between py-2.5 w-1/2">
        <li>
          <a href="">about us</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Case Studies</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
        <li>
          <a href="">How it Works</a>
        </li>
        <li>
          <a href="">Hire</a>
        </li>
      </ul>
      <button className="bg-linear-to-bl from-biru to-ungu px-6.25 py-3.5 rounded-md font-semibold text-white">
        Contact us
      </button>
    </header>
  );
}
