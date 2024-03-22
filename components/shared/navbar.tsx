import Link from "next/link";
import { MobileNav } from "./mobileNav";

export default function Navbar() {
  return (
    <div className="w-full bg-slate-800 h-10 text-white flex flex-row justify-between">
      <MobileNav />
      <Link href="/#discussion">
        <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
          Discussion Forum
        </div>
      </Link>
      <Link href="/#market">
        <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
          Market Stories
        </div>
      </Link>
    </div>
  );
}
