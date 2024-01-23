"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";
import Buttons from "@/components/ui/Buttons";
import { useCartProductsStore } from "@/store/CartProductStore";
import ShoppingCart from "@/components/icons/ShoppingCart";
export default function Heeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [count, setCount] = useState(0);
  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Menu", href: "/menu" },
    { title: "About", href: "/#about" },
    { title: "Contact", href: "/#contact" },
  ];
  const cartProducts = useCartProductsStore((state) => state.cartProducts);
  //The use of useEffect is to prevent the hydration problem:
  useEffect(() => {
    setCount(cartProducts.length);
  }, [cartProducts]);

  return (
    <header className="flex items-center justify-between font-poppins font-xl">
      <Navbar onMenuOpenChange={setIsMenuOpen} className="backdrop-saturate-100 backdrop-blur-0 bg-transparent">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-white"
          />
          <NavbarBrand>
            <Link
              className="text-white dark:text-primary font-semibold text-2xl"
              href="/"
            >
              <img className="w-30 h-24 text-white" src={"/loo.png"} alt="chat logo" loading="lazy" width="128" height="128"/>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        {menuItems.map((item) => (
          <NavbarContent
            className="hidden sm:flex gap-4"
            justify="center"
            key={item.title}
          >
            <NavbarItem>
              <Link
                color="foreground"
                href={item.href}
                className="font-extrabold text-white dark:hover:text-primary duration-150 ease-in-out"
              >
                {item.title}
              </Link>
            </NavbarItem>
          </NavbarContent>
        ))}
        <NavbarContent justify="end">
          <NavbarItem className="hidden sm:flex gap-2">
            <Buttons />
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={item.title}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href={item.href}
                size="lg"
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
          <Buttons />
        </NavbarMenu>

        <Link href={"/cart"} className="relative text-white">
          <ShoppingCart />
          {count > 0 && (
            <span className="absolute -top-2 -right-4 bg-primary text-white text-xs p-1 rounded-full leading-3">
              {count}
            </span>
          )}
        </Link>
      </Navbar>
    </header>
  );
}
