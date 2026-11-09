import { getVideoId } from "@/lib/utils";
import ContentEmbed from "../compendium/content-embed";
import styles from "@/components/compendium/content.module.scss";
import { Fragment } from "react";
import { CompendiumForms } from "@/lib/cms";
import MarkdownParser from "../ui/markdown";
import Image from "next/image";
import CancelIcon from "@/icons/cancel";

export default function CompendiumDialogContent({
  form,
  closeFn,
}: {
  form: CompendiumForms;
  closeFn?: () => void;
}) {
  if (!form) return null;

  const tags = [form.type, ...form.otherNames];

  return (
    <div className={styles.dialogMain}>
      {/* close button */}
      <button onClick={() => closeFn?.()} className={styles.dialogCloseButton}>
        <CancelIcon />
      </button>
      {/* main content */}
      <main>
        <header>
          <Image
            src={form.thumbnail}
            alt={`${form.name} cover`}
            width={800}
            height={450}
          />
          <h3>{form.name}</h3>
          {tags.length > 0 && (
            <div className={styles.tags}>
              {tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
          <p className={styles.description}>{form.subtitle}</p>
        </header>
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
                    <ContentEmbed
                      id={getVideoId(video.url)}
                      title={video.title}
                    />
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
      </main>
    </div>
  );
}
