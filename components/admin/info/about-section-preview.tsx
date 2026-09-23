import { Info } from "@/lib/cms";
import { getYTEmbed } from "@/lib/utils";

export default function AboutSectionPreview(data: Info["aboutSection"]) {
  return (
    <section className="padded">
      <h1 className="text-center">{data.title}</h1>
      {data.showIntroVideo && (
        <iframe
          width="560"
          height="315"
          src={getYTEmbed(data.introVideo)}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
      <p dangerouslySetInnerHTML={{ __html: data.section1Text }} />
      <hr />
      <p
        className="text-gray"
        dangerouslySetInnerHTML={{ __html: data.section2Text }}
      />
    </section>
  );
}
