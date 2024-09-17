import Link from 'next/link';
import React from 'react';
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const logo = "<Dammar/>";
  return (
    <header className='flex justify-between items-center h-[50px]'>
      <div className='text-3xl font-bold'>
        <Link href={"/"}>
          {logo}
        </Link>
      </div>
      <div className='text-2xl tezt-[#f4f4f4]'>
        <a href="https://github.com/dammar093">
          <FaGithub />
        </a>
      </div>
    </header>
  )
}

export default Navbar