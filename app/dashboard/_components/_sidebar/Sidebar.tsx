import { LuStore, LuTruck, LuUser, LuUsers, LuWheat } from "react-icons/lu";
import NavItem from "./NavItem";
import Image from "next/image";

const menuItems = [
  {
    icon: LuStore,
    path: "/dashboard",
    name: "Dashboard",
  },
  {
    icon: LuTruck,
    path: "/dashboard/providers",
    name: "Providers",
  },
  {
    icon: LuWheat,
    path: "/dashboard/products",
    name: "Products",
  },
  {
    icon: LuUser,
    path: "/dashboard/managers",
    name: "Managers",
  },
];

export default function Sidebar() {
  return (
    <div className="bg-primary h-screen px-5">
      <div className="flex items-center py-5">
        <Image
          src="/Oxxo_Logo.svg"
          width={190}
          height={50}
          alt="Ocso Logo"
          draggable={false}
        />
      </div>
      <nav className="flex flex-col pt-5 justify-center gap-3">
        {menuItems.map((item) => (
          <NavItem
            key={item.name}
            icon={<item.icon className="text-2xl text-background" />}
            path={item.path}
            name={item.name}
          />
        ))}
      </nav>
    </div>
  );
}
