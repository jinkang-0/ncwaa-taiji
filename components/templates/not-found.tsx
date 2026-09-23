import Image from "next/image";
import ImageConfusedCat from "@/assets/graphics/confused_cat.webp";
import { LinkButtonPrimary } from "@/components/ui/button";
import errorStyles from "@/app/(root)/error.module.scss";

export default function NotFoundTemplate() {
  return (
    <main className={errorStyles.container}>
      <article className={errorStyles.error}>
        <Image src={ImageConfusedCat} alt="Confused Cat" />
        <div>
          <h3>Error 404</h3>
          <p>Sorry, we couldn&apos;t find the page you were looking for.</p>
          <LinkButtonPrimary href="/">Back to Home</LinkButtonPrimary>
        </div>
      </article>
    </main>
  );
}
