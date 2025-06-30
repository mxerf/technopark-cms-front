

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import Link from "next/link"

type HelpfulLinkCardProps = {
  title: string
  description?: string
  href: string
  icon: LucideIcon
  className?: string
}

export function HelpfulLinkCard({ title, description, href, icon: Icon, className }: HelpfulLinkCardProps) {
  return (
    <Link href={href} className={cn("block", className)}>
      <Card className="hover:bg-muted transition-colors">
        <CardHeader className="flex flex-row items-center gap-3 pb-2">
          <Icon className="h-5 w-5 text-muted-foreground" />
          <CardTitle className="text-sm">{title}</CardTitle>
        </CardHeader>
        {description && (
          <CardContent className="text-xs text-muted-foreground pt-0">
            {description}
          </CardContent>
        )}
      </Card>
    </Link>
  )
}