import Head from "next/head";

import Header from "../components/Header";
import MovieList from "../components/MovieList";
import Nav from "../components/Nav";
import request from "../utils/request";

export default function Home({ movie }) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/**Header */}
      <Header />
      <Nav />
      <MovieList movie={movie} />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { genre } = ctx.query;
  const res = await fetch(
    `https://api.themoviedb.org/3${request[genre]?.url || request.tending.url}`
  );
  const movie = await res.json()

  return {
    props: {
      movie,
    },
  };
}
