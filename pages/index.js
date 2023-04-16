import { prefix } from "@/config/config";
import LeafletPortfolioMain from "@/src/components/units/main/main.container";
import Head from "next/head";

export default function LeafletPortfolio() {
  return (
    <>
      <Head>
        <title>Juyeon's Portfolio</title>
        <meta property="og:title" content="한주연 리플렛 포트폴리오" />
        <meta
          property="og:description"
          content="리액트로 만든 심플 인터렉티브 포트폴리오"
        />
        <meta
          property="og:image"
          content={`${prefix}/img/interactivePortfolio.png`}
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`${prefix}/img/favicon-juju.ico`} />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Shadows+Into+Light+Two&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <LeafletPortfolioMain />
    </>
  );
}
