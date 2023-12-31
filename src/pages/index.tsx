import Head from "next/head";

import { Box } from "@mui/material";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Content from "@/components/Content";
import Convert from "@/components/Convert";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box display="flex" flexDirection="column" height="100vh">
          <Navbar />
          <Content>
            <Hero />
            <Convert />
          </Content>
          <Footer />
        </Box>
      </main>
    </>
  );
}
