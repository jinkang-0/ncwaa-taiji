import rawCompendiumContent from "@/content/page/compendium.yml";
import { Compendium } from "@/lib/cms";
import CompendiumShelf from "../compendium/compendium-shelf";
import { getForm } from "./form-loader";

const compendiumContent = rawCompendiumContent as unknown as Compendium;

export default async function CompendiumPageLoader() {
  const collections = compendiumContent.collections;

  return collections.map(async (collection) => {
    const items = await Promise.all(
      collection.forms.map((form) => getForm(form)),
    );
    return (
      <CompendiumShelf
        key={collection.title}
        title={collection.title}
        items={items}
        type={collection.type}
      />
    );
  });
}
