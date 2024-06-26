import React from "react";
import instaIcon from "../assets/insta-icon.svg";
import whatsAppIcon from "../assets/whatsapp-icon.svg";
const FooterLayout: React.FC = () => {
  return (
    <div className="flex min-h-[12rem] w-full flex-col items-center justify-center gap-3 bg-Tertiary/95 p-2 text-white">
      <div className="flex w-full items-start justify-between sm:justify-around">
        <div>
          <h3 className="text-md font-semibold sm:text-lg">
            Speak & Spell Academy
          </h3>
          <p className="text-sm font-medium">H.No 66, DC Colony</p>
          <p className="text-sm font-medium">Hisar, Haryana</p>
          <p className="text-sm font-medium">+91 82950 76276</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="sm:text-md text-sm font-medium">Connect with us</h3>
          <p className="flex w-full justify-center gap-2">
            <a
              href="https://www.instagram.com/speakandspellacademy/"
              target="_blank"
            >
              <img src={instaIcon} alt="Instagram Icon" className="h-8" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=918295076276&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <img src={whatsAppIcon} alt="WhatsApp Icon" className="h-8" />
            </a>
          </p>
        </div>
      </div>
      <p className="w-full border-t border-gray-400 py-3 text-center text-sm">
        Copyright © Speak and Spell Academy
      </p>
    </div>
  );
};

export default FooterLayout;
