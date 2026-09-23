import NotFound from "@/app/(root)/not-found";
import styles from "./content.module.scss";

export default async function CompendiumDialogContent({ id }: { id: string }) {
  const { default: CompendiumArticle } = await import(
    `@/content/compendium/${id}`
  ).catch(() => {
    return NotFound();
  });

  if (!CompendiumArticle) return "";

  return (
    <div className={styles.content}>
      <CompendiumArticle />
    </div>
  );
}
