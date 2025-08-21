"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { Github, Mail } from "lucide-react";
import Link from "next/link";

// Logo Component
export const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default function HomeNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Menu items with hrefs for pages or sections
  const menuItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "BLOG", href: "/blog" },
    { name: "CONTACTS", href: "/#contact" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#0D1117] text-green-400 border-b border-green-600/20"
    >
      <NavbarContent>
        {/* Mobile menu toggle */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-green-400 hover:text-green-200"
        />

        {/* Brand */}
        <NavbarBrand className="flex items-center gap-2">
          <AcmeLogo />
          <p className="font-mono text-xl text-green-400 hover:text-green-200 cursor-pointer">
            ACME
          </p>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Menu */}
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menuItems.map((item, idx) => (
          <NavbarItem
            key={item.name}
            className="font-mono text-green-400 hover:text-green-200 transition-colors relative group"
          >
            <Link href={item.href}>
              <span className="mr-1">&gt;_</span>
              {item.name.toLowerCase()}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all"></span>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Social Icons */}
      <NavbarContent justify="end" className="gap-4">
        <NavbarItem>
          <Link href={"#"} className="hover:text-green-200 transition-colors">
            <Github className="text-green-400 hover:animate-pulse" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={"#"} className="hover:text-green-200 transition-colors">
            <Mail className="text-green-400 hover:animate-pulse" />
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-[#0D1117] text-green-400">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`} className="font-mono">
            <Link
              href={item.href}
              className="w-full hover:text-green-200 transition-colors"
            >
              <span className="mr-1">&gt;_</span>
              {item.name.toLowerCase()}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
