import styles from "./page.module.scss";
import CompendiumDialog from "@/components/compendium/compendium-dialog";
import { GenerateMetadataProps } from "@/lib/types";
import CompendiumFormLoader from "@/components/cms-loader/compendium-form-loader";
import CompendiumPageLoader from "@/components/cms-loader/compendium-loader";
import { getForm } from "@/components/cms-loader/form-loader";

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
  const selectedForm = await getForm(id);

  return (
    <div className={styles.container}>
      <CompendiumDialog form={selectedForm}>
        {selectedForm && <CompendiumFormLoader form={selectedForm} />}
      </CompendiumDialog>

      <CompendiumPageLoader />
    </div>
  );
}
