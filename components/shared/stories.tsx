import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function MarketStories() {
  return (
    <Card className="my-4 bg-secondary">
      <CardHeader>
        <CardTitle className="text-lg">Top Stories</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex-shrink-0 h-32 w-full relative overflow-hidden">
          <Image src="/img.png" alt="img" layout="fill" objectFit="cover" />
        </div>
        <p className="text-justify font-sans pt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
          officia accusantium, modi atque non quisquam numquam facere
          consectetur deserunt, ab dolorem fuga vel impedit enim eos. Sit eos
          amet tenetur.
        </p>
      </CardContent>
    </Card>
  );
}
