import { ButtonGoogleSignIn } from "@/components/auth/button-google";
import styles from "./login.module.scss";
import Footer from "@/components/ui/footer";
import { getSession } from "@/actions/auth";
import { redirect } from "next/navigation";

export default async function AdminLoginPage() {
  const session = await getSession();
  const hasSession = session.success;

  if (hasSession) {
    redirect("/");
  }

  return (
    <main className={styles.container}>
      <article>
        <h4>Admin Login</h4>
        <ButtonGoogleSignIn />
      </article>
      <Footer />
    </main>
  );
}
