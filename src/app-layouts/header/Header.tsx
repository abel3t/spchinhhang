import React, { useState } from 'react';
import AutoComplete from 'components/AutoComplete';

export default function Header() {
  const [ selectedOption, setSelectedOption ] = useState('');

  return (
    <>
      <nav className="py-2 md:py-4" style={{ backgroundColor: '#027FFF' }}>
        <div className="container px-4 mx-auto md:flex md:items-center">
          <a href="#" className="font-bold text-xl text-indigo-600">
            <Logo/>
          </a>

          <AutoComplete options={[ 'Chennai', 'Mumbai', 'Bangalore' ]}
                        value={selectedOption}
                        onChange={setSelectedOption}
          />

          <a href="#"
             className="p-2 lg:px-4 md:mx-2 text-white text-center border border-solid border-white rounded hover:bg-blue-700  hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Liên
            hệ quảng cáo </a>
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