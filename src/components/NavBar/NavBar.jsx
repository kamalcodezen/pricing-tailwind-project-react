import React, { useState } from "react";
import "./NavBar.css";

import Link from "./Link";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
  {
    id: 5,
    name: "Dashboard",
    path: "/dashboard",
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <nav className="flex justify-between p-6 items-center">
        <span onClick={handleMenuToggle} className="flex gap-4 items-center">
          
          {open ? 
           <X></X>  : 
         <Menu></Menu> }


          <h1 className="text-2xl">Pricing </h1>
        </span>

        <ul className="flex gap-5">
          {navItems.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>

        <button className="btn btn-outline btn-primary">Primary</button>
      </nav>

      {/* 
<ul className="flex gap-5">
{
    navItems.map(route =><li><a href={route.path}>{route.name}</a></li> )
}
</ul> */}

      {/* <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/blog">Blog</a></li>
</ul> */}
    </div>
  );
};

export default NavBar;
