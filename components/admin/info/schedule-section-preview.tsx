import { Info } from "@/lib/cms";

export default function ScheduleSectionPreview(data: Info["scheduleSection"]) {
  return (
    <section className="padded">
      <h1 className="text-center">{data.title}</h1>
      <p>{data.introText}</p>
      <table>
        <tr>
          <th>Day</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Location</th>
        </tr>
        {data.schedule.map((row) => (
          <tr key={row.day}>
            <td>{row.day}</td>
            <td>{row.startTime}</td>
            <td>{row.endTime}</td>
            <td>
              {row.location}
              {row.locationAlternative && ` (${row.locationAlternative})`}
            </td>
          </tr>
        ))}
      </table>
      {data.showSpecialAnnouncement && <p>{data.specialAnnouncement}</p>}
      <div className="flex gap-2">
        <a className=".button" href={data.registrationLink}>
          Register
        </a>
        <a className=".button" href={data.registrationLinkSecondary}>
          Register for online-only*
        </a>
      </div>
      <p>{data.subtext}</p>
    </section>
  );
}
