import Link from "next/link";
import Markdown, { type Components } from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import styles from "./markdown.module.scss";
import clsx from "clsx";

function isExternalHref(href: string) {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

const components: Components = {
  a: ({ href, children }) => {
    if (!href) return <>{children}</>;

    if (isExternalHref(href)) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }

    return <Link href={href}>{children}</Link>;
  },
};

export default function MarkdownParser({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <div className={clsx(styles.markdown, className)}>
      <Markdown remarkPlugins={[remarkGfm, remarkBreaks]} components={components}>
        {children}
      </Markdown>
    </div>
  );
}
