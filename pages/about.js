import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout/layout.js";
import styles from "../styles/about.module.css";
import utilityStyle from "../styles/utility.module.css";
const AboutMe = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Sean's Bio</title>
        </Head>
        <main className={styles.container}>
          <section className={styles.section1}>
            <Image
              className={utilityStyle.borderCircle}
              src="/images/Zion-500px.jpg"
              width={500}
              height={460}
              quality={100}
              layout="responsive"
              loading="lazy"
        
              alt="Sean at Angel's Landing, Zion National Park"
            />
          </section>
          <section className={styles.section2}>
            <p>
              {" "}
              I am full-stack software engineer who exemplifies a can-do
              attitude and willingness to dive into the unknown. My unique
              experience as a biomechanical engineer enables me to approach
              every challenge with a passion and desire to solve technical
              problems that will improve the life we live today.{" "}
            </p>
          </section>
          <section className={styles.section3}>
            <p>
              {" "}
              Besides engineering, I am based out of Austin Texas, am an avid
              skier, love the outdoors, the local brews, and always have a
              craving for tacos.
            </p>
          </section>
        </main>
      </Layout>
    </>
  );
};
export default AboutMe;
