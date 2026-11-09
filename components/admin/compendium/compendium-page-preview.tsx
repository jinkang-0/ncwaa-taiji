import CompendiumShelf, {
  CompendiumShelfPlaceholder,
} from "@/components/compendium/compendium-shelf";
import { useFormsContext } from "@/components/compendium/forms-context";
import { Compendium } from "@/lib/cms";
import CompendiumPagePreviewWrapper from "./compendium-page-wrapper";

export default function CompendiumPagePreview({ collections }: Compendium) {
  const { forms, isLoading } = useFormsContext();

  return (
    <CompendiumPagePreviewWrapper>
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
    </CompendiumPagePreviewWrapper>
  );
}
