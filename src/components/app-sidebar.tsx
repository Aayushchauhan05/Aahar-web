"use client"

import * as React from "react";
import {
  IconDashboard,
  IconUsers,
  IconSettings,
  IconHelp,
  IconSearch,
  IconPizza,
  IconShoppingCart,
  IconReport,
  IconChefHat,
  IconShoppingBag
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

type UserRole = "user" | "admin" | "aahaarprenuer";

interface AppSidebarProps {
  role: UserRole;
  variant?: string;
}

const navItems: Record<UserRole, { title: string; url: string; icon: any }[]> = {
  user: [
    { title: "Dashboard", url: "#", icon: IconDashboard },
    { title: "Orders", url: "#", icon: IconShoppingCart },
    { title: "Settings", url: "#", icon: IconSettings },
  ],
  admin: [
    { title: "Dashboard", url: "/main/admin/dashboard", icon: IconDashboard },
    { title: "Users", url: "/main/admin/dashboard", icon: IconUsers },
    { title: "Marketplace", url: "/marketplace", icon: IconShoppingBag },
    { title: "Orders", url: "/main/admin/dashboard/orders", icon: IconShoppingCart },
    { title: "Reports", url: "#", icon: IconReport },
    { title: "Settings", url: "#", icon: IconSettings },
  ],
  aahaarprenuer: [
    { title: "Dashboard", url: "#", icon: IconDashboard },
    { title: "My Dishes", url: "#", icon: IconPizza },
    { title: "Orders", url: "#", icon: IconShoppingCart },
    { title: "Chef's Hub", url: "#", icon: IconChefHat },
  ],
};

const secondaryNav: { title: string; url: string; icon: any }[] = [
  { title: "Help", url: "#", icon: IconHelp },
  { title: "Search", url: "#", icon: IconSearch },
];

export function AppSidebar({ role, variant, ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <span className="text-base font-semibold">Foodie Hub</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems[role] || []} />
        <NavMain items={secondaryNav} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={{ name: "John Doe", email: "john@example.com", avatar: "/avatars/johndoe.jpg" }} />
      </SidebarFooter>
    </Sidebar>
  );
}