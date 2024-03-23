import DiscussionForum from "@/components/shared/discussion";
import Navbar from "@/components/shared/navbar";
import SideNavBar from "@/components/shared/sideNav";
import MarketStories from "@/components/shared/stories";

export default function Home() {
  return (
    <main className="md:flex w-full min-h-screen p-0 md:max-w-screen-2xl md:mx-auto overflow-x-auto">
      <SideNavBar />
      <div className="block sm:hidden">
        <Navbar />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-7 gap-8 justify-between h-full w-full p-4">
        <div
          className="w-full sm:col-span-7 md:col-span-5 pt-4 sm:pl-10 sm:pt-0"
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
        <div
          className="w-full sm:col-span-5 md:col-span-2 sm:pl-10 md:pl-0 pt-4 sm:pt-0"
          id="market"
        >
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
