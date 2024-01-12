import Head from "next/head";
import Button from "@ui/Button";

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta content="Generated by create next app" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main>
        <Button>text</Button>
      </main>
    </>
  );
};

export default Home;