import Footer from "@/components/ui/footer";
import styles from "./page.module.scss";
import { LinkButtonPrimary } from "@/components/ui/button";
import { ButtonSingleSecondary } from "@/components/ui/button-single";
import { getSession } from "@/actions/auth";
import { notFound } from "next/navigation";
import SessionRefresher from "@/components/auth/session-refresher";
import { revalidateContent } from "@/actions/actions";

export default async function RefreshPage() {
  const session = await getSession();
  if (!session.user) {
    return notFound();
  }

  return (
    <main className={styles.container}>
      <SessionRefresher user={session.user} />
      <article>
        <ButtonSingleSecondary onClick={revalidateContent}>
          Refresh content data
        </ButtonSingleSecondary>
        <LinkButtonPrimary href="/">Back to home</LinkButtonPrimary>
      </article>
      <Footer />
    </main>
  );
}
