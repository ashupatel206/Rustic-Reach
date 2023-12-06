// components/FileManagerNavbar.js

import React from 'react';

const FileManagerNavbar = () => {
  return (
    
    <nav className='bg-blue-500'>
      <div className="flex px-10 items-center justify-end w-full">
        <div className="text-white font-bold text-xl">Rustic Rusher</div>
        <div className="relative flex  items-center">
          <NavItem label="View" />
          <NavItem label="Sort" />
          <NavItem label="Group" />
          <NavItem label="Browse" />
        </div>
      </div>
    </nav>

  );
};

const NavItem = ({ label }) => (
  <button type='button'
    href="#"
    className=' py-2 px-4 bg-gray-600 text-white rounded-full hover:bg-gray-700'> {/* Adjust the mx-2 for spacing */}
    {label}
  </button>

);

export default FileManagerNavbar;
