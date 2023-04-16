import LeafletPortfolioMain from "@/src/components/units/main/main.container";
import Head from "next/head";

export default function LeafletPortfolio() {
  return (
    <>
      <Head>
        <title>Juyeon's Portfolio</title>
        <meta
          name="description"
          content="리액트로 만든 심플 인터렉티브 포트폴리오"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-juju.ico" />
      </Head>
      <LeafletPortfolioMain />
    </>
  );
}
