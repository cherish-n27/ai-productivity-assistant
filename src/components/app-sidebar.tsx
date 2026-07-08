import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Mail,
  FileText,
  ListChecks,
  Search,
  MessageSquare,
  Anchor,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

const overview = [{ title: "Dashboard", url: "/", icon: LayoutDashboard }] as const;

const assistant = [
  { title: "Email generator", url: "/email", icon: Mail },
  { title: "Notes summarizer", url: "/meeting", icon: FileText },
  { title: "Task planner", url: "/tasks", icon: ListChecks },
  { title: "Research assistant", url: "/research", icon: Search },
  { title: "Triage chatbot", url: "/chatbot", icon: MessageSquare },
] as const;

export function AppSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (url: string) => (url === "/" ? pathname === "/" : pathname.startsWith(url));

  const renderGroup = (label: string, items: readonly { title: string; url: string; icon: React.ComponentType<{ className?: string }> }[]) => (
    <SidebarGroup>
      <SidebarGroupLabel className="px-3 text-[11px] font-medium uppercase tracking-wider text-muted-foreground/80">
        {label}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const active = isActive(item.url);
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={active}
                  tooltip={item.title}
                  className={`h-9 rounded-lg px-3 text-sm font-medium transition-colors ${
                    active
                      ? "bg-indigo-fill text-primary hover:bg-indigo-fill hover:text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Link to={item.url}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border bg-sidebar">
      <SidebarHeader>
        <div className="flex items-center gap-2.5 px-2 py-3">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm">
            <Anchor className="h-4 w-4" />
          </div>
          <div className="flex min-w-0 flex-col group-data-[collapsible=icon]:hidden">
            <span className="truncate font-display text-base font-semibold tracking-tight text-foreground">
              Ballast IT
            </span>
            <span className="truncate text-[11px] text-muted-foreground">
              Help desk workspace
            </span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="gap-1">
        {renderGroup("Overview", overview)}
        {renderGroup("Assistant", assistant)}
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border">
        <div className="px-3 py-2.5 text-[11px] leading-snug text-muted-foreground group-data-[collapsible=icon]:hidden">
          <span className="font-medium text-foreground">v1.4</span> · Ballast keeps your queue
          steady. Review AI output before sending.
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}