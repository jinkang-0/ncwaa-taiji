import Image from "next/image";
import SifuFong from "@/assets/instructors/sifu_fong.webp";
import Mason from "@/assets/instructors/mason.webp";
import styles from "./instructors-section.module.scss";
import InstructorDescription from "./instructor-desc";

export default function InstructorsSection() {
  return (
    <section className={styles.section}>
      <h3>Instructors</h3>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.portrait}>
            <Image src={SifuFong} alt="Sifu Fong" />
            <Image className={styles.ambiance} src={SifuFong} alt="ambiance" />
          </div>
          <div className={styles.content}>
            <h5>Bryant Fong</h5>
            <h6>Head Instructor</h6>
            <InstructorDescription>
              Sifu Bryant Fong is a 2nd generation Chen Hunyuan Taijiquan master
              and a 5th generation Bagua master. Sifu Fong has competed
              nationally and internationally, and served as the coach for the US
              Wushu Team at the 1st World Wushu Championships. Currently, he is
              the coach for the San Francisco Wushu Team and head instructor of
              both CalTaiji and CalWushu at UC Berkeley.
              <br /> <br />
              Sifu Fong is proficient in both traditional as well as modern
              Wushu. He is a graduate of the San Francisco Jing-Wu Academy,
              under the instruction of the famous Grandmaster Jackman Wong, a
              master of Taijiquan, Xingyiquan, and Northern Shaolin, well known
              for his fight with the legendary Bruce Lee. Sifu Fong also studied
              with his uncle, Master Quentin Fong, whose specialty is the
              Tibetan White Crane System.
              <br /> <br />
              Sifu Fong was one of the few Americans to perform with
              China&apos;s top Wushu Team, the Beijing Wushu Team, under the
              direction of Jet Li&apos;s coach, Wu Bin. Sifu Fong has also
              authored many articles for Inside Kung-fu, Tai Chi Journal, Tai
              Chi Kung-fu Magazine, and Reader&apos;s Digest. He is a recognized
              authority on the history, culture, and techniques of Wushu, both
              modern and traditional.
            </InstructorDescription>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.portrait}>
            <Image src={Mason} alt="Mason Tong" />
            <Image className={styles.ambiance} src={Mason} alt="ambiance" />
          </div>
          <div className={styles.content}>
            <h5>Mason Tong</h5>
            <h6>Assistant Instructor</h6>
            <InstructorDescription>
              In 2010, Mason began formal instruction with Sifu William Dere at
              UC Berkeley in taijiquan (taiji/tai chi) and is currently on staff
              as an instructor for the UC Martial Arts Program. Mason developed
              under his Neigong coach, Frank Lum, deepening his understanding of
              soft energy work. In April 2019, Mason Tong was accepted as a
              disciple of Sifu Bryant Fong, becoming a 6th generation legacy
              holder of Li Ziming Baguazhang.
              <br /> <br />
              In 2019, Mason was invited to train in Beijing at the Baguazhang
              Wushu Culture Museum, Renmin University of China, and the Capital
              University of Physical Education and Sports Medicine, meeting his
              teacher&apos;s Baguazhang master, Zhao Dayuan, the 4th generation
              grandmaster of Liang style Baguazhang.
              <br /> <br />
              Mason became a Certified Trainer of Medical Taiji under the US
              Collegiate Taiji Federation (USCTF) in 2022 and has since served
              as a teacher for the USCTF at the behest of Dr. Daniel Chi-Hsing
              Weng, in their ongoing training courses for therapists and
              instructors.
              <br /> <br />
              Today, Mason pursues Taiji, Bagua, and Xingyi with a keen interest
              in health, wellness, and tradition. He has found a focus in
              sharing these treasures with the larger community through the UC
              Berkeley Martial Arts Program.
            </InstructorDescription>
          </div>
        </div>
      </div>
    </section>
  );
}
