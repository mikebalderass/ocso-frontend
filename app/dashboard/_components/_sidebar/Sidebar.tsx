"use client";

import * as React from "react";
import { StoreIcon, TruckIcon, UserIcon, WheatIcon } from "lucide-react";

import { NavUser } from "./NavUser";
import NavItems from "./NavItems";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";

const data = {
  menu: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: StoreIcon,
    },
    {
      name: "Providers",
      url: "/dashboard/providers",
      icon: TruckIcon,
    },
    {
      name: "Products",
      url: "/dashboard/products",
      icon: WheatIcon,
    },
    {
      name: "Managers",
      url: "/dashboard/managers",
      icon: UserIcon,
    },
  ],
};

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex px-6 pt-4">
        <Image src="/Oxxo_Logo.svg" alt="Logo de Ocso" width={150} height={0} />
      </SidebarHeader>
      <SidebarContent>
        <NavItems items={data.menu} />
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  );
}
