import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChatBubbleIcon,
  EyeOpenIcon,
  HeartIcon,
  Share1Icon,
} from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export default function DiscussionForum() {
  return (
    <Card className="my-4">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="flex flex-row gap-x-2 sm:gap-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-xl text-bold">Zadddyy</span>
          <Button className="bg-blue-400 rounded-2xl">Sector 2</Button>
        </CardTitle>
        <span className="text-blue-500">2 min ago</span>
      </CardHeader>
      <CardContent>
        <p className="text-justify font-sans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
          officia accusantium, modi atque non quisquam numquam facere
          consectetur deserunt, ab dolorem fuga vel impedit enim eos. Sit eos
          amet tenetur.
        </p>
      </CardContent>
      <CardFooter>
        <span className="grid grid-cols-4 gap-x-6">
          <p className="flex gap-x-3">
            <HeartIcon className="h-6 w-6" /> 2k{" "}
          </p>
          <p className="flex gap-x-3">
            <EyeOpenIcon className="h-6 w-6" /> 2k{" "}
          </p>
          <p className="flex gap-x-3">
            <ChatBubbleIcon className="h-6 w-6" /> 2k Comments
          </p>
          <p className="flex gap-x-3">
            <Share1Icon className="h-6 w-6" /> share{" "}
          </p>
        </span>
      </CardFooter>
    </Card>
  );
}
