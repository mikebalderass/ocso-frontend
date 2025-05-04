"use client";

import { ChevronsUpDown } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function NavUser({
  user,
}: {
  user: {
    email: string;
    roles: string;
  };
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex p-2 gap-2">
        <Avatar className="h-8 w-8 rounded-lg">
          <AvatarImage src={undefined} alt={user.email} />
          <AvatarFallback className="rounded-lg">
            {user.email.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">{user.email}</span>
          <span className="truncate text-xs">{user.roles}</span>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
