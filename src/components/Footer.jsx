export default function Footer() {
  return (
    <footer className="px-40 max-sm:px-5 py-20 pb-0 font-inter text-[#718096]">
      <div className="max-sm:justify-center gap-20 pb-5 border-b border-b-gray-400 footer footer-horizontal">
        <div className="max-sm:hidden">
          <h3 className="font-bold text-gray-700 uppercase">LOGO</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <nav className="max-sm:hidden">
          <h3 className="font-bold text-gray-700 uppercase">Links</h3>
          <a href="">About Us</a>
          <a href="">Services</a>
          <a href="">Case Studies</a>
          <a href="">How it Work</a>
          <a href="">Blog</a>
          <a href="">Careers</a>
          <a href="">Areas We Serve</a>
        </nav>
        <div className="max-sm:hidden">
          <h3 className="font-bold text-gray-700 uppercase">Contact us</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p>+923183561921</p>
        </div>
        <div className="flex justify-end items-end content-end gap-3 h-full">
          <a
            href=""
            className="bg-gray-50 shadow-black/15 shadow-md p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-brand-facebook">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" />
            </svg>
          </a>
          <a
            href=""
            className="bg-gray-50 shadow-black/15 shadow-md p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icons-tabler-outline icon icon-tabler icon-tabler-brand-instagram">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M16.5 7.5v.01" />
            </svg>
          </a>
          <a
            href=""
            className="bg-gray-50 shadow-black/15 shadow-md p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icons-tabler-outline icon icon-tabler icon-tabler-brand-linkedin">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 11v5" />
              <path d="M8 8v.01" />
              <path d="M12 16v-5" />
              <path d="M16 16v-3a2 2 0 1 0 -4 0" />
              <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
            </svg>
          </a>
          <a
            href=""
            className="bg-gray-50 shadow-black/15 shadow-md p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icons-tabler-outline icon icon-tabler icon-tabler-brand-x">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </a>
        </div>
      </div>
      <div className="py-5 w-full text-center">
        <p>
          © Copyright {new Date().getFullYear()} - All right reserved by Fawwaz
          Romzi Nagib
        </p>
      </div>
    </footer>
  );
}
