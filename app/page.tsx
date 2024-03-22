import DiscussionForum from "@/components/shared/discussion";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen p-10 md:p-20 md:max-w-screen-2xl md:mx-auto overflow-x-auto">
      <div className="grid grid-cols-1 sm:grid-cols-7 gap-3 justify-between h-full w-full">
      <div className="w-full col-span-5 pt-10 sm:pt-0">
        <p className="text-4xl text-bold text-primary/60 font-serif">DISCUSSION FORUM</p>
        <DiscussionForum />
        <DiscussionForum />
        <DiscussionForum />
        <DiscussionForum />
      </div>
      <div className="w-full col-span-4 lg:col-span-2 hidden sm:block">
       Market Stories
      </div> 

      </div>
    </main>
  );
}
