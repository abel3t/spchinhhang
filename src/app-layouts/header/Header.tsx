import React, { useState } from 'react';
import AutoComplete from 'components/AutoComplete';
import Category from '../../components/Category';

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

          <Category/>

          <AutoComplete/>
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