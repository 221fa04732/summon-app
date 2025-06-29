import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { SquareTerminal, Settings, Database } from "lucide-react";
import { ApiNav } from "@/components/api-nav";
import { McpNav } from "@/components/mcp-nav";
import { ExternalMcpNav } from "@/components/external-mcp-nav";
import { WorkspaceSelector } from "@/components/WorkspaceSelector";
import { Link, useLocation } from "@tanstack/react-router";
import FeedbackButton from "@/components/FeedbackButton";
import packageJson from "../../package.json";

export function AppSidebar() {
  const location = useLocation();

  return (
    <>
      <Sidebar className="top-[var(--header-height)] !h-[calc(100svh-var(--header-height))]">
        <SidebarHeader className="border-b">
          <SidebarMenu>
            <SidebarMenuItem>
              <WorkspaceSelector />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <ApiNav />
          <McpNav />
          <ExternalMcpNav />
          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link to="/playground">
                  <SidebarMenuButton
                    isActive={location.pathname === "/playground"}
                  >
                    <SquareTerminal className="h-4 w-4" /> Playground
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link to="/datasets">
                  <SidebarMenuButton
                    isActive={location.pathname === "/datasets"}
                  >
                    <Database className="h-4 w-4" /> Datasets
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <FeedbackButton className="w-full justify-start">
            Give Feedback
          </FeedbackButton>
          <Link to="/settings">
            <SidebarMenuButton
              size="lg"
              className="flex items-center justify-between"
              isActive={location.pathname === "/settings"}
            >
              <span className="flex items-center gap-2">
                <Settings className="h-4 w-4" /> Settings
              </span>
              <span className="text-muted-foreground font-mono text-xs">
                v{packageJson.version}
              </span>
            </SidebarMenuButton>
          </Link>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
