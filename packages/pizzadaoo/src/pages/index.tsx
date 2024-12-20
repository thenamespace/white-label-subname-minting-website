import Head from "next/head";
import { MintForm } from "@components/components/MintForm";


export default function Home() {
  return (
    <>
      <Head>
        <title>Louisiana State University</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Louisiana State University"
        />
        <meta property="og:title" content={`Louisiana State University`} />
        <meta
          property="og:description"
          content="Louisiana State University"
        />
        <meta name="twitter:card" />
        <meta name="twitter:title" content="Namespace" />
        <meta
          name="twitter:description"
          content="Louisiana State University"
        />
        <meta name="theme-color" content="#5C61FF" />
      </Head>
      <MintForm/>
    </>
  );
}