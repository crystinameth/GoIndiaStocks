import React from "react";
import { Separator } from "../ui/separator";
import { AvatarIcon, BellIcon } from "@radix-ui/react-icons";

function SideNavBar() {
  return (
    <aside className="hidden h-screen w-72 md:block p-2">
      <div className="flex size-full flex-col bg-gray-800 text-white gap-4">
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
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Market</li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Sector</li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            Watchlist
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Events</li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            News / Interview
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default SideNavBar;
