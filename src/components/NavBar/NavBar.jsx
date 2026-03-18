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

  const links = navItems.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));

  return (
    <div>
      <nav className="flex justify-between p-6 items-center">
        {/* drop down */}
        <span
          onClick={() => setOpen(!open)}
          className="flex gap-4 items-center "
        >
          {open ? (
            <X className="md:hidden cursor-pointer "></X>
          ) : (
            <Menu className="md:hidden cursor-pointer "></Menu>
          )}

          <ul
            className={`md:hidden absolute left-4 right-4 mt-4 rounded-2xl backdrop-blur-lg bg-purple-600/30 border border-white/20 shadow-2xl px-6 py-4 space-y-3 transform transition-all duration-500 origin-top z-1 ${
              open
               ? "scale-100 translate-y-30"
                : "opacity-0 scale-75 -translate-y-2 pointer-events-none"
            }`}
          >
            {links}
          </ul>




          <h1 className="text-2xl font-bold"><span className="text-purple-300">Kamal</span> UI</h1>
        </span>

        {/* middle menu */}

        <ul className=" gap-5 hidden md:flex">{links}</ul>

        {/* end menu */}
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
