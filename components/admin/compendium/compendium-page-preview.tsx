import styles from "@/app/(root)/(main)/(tabbed)/compendium/page.module.scss";
import CompendiumShelf, {
  CompendiumShelfPlaceholder,
} from "@/components/compendium/compendium-shelf";
import { useFormsContext } from "@/components/compendium/forms-context";
import { Compendium } from "@/lib/cms";

export default function CompendiumPagePreview({ collections }: Compendium) {
  const { forms, isLoading } = useFormsContext();

  return (
    <div className={styles.container}>
      {collections.map((col) => {
        if (isLoading) return <CompendiumShelfPlaceholder key={col.title} />;
        const items = col.forms.map((form) => forms[form]);
        return (
          <CompendiumShelf
            key={col.title}
            title={col.title}
            type={col.type}
            items={items}
          />
        );
      })}
    </div>
  );
}
