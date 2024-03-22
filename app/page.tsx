import DiscussionForum from "@/components/shared/discussion";
import { MobileNav } from "@/components/shared/mobileNav";
import Navbar from "@/components/shared/navbar";
import SideNavBar from "@/components/shared/sideNav";
import MarketStories from "@/components/shared/stories";

export default function Home() {
  return (
    <main className="md:flex w-full min-h-screen p-5 sm:p-4 md:max-w-screen-2xl md:mx-auto overflow-x-auto">
      <SideNavBar />
      <div className="block md:hidden">
        <Navbar />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-7 gap-3 justify-between h-full w-full">
        <div
          className="w-full sm:col-span-6 md:col-span-5 pt-10 sm:pt-0"
          id="discussion"
        >
          <p className="text-4xl text-bold text-primary/60 font-serif">
            DISCUSSION FORUM
          </p>
          <DiscussionForum />
          <DiscussionForum />
          <DiscussionForum />
          <DiscussionForum />
        </div>
        <div className="w-full sm:col-span-4 md:col-span-2" id="market">
          <p className="text-4xl text-bold text-primary/60 font-serif">
            Market Stories
          </p>
          <MarketStories />
          <MarketStories />
          <MarketStories />
        </div>
      </div>
    </main>
  );
}
