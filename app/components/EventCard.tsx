import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Event } from "@/lib/api/events";
import { formatNewsDate } from "@/lib/utils/format-date.util";
import { cn } from "@/lib/utils/utils";
import Image from "next/image";

type EventCardProps = {
  event: Event;
  className?: string;
};

const typeMap = {
  event: "Событие",
  presentation: "Презентация",
  ceremony: "Церемония",
  theatre: "Театр",
  hackathon: "Хакатон",
  "open-day": "Открытый день",
  meeting: "Собрание",
  milestone: "Этап",
};

export function EventCard({
  event: { title, date, description, img, type },
  className,
}: EventCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all pt-0 flex flex-col justify-between h-full",
        className
      )}
    >
      {img && (
        <AspectRatio ratio={16 / 9}>
          <Image src={img} alt={title} fill className="object-cover" />
        </AspectRatio>
      )}

      <div className="flex flex-col flex-grow justify-between">
        <CardHeader className="space-y-1 mb-2">
          {type && (
            <span className="text-sm text-muted-foreground uppercase tracking-wide">
              {typeMap[type as keyof typeof typeMap]}
            </span>
          )}

          <CardTitle className="text-lg leading-snug min-h-[2.5rem] whitespace-pre-wrap">
            {title}
          </CardTitle>

          <span className="text-xs text-muted-foreground">
            {formatNewsDate(date)}
          </span>
        </CardHeader>

        <CardContent className="min-h-[4.5rem]">
          {description ? (
            <p className="text-sm text-muted-foreground line-clamp-3 whitespace-pre-wrap">
              {description}
            </p>
          ) : (
            <div />
          )}
        </CardContent>
      </div>
    </Card>
  );
}
