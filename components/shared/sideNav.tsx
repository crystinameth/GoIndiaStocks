"use client";
import React, { useState } from "react";
import { Separator } from "../ui/separator";
import { AvatarIcon, BellIcon, ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

function SideNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="hidden h-full sm:flex fixed inset-y-0 left-0 z-50 items-center justify-center bg-gray-800 text-white w-12 cursor-pointer transition-all duration-300 ease-in-out ml-0"
        onClick={toggleNav}
      >
        {isOpen ? <ChevronLeftIcon className="h-6 w-6" /> : <ChevronRightIcon className="h-6 w-6" />}
      </div>
      <div
        className={`left-0 top-0 h-screen w-72 bg-gray-800 text-white z-30 transition-all duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full fixed"
        }`}
      >
        <div className="flex h-full flex-col gap-4 pl-12">
          <div className="flex justify-between p-2 pt-4">
            <div className="flex flex-row">
              <AvatarIcon className="h-8 w-8 hover:bg-gray-700 cursor-pointer" />
              <span className=" p-1 text-lg ">Hello, User</span>
            </div>
            <BellIcon className="h-8 w-8 hover:bg-gray-700 cursor-pointer" />
          </div>
          <Separator />
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              Discussion Forum
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              Market Stories
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              Sentiment
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              Market
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              Sector
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              Watchlist
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              Events
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              News / Interview
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideNavBar;
