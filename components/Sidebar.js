import { useSession } from "next-auth/client";
import SidebarIcons from "./SidebarIcons";

import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";

function Sidebar() {
  const [session, loading] = useSession();
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarIcons src={session.user.image} title={session.user.name}/>
      <SidebarIcons Icon={UsersIcon} title="Friends" />
      <SidebarIcons Icon={UserGroupIcon} title="Groups" />
      <SidebarIcons Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarIcons Icon={DesktopComputerIcon} title="Watch" />
      <SidebarIcons Icon={CalendarIcon} title="Events" />
      <SidebarIcons Icon={ClockIcon} title="Memories" />
      <SidebarIcons Icon={ChevronDownIcon} title="See More" />
    </div>
  );
}

export default Sidebar;