import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"

type NewsCardProps = {
  title: string
  date: string
  excerpt: string
  imageUrl?: string
  category?: string
  className?: string
}

export function NewsCard({
  title,
  date,
  excerpt,
  imageUrl,
  category,
  className
}: NewsCardProps) {
  return (
    <Card className={cn("overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all pt-0", className)}>
      {imageUrl && (
        <AspectRatio ratio={16 / 9}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </AspectRatio>
      )}
      <CardHeader className="space-y-1">
        {category && (
          <span className="text-sm text-muted-foreground uppercase tracking-wide">{category}</span>
        )}
        <CardTitle className="text-lg leading-snug">{title}</CardTitle>
        <span className="text-xs text-muted-foreground">{date}</span>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">{excerpt}</p>
      </CardContent>
    </Card>
  )
}