"use client";

import { Dialog, VisuallyHidden } from "radix-ui";
import { useRouter } from "next/navigation";
import styles from "./content.module.scss";
import { useCompendiumContext } from "./compendium-context";
import { CompendiumForms } from "@/lib/cms";
import CompendiumDialogContent from "./compendium-dialog-content";

interface CompendiumDialogProps {
  form: CompendiumForms;
}

export default function CompendiumDialog({ form }: CompendiumDialogProps) {
  const router = useRouter();
  const { dialogOpenedNaturally, setDialogOpenedNaturally } =
    useCompendiumContext();

  const goBack = () => {
    if (dialogOpenedNaturally) {
      router.back();
      setDialogOpenedNaturally(false);
    } else {
      router.replace("/compendium");
    }
  };

  return (
    <Dialog.Root
      open={!!form}
      onOpenChange={(open) => {
        if (!open) goBack();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className={styles.dialogOverlay}>
          <Dialog.Content className={styles.dialogContent}>
            {/* metadata */}
            <VisuallyHidden.Root>
              <Dialog.Title>{form?.name}</Dialog.Title>
              <Dialog.Description>{form?.subtitle}</Dialog.Description>
            </VisuallyHidden.Root>
            {form ? (
              <CompendiumDialogContent form={form} closeFn={goBack} />
            ) : null}
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
