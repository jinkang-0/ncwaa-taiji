import CompendiumCarousel from "@/components/compendium/carousel";
import styles from "./page.module.scss";
import {
  coreExercises,
  exercises,
  featuredCompendiumItems,
  competitionTrack,
  qigong,
  projectForms,
} from "@/data/compendium";
import CompendiumCatalog from "@/components/compendium/catalog";
import CompendiumDialog from "@/components/compendium/compendium-dialog";
import CompendiumDialogContent from "@/components/compendium/compendium-dialog-content";
import { GenerateMetadataProps } from "@/lib/types";

export async function generateMetadata({
  searchParams,
}: GenerateMetadataProps) {
  const { id } = await searchParams;

  return {
    title: "Compendium",
    description:
      "Explore what we practice at NCWAA Taiji, including exercises, qigong, and compulsory forms.",
    alternates: {
      canonical: id ? `/compendium?id=${id}` : "/compendium",
    },
  };
}

export default async function CompendiumPage({
  searchParams,
}: {
  searchParams: Promise<{ id: string }>;
}) {
  const { id } = await searchParams;

  return (
    <div className={styles.container}>
      <CompendiumDialog>
        {id && <CompendiumDialogContent id={id} />}
      </CompendiumDialog>

      <h3>Currently Practiced</h3>
      <CompendiumCarousel items={featuredCompendiumItems} />

      <div className={styles.catalog}>
        <h3>Exercises</h3>
        <CompendiumCatalog items={exercises} />
      </div>

      <div className={styles.catalog}>
        <h3>Qigong</h3>
        <CompendiumCatalog items={qigong} />
      </div>

      <div className={styles.catalog}>
        <h3>Core</h3>
        <CompendiumCatalog items={coreExercises} />
      </div>

      <div className={styles.catalog}>
        <h3>Competition</h3>
        <CompendiumCatalog items={competitionTrack} />
      </div>

      <div className={styles.catalog}>
        <h3>Projects</h3>
        <CompendiumCatalog items={projectForms} />
      </div>
    </div>
  );
}
