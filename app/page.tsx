import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOutIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { SidebarEvents } from "./components/EventsSection";
import { HeaderNavigationMenu } from "./components/HeaderNavigation";
import { NewsSection } from "./components/NewsSection";
import { SidebarHelpful } from "./components/SidebarHelpful";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="h-20 border-[0.5px] grid grid-cols-[1fr_auto_1fr] px-4">
        <div className="flex items-center">
          <Link href="/" className="font-semibold text-xl">
            Лицей.Онлайн
          </Link>
        </div>
        <HeaderNavigationMenu />
        <div className="text-right flex items-center justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="ml-2">
                <UserIcon className="h-4 w-4" />
                <span className="font-medium text-sm">
                  Владимир Владимирович
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Мои данные</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Профиль</DropdownMenuItem>
              <DropdownMenuItem>Баланс</DropdownMenuItem>
              <DropdownMenuItem variant="destructive">
                <LogOutIcon className="h-4 w-4" />
                Выйти
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="grow grid grid-cols-[18vw_64vw_18vw]">
        <aside className="border-[0.5px] overflow-y-scroll max-h-[calc(100vh-80px)]">
          <SidebarEvents />
        </aside>
        <section className="border-[0.5px] px-16 py-8 overflow-y-scroll max-h-[calc(100vh-80px)]">
          <h2 className="mb-8">Новости</h2>
          <NewsSection />
        </section>
        <aside className="border-[0.5px] overflow-y-scroll max-h-[calc(100vh-80px)]">
          <SidebarHelpful />
        </aside>
      </main>
      {/* <footer className="h-14 border-[0.5px]"></footer> */}
    </div>
  );
}
