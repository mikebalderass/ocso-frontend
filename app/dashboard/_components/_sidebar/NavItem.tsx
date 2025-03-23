"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavItemProps {
  icon: ReactNode;
  path: string;
  name: string;
}

const NavItem = ({ icon, path, name }: NavItemProps) => {
  const pathName = usePathname();

  return (
    <Link
      href={path}
      className={`w-full flex items-center gap-2 py-2 pl-2 pr-14 rounded-lg hover:bg-primary-accent ${pathName === path ? "bg-primary-accent" : ""}`}
    >
      {icon}
      <p className="text-lg text-background">{name}</p>
    </Link>
  );
};

export default NavItem;
