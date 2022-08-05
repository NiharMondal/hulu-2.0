import { HeaderItem } from "./HeaderItem";
import {
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
  BadgeCheckIcon,
  CollectionIcon,
} from "@heroicons/react/outline";

export default function Header() {
  return (
    <header className="m-4 flex flex-col sm:flex-row justify-between items-center h-auto">
      <div className="flex justify-evenly flex-grow max-w-2xl">
        <HeaderItem Icon={HomeIcon} text="Home" />
        <HeaderItem Icon={LightningBoltIcon} text="Trending" />
        <HeaderItem Icon={BadgeCheckIcon} text="Verified" />
        <HeaderItem Icon={CollectionIcon} text="Collection" />
        <HeaderItem Icon={SearchIcon} text="Search" />
        <HeaderItem Icon={UserIcon} text="Account" />
      </div>
      <p className="text-4xl font-mono mr-4 tracking-widest font-bolder">
        hulu
      </p>
    </header>
  );
}
