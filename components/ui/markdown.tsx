import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

export default function MarkdownParser({ children }: { children: string }) {
  return (
    <Markdown remarkPlugins={[remarkGfm, remarkBreaks]}>{children}</Markdown>
  );
}
