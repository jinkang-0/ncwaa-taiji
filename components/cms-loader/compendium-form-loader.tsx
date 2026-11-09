import { getVideoId } from "@/lib/utils";
import ContentEmbed from "../compendium/content-embed";
import styles from "@/components/compendium/content.module.scss";
import { Fragment } from "react";
import { CompendiumForms } from "@/lib/cms";
import MarkdownParser from "../ui/markdown";

export default async function CompendiumFormLoader({
  form,
}: {
  form: CompendiumForms;
}) {
  if (!form) return "";

  return (
    <div className={styles.content}>
      <article>
        <section>
          <MarkdownParser>{form.description}</MarkdownParser>
        </section>
        {form.videos && form.videos.length > 0 && (
          <section>
            <h4>Videos</h4>
            {form.videos.map((video) => (
              <Fragment key={video.url}>
                <ContentEmbed id={getVideoId(video.url)} title={video.title} />
              </Fragment>
            ))}
          </section>
        )}
        {form.resources && form.resources.length > 0 && (
          <section>
            <h4>Resources</h4>
            <ul>
              {form.resources.map((resource) => (
                <li key={resource.url}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {resource.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </div>
  );
}
