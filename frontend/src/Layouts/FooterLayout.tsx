import React from "react";
import instaIcon from "../assets/insta-icon.svg";
import whatsAppIcon from "../assets/whatsapp-icon.svg";
const FooterLayout: React.FC = () => {
  return (
    <div className="bg-Tertiary flex min-h-[4rem] w-full flex-col gap-3 p-2 text-white">
      <div className="flex w-full items-start justify-between sm:justify-around">
        <div>
          <h3 className="text-lg">Speak and Spell Academy</h3>
          <p>H.No 66, DC Colony</p>
          <p>Hisar, Haryana</p>
          <p>+91 82950 76276</p>
        </div>

        <div className="flex flex-col gap-2">
          <h3>Connect with us</h3>
          <p className="flex gap-2">
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
      <p className="w-full text-center text-sm">
        Copyright © Speak and Spell Academy
      </p>
    </div>
  );
};

export default FooterLayout;
