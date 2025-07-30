import { FaInstagram, FaTiktok, FaMeta } from 'react-icons/fa6';

export default function FooterSection() {
  return (
    <footer className="bg-brand-orange text-white pt-20 mt-20 font-montserrat">
      <div className="bg-white text-brand-orange max-w-[90%] sm:max-w-[80%] mx-auto px-4 sm:px-6 py-10 rounded-3xl shadow-md -mt-32 border border-brand-orange grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Text */}
        <div className="text-left flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 leading-tight">
            GET ON THE VIP LIST
          </h2>
          <p className="text-md sm:text-lg">
            Sign up for 15% off and be the first to know about our latest offers & news
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="flex flex-col justify-center items-start">
          <div className="flex flex-col sm:flex-row w-full gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-brand-orange rounded-full px-5 py-3 w-full sm:w-1/2 outline-none focus:ring-2 focus:ring-brand-orange transition"
            />
            <input
              type="email"
              placeholder="Your email"
              className="border border-brand-orange rounded-full px-5 py-3 w-full sm:w-1/2 outline-none focus:ring-2 focus:ring-brand-orange transition"
            />
          </div>

          <button className="bg-brand-orange text-white px-8 py-2 rounded-full font-bold hover:opacity-90 transition w-full">
              SIGN UP
            </button>

          <p className="text-sm text-center mt-3 w-full">
              *By signing up, you agree to our <span className="underline cursor-pointer">Privacy Policy</span>.
            </p>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm font-medium pb-10">
        {/* SHOP */}
        <div>
          <h3 className="mb-3 font-bold text-lg">SHOP</h3>
          <ul className="space-y-2">
            {['Lip', 'Face', 'Kits', 'Shop All'].map((item) => (
              <li key={item}>
                <button className="hover:underline hover:text-white cursor-pointer transition-all">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h3 className="mb-3 font-bold text-lg">ABOUT</h3>
          <ul className="space-y-2">
            {['Our Story', 'Clinically Proven'].map((item) => (
              <li key={item}>
                <button className="hover:underline hover:text-white cursor-pointer transition-all">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* HELP */}
        <div>
          <h3 className="mb-3 font-bold text-lg">HELP</h3>
          <ul className="space-y-2">
            {['Contact Us', 'FAQs'].map((item) => (
              <li key={item}>
                <button className="hover:underline hover:text-white cursor-pointer transition-all">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-10 mt-8 md:mt-0 text-4xl">
          <FaMeta className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaTiktok className="cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
