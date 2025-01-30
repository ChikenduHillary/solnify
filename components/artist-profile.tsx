import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Globe,
  Twitter,
  Instagram,
  DiscIcon as Discord,
  Copy,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProfileStats {
  volume: string;
  nftsSold: string;
  followers: string;
}

interface ArtistProfileProps {
  name: string;
  avatar: string;
  stats: ProfileStats;
  bio: string;
}

export function ArtistProfile({
  name,
  avatar,
  stats,
  bio,
}: ArtistProfileProps) {
  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="h-[300px] relative">
        <Image
          src={avatar}
          width={2000}
          height={2000}
          quality={1}
          alt="cover photo"
          className="w-[100vw] h-full object-cover"
        />
        <div className="absolute -bottom-16 left-4 md:left-8">
          <Avatar className="h-32 rounded-3xl w-32 border-4 border-[#1F1D2B]">
            <AvatarImage src={"/images/dog.svg"} />
          </Avatar>
        </div>
      </div>

      {/* Profile Info */}
      <div className="pt-20 px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-4">{name}</h1>
            <div className="flex gap-8 mb-6">
              <div>
                <p className="text-3xl font-bold">{stats.volume}+</p>
                <p className="text-gray-400">Volume</p>
              </div>
              <div>
                <p className="text-3xl font-bold">{stats.nftsSold}+</p>
                <p className="text-gray-400">NFTs Sold</p>
              </div>
              <div>
                <p className="text-3xl font-bold">{stats.followers}+</p>
                <p className="text-gray-400">Followers</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="bg-backgroundSecondary border-gray-700"
            >
              <Copy className="w-4 h-4 mr-2" />
              0xc0E3...B79C
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Follow
            </Button>
          </div>
        </div>

        <div className="flex gap-4 my-8">
          <Link href="#" className="text-gray-400 hover:text-white">
            <Globe className="w-6 h-6" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <Discord className="w-6 h-6" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <Twitter className="w-6 h-6" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <Instagram className="w-6 h-6" />
          </Link>
        </div>

        <p className="text-gray-400 max-w-2xl">{bio}</p>
      </div>
    </div>
  );
}
