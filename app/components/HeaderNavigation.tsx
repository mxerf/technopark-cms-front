"use client";

import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Лиса",
    href: "",
    description: "Ссылка на внешний сервис - Лиса",
  },
  {
    title: "Календарь",
    href: "",
    description: "Ссылка на внешний сервис - Календарь",
  },
  {
    title: "Бухгалтерия",
    href: "",
    description: "Ссылка на внешний сервис - Бухгалтерия",
  },
  {
    title: "Сайт",
    href: "",
    description: "Ссылка на внешний сервис - Сайт",
  },
  {
    title: "Телефония",
    href: "",
    description: "Ссылка на внешний сервис - Телефония",
  },
  {
    title: "1С:Лицей",
    href: "",
    description: "Ссылка на внешний сервис - 1С:Лицей",
  },
];

export function HeaderNavigationMenu() {
  return (
    <NavigationMenu className="z-10" viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Главная</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">Новости</div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Блок актуальных новостей о лицее
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Сотрудники">
                Сервисы, предоставляющие актуальную информацию о сотрудниках
              </ListItem>
              <ListItem href="/docs/installation" title="Обучение">
                Сервисы для студентов и их родителей
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Общественное">
                Общественные мероприятия, конкурсы и активности
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Расписание</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/docs" title="Расписание уроков" />
              <ListItem
                href="/docs/installation"
                title="Расписание мероприятий"
              />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Cервисы</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Социальные сети</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">ВКонтакте</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Одноклассники</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Телеграм</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Помощь</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleHelpIcon />
                    Часто задаваемые вопросы
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleIcon />
                    Обратная связь
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleCheckIcon />
                    Техподдержка
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          {children && (
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
