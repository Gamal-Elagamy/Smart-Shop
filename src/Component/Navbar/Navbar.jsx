import React from 'react';
import { NavLink } from 'react-router-dom';
import { DarkModeContext } from '../../Context/DarkModeContext';
import logo from '../../../public/logo.png';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";

export default function NavbarComponent() {
  const { darkMode, setDarkMode } = React.useContext(DarkModeContext);

  return (
    <Navbar>
      <NavbarContent>
        <NavbarBrand>
          <NavLink to="/" className="flex items-center">
            <img src={logo} className="h-8" alt="Logo" />
            <p className="font-bold text-inherit">Smart Shop</p>
          </NavLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
