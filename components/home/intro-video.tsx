import styles from "./intro-video.module.scss";

export default function IntroVideo() {
  return (
    <div className={styles.container}>
      <iframe
        className={styles.embed}
        width="1280"
        height="720"
        src="https://www.youtube.com/embed/gaTWVRzd_Ys?si=HBz8V4mgSKBUbPHs"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
