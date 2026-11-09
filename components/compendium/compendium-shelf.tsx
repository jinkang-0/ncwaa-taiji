import { CompendiumItem } from "@/lib/types";
import CompendiumCarousel from "./carousel";
import styles from "@/app/(root)/(main)/(tabbed)/compendium/page.module.scss";
import catalogStyles from "@/components/compendium/catalog.module.scss";
import CompendiumCatalog from "./catalog";
import clsx from "clsx";

interface CompendiumShelfProps {
  type: "Featured" | "Default";
  items: CompendiumItem[];
  title: string;
}

type ShelfProps = Omit<CompendiumShelfProps, "type">;

function FeaturedShelf({ items, title }: ShelfProps) {
  return (
    <>
      <h3>{title}</h3>
      <CompendiumCarousel items={items} />
    </>
  );
}

function StandardShelf({ items, title }: ShelfProps) {
  return (
    <div className={styles.catalog}>
      <h3>{title}</h3>
      <CompendiumCatalog items={items} />
    </div>
  );
}

export function CompendiumShelfPlaceholder() {
  return (
    <div className={styles.catalog}>
      <div className={clsx(styles.container, catalogStyles.placeholder)}></div>
    </div>
  );
}

export default function CompendiumShelf({
  type,
  ...props
}: CompendiumShelfProps) {
  if (type === "Featured") return <FeaturedShelf {...props} />;
  return <StandardShelf {...props} />;
}
