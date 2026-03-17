import React from "react";
import "./NavBar.css";

import Link from "./Link";

const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact"
  },
  {
    id: 5,
    name: "Dashboard",
    path: "/dashboard"
  }
];



const NavBar = () => {
  return (
    <div>



<ul className="flex gap-5">
    {
        navItems.map(route => <Link key={route.id} route={route}></Link>)
    }
</ul>




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
