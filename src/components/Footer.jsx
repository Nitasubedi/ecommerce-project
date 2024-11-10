// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 ">
      <div className="w-full pl-56 pt-5 bg-white ">
        <h3 className="text-lg font-normal mb-4">PAYMENT METHODS</h3>
        <div className="flex  space-x-4 mt-5 pb-5">
          <a href="/" target="_blank">
            <img src="cash.png" alt="Cash on Delivery" className="w-12" />
          </a>
          <a href="/" target="_blank">
            <img src="visa.png" alt="Visa" className="w-12" />
          </a>
          <a
            href="https://mastercard.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="masterid.png" alt="MasterCard" className="w-12" />
          </a>
          <a
            href="https://esewa.com.np"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="esewa.png" alt="eSewa" className="w-12" />
          </a>
          <a
            href="https://imepay.com.np"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="ime.png" alt="IME Pay" className="w-12" />
          </a>
        </div>
      </div>

      <div className="w-full px-8 bg-gray-100 mb-8 pb-7">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-40 pl-48 mt-9">
          <div>
            <h3 className="text-lg font-medium mb-4 ">
              Experience Hassle-Free Online Shopping in Nepal with Daraz
            </h3>
            <p className="text-xs">
              E-commerce has evolved over the past few years, and since it’s
              easier and more convenient, it is evident that customers are
              actually switching to the trend of online shopping. Daraz, the
              Nepali shopping store, brings a whole new concept by showcasing a
              number of famous brands under one roof. Not only does it fulfill
              clothing necessities of both men and women but you can also shop
              for all kinds of appliances like air conditioners, heaters,
              refrigerators, LED TVs and a lot more. Simply select your favorite
              brand like Samsung, Apple, HP, Huawei, Dell, Canon, Nikon, etc.,
              and get yourself the best electronic items.
            </p>
          </div>

          <div className="pr-44">
            <h3 className="text-lg font-medium mb-4">
              Top Categories & Brands
            </h3>
            <p className="text-xs">
              TRENDING PRODUCTS
              <br />
              Vivo Y-20, Oppo A-12, Samsung Galaxy M13, iPhone 12, Redmi 9A,
              Poco F3, Samsung M12, Oppo F19 Pro, Samsung A32, Infinix, Samsung
              A12, OnePlus Nord 2, Samsung M62, Samsung M32, TVS Ntorq, POCO X3
              Pro, POCO C3, Acer Nitro, Samsung F22, MI 11 Lite, Gold, Macbook
              Air, iPad Pro.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-normal mb-4 pt-4 bg-gray-100 border-t pl-56">
          Follow Us
        </h3>
        <div className="w-full px-8 flex justify-between pl-56 ">
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="facebook.png" alt="Facebook" className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="insta.png" alt="Instagram" className="w-6 h-6" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="youtube.png" alt="YouTube" className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm pr-44">© Daraz 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
