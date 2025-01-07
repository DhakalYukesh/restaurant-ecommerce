import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Button from "./button";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-28">
      <div className="web-container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-28">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center gap-2 tracking-widest uppercase">
              Joofi
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Egestas sit in lobortis duis viverra enim eros ornare. Et
              tincidunt pretium curabitur vehicula turpis adipiscing donec. Et
              ut morbi magna quis purus aliquet.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="hover:text-blue-400 transition-colors"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                href="#"
                className="hover:text-blue-400 transition-colors"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                href="#"
                className="hover:text-blue-400 transition-colors"
              >
                <FaYoutube size={20} />
              </Link>
              <Link
                href="#"
                className="hover:text-blue-400 transition-colors"
              >
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>

          {/* Location Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Our Location</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>3 E 19th St, 123 Fifth Avenue,</p>
              <p>NY 10160, New York, USA</p>
              <p>1 234 567 890</p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Link</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Menu", "Testimonial", "Contact Us"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Opening Hours Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Opening Hours</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-5 h-5 rounded-full border border-blue-400 flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
                <div>
                  <p>Sunday to Wednesday</p>
                  <p>9AM - 10.30PM</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-5 h-5 rounded-full border border-blue-400 flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
                <div>
                  <p>Thursday, Friday, Saturday</p>
                  <p>9AM - 12.30AM</p>
                </div>
              </div>
              <Button
                variant="black"
                title="Reservation"
                href="/reservation"
              />
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-6 pb-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>Copyright © 2025 Deli Restaurant</p>
            <p>Visit Joofi Restaurant Today</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
