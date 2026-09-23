import { Info } from "@/lib/cms";

export default function InstructorSectionPreview(
  data: Info["instructorsSection"],
) {
  return (
    <section className="padded">
      <h1 className="text-center">{data.title}</h1>
      {data.instructors.map((inst) => (
        <div key={inst.fullName} className="flex gap-2">
          <div>
            <img
              width={300}
              height={400}
              src={inst.portrait}
              alt="Instructor profile"
            />
          </div>
          <div>
            <p>
              <strong>{inst.fullName}</strong>
            </p>
            <span>{inst.role}</span>
            <p>{inst.biography}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
