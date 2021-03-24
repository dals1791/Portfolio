import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../components/layout";

const AboutMe = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Sean's Bio</title>
        </Head>
        <h1>This is About Me</h1>
      </Layout>
    </>
  );
};
export default AboutMe;
