"use client";

import Image from "next/image";
import { Dialog, VisuallyHidden } from "radix-ui";
import CancelIcon from "@/icons/cancel";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import styles from "./content.module.scss";
import { useCompendiumContext } from "./compendium-context";
import { CompendiumForms } from "@/lib/cms";

export default function CompendiumDialog({
  children,
  form,
}: {
  children?: React.ReactNode;
  form: CompendiumForms;
}) {
  const router = useRouter();
  const { dialogOpenedNaturally, setDialogOpenedNaturally } =
    useCompendiumContext();

  const tags = useMemo(
    () => (form ? [form.type, ...form.otherNames] : []),
    [form],
  );

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
              <div className={styles.dialogMain}>
                {/* close button */}
                <button
                  onClick={() => goBack()}
                  className={styles.dialogCloseButton}
                >
                  <CancelIcon />
                </button>
                {/* main content */}
                <main>
                  <header>
                    <Image
                      src={form.thumbnail}
                      alt={`${form.name} cover`}
                      width={800}
                      height={450}
                    />
                    <h3>{form.name}</h3>
                    {tags.length > 0 && (
                      <div className={styles.tags}>
                        {tags.map((tag) => (
                          <span key={tag} className={styles.tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className={styles.description}>{form.subtitle}</p>
                  </header>
                  {children}
                </main>
              </div>
            ) : null}
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
