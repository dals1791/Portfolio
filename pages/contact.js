
import Head from 'next/head'
import Layout from "../components/layout/layout.js";
import ContactForm from '../components/contactForm/contactForm'
const Contact = () => {
  return (
    <Layout>
        <Head>
        <title>Contact Sean!</title>
      </Head>
      
      <ContactForm/>
    </Layout>
  );
};

export default Contact;
