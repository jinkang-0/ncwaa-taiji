"use client";

import Image from "next/image";
import ImageSorryCat from "@/assets/graphics/sorry_cat.webp";
import styles from "./error.module.scss";
import Footer from "@/components/ui/footer";

export default function ErrorPage() {
  return (
    <main className={styles.container}>
      <article className={styles.error}>
        <Image src={ImageSorryCat} alt="Sorry Cat" />
        <div>
          <h3>Error 500</h3>
          <p>
            Whoops, something went wrong on our end. Please try again later or
            contact us if the error persists.
          </p>
        </div>
      </article>
      <Footer />
    </main>
  );
}
