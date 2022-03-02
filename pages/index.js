import Head from "next/head";
import Intro from "../components/Intro";
import PopularMovie from "../components/PopularMovie";



export default function Home({movies}) {
  console.log(movies)
  return (
    <div className="bg-stone-700 scrollbar-hide">
      <Head>
        <title>Ebue movie app</title>
        <meta name="description" content="browse through the most up to date movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div>
          <Intro/>
          <PopularMovie movies={movies.results}/>
        </div>
      </div>
  )
}

export const getStaticProps = async ()=>{
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`)
  const data = await response.json()

  return {
    props:{
      movies: data
    }
  }
}

//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1