import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

type HelpfulLinkCardProps = {
  title: string;
  description?: string;
  href: string;
  icon: LucideIcon;
  className?: string;
};

export function HelpfulLinkCard({
  title,
  href,
  icon: Icon,
  className,
}: HelpfulLinkCardProps) {
  return (
    <Link href={href} className={cn("block", className)}>
      <Card className="hover:bg-accent hover:text-accent-foreground transition-colors">
        <CardContent className="flex flex-row items-center gap-3">
          <Icon className="h-5 w-5 text-muted-foreground" />
          <CardTitle className="text-sm">{title}</CardTitle>
        </CardContent>
      </Card>
    </Link>
  );
}
