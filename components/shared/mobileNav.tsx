import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AvatarIcon, BellIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Separator } from "../ui/separator";

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerMenuIcon className="w-8 h-8 m-1 sm:m-2 sm:w-6 sm:h-6" />
      </SheetTrigger>
      <SheetContent side="left" className="gap-y-5 flex flex-col w-1/2 p-0">
        <div className="flex size-full flex-col bg-gray-800 text-white gap-4">
          <div className="flex justify-between p-2">
            <div className="flex flex-row">
              <AvatarIcon className="h-8 w-8 hover:bg-gray-700 cursor-pointer" />
              <span className=" p-1 text-lg ">Hello, User</span>
            </div>
            <div className="mr-6 sm:mr-auto">
              <BellIcon className="h-8 w-8 hover:bg-gray-700 cursor-pointer" />
            </div>
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
      </SheetContent>
    </Sheet>
  );
};
