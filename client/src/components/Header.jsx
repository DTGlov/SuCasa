import React, { useState } from 'react';
import {faBars, faHome} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import * as ROUTES from "../constants/routes";
import NavItems from './NavItems';

function Header() {
  const [hideNav, sethideNav] = useState(false);
  return (
    <div className="sticky z-10 top-0">
      <header className="h-16 bg-[#002349] flex flex-col justify-center text-white  lg:pl-5 lg:pr-4 border-b-2 border-blue-400">
        <nav className="flex justify-between items-center p-4">
          <Link to={ROUTES.HOMEPAGE}>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faHome} className="fa-lg" />
              <h1 className="text-2xl italic">SuCasa</h1>
            </div>
          </Link>

          <div className="flex">
            <div className="hidden md:flex space-x-2 mr-10">
              <p className="cursor-pointer">PROPERTIES</p>
              <p className="cursor-pointer">AGENTS</p>
              <p className="cursor-pointer">SELL WITH US</p>
            </div>
            <div className="md:hidden" onClick={() => sethideNav(!hideNav)}>
              <FontAwesomeIcon icon={faBars} className="fa-lg" />
            </div>
          </div>
        </nav>
      </header>
      <NavItems hideNav={hideNav} />
    </div>
  );
}

export default Header
