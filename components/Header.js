import Image from "next/image";
import HeaderIcon from "./HeaderIcon";

import {
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
  SearchIcon,
} from "@heroicons/react/outline";

import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

import { signOut, useSession } from "next-auth/client";

function Header() {
  const [session] = useSession();
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* Header - Left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />

        <div className="hidden md:inline-flex flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="outline-none ml-2 items-center bg-transparent placeholder-gray-500 flex-shrink"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* Center */}

      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Right */}

      <div className="flex items-center sm:space-x-2 justify-end ">
        {/* Profile Picture */}
        <Image
          className="rounded-full cursor-pointer"
          onClick={signOut}
          src={session.user.image}
          height={40}
          width={40}
          layout="fixed"
        />

        <p className="hidden sm:inline-flex font-semibold pr-2 whitespace-nowrap">{session.user.name}</p>

        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;

