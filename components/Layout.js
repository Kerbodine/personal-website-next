import Head from "next/head";

export default function Wrapper({ children }) {
  return (
    <>
      <Head>
        <title>Michael Tong</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Welcome to my island on the web 🏝️" />
      </Head>
      <div className="mx-auto max-w-screen-lg px-6 md:px-12 pt-12 md:pt-20 pb-16">
        <main>{children}</main>
      </div>
    </>
  );
}
