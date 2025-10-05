"use client";

import { Calculator, Home } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    { href: "/", label: "Home", icon: (<div className="flex flex-row"><Home className="h-7 w-5"/><p>Home</p></div>) },
    { href: "/calculator", label: "Calculator", icon:(<div className="flex flex-row"><Calculator className="h-7 w-5"/><p>Calculator</p></div>) },
  ];

  return (
    <div className="absolute top-0 w-full flex justify-center items-center">
      <div className=" w-full flex justify-center items-center py-1 text-indigo-800 px-1 text-[20px] gap-8 mb-8 lg:text-lg lg:gap-40 lg:py-4 lg:px-100 md:text-lg md:gap-40 md:py-4 md:px-100">
          {navLinks.map((i,_)=>(
            <div key={i.href}><Link href={i.href}>{i.icon}</Link></div>
          ))}
      </div>
    </div>
    
  );
};

export default Navbar;
