import React, { useState } from 'react';
import AutoComplete from 'components/AutoComplete';

export default function Header() {
  return (
    <>
      <nav className="relative py-6 bg-primary">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a className="text-3xl font-bold leading-none" href="#">
            <img className="h-12"
                 src="https://spchinhhang.s3-ap-southeast-1.amazonaws.com/logo.svg" alt=""
                 width="100px"/>
          </a>
          <ul
            className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            <li><a className="text-sm text-white hover:text-gray-500" href="#">Start</a></li>

            <li><a className="text-sm text-white font-bold" href="#">About Us</a></li>

            <li><a className="text-sm text-white hover:text-gray-500" href="#">Services</a></li>

            <li><a className="text-sm text-white hover:text-gray-500" href="#">Platform</a></li>

            <li><a className="text-sm text-white hover:text-gray-500" href="#">Testimonials</a></li>
          </ul>

          <a
            className="hidden lg:inline-block py-2 px-6 bg-primaryBold hover:bg-blue-700 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200"
            href="#">Liên hệ quảng cáo</a>
        </div>
      </nav>
    </>
  );
}

const Logo = () => {
  return (
    <img
      style={{ width: 100, height: 60, color: '#fff' }}
      src="https://spchinhhang.s3-ap-southeast-1.amazonaws.com/logo.svg"
      alt=" Workflow"
    />
  );
};