"use client";

import { Info } from "@/lib/cms";
import { useMemo, useState } from "react";

export default function EventsSectionPreview(data: Info["eventsSection"]) {
  const [expanded, setExpanded] = useState(false);
  const topThreeEvents = useMemo(() => data.events.slice(0, 3), [data]);
  const otherEvents = useMemo(() => data.events.slice(3), [data]);

  return (
    <section className="padded">
      <h1 className="text-center">{data.title}</h1>
      {topThreeEvents.map((e) => (
        <EventCard key={`${e.name}${e.date}`} {...e} />
      ))}
      {expanded &&
        otherEvents.map((e) => <EventCard key={`${e.name}${e.date}`} {...e} />)}
      <button onClick={() => setExpanded((e) => !e)} className="mt-2">
        {expanded ? "show less" : "show more"}
      </button>
    </section>
  );
}

function EventCard(data: Info["eventsSection"]["events"][number]) {
  return (
    <div>
      <h3>{data.name}</h3>
      <div className="flex justify-between">
        <span>
          {data.date}
          {data.endDate && ` - ${data.endDate}`}
        </span>
        <span>
          {data.startTime} - {data.endTime}
        </span>
      </div>
      {data.locationUrl ? (
        <a href={data.locationUrl}>{data.location}</a>
      ) : (
        <p>{data.location}</p>
      )}
      {data.attachments?.length > 0 && <b>Attachments: </b>}
      <div className="flex gap-2">
        {data.attachments?.map((a) => (
          <a href={a.url} key={a.url}>
            [{a.type}] {a.name}
          </a>
        ))}
      </div>
    </div>
  );
}
