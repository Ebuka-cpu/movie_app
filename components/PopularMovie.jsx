import { useState } from "react";
import MovieCard from "./MovieCard";

const PopularMovie = ({ movies }) => {
  const [query, setQuery] = useState("")
  console.log(query)
  return (
    <div className="bg-stone-700 container max-w-7xl mx-auto pb-10 px-10 text-center lg:text-left">
      <div className="flex-row items-center justify-between sm:flex-cols md:flex  lg:flex-row xl:flex">
        <h1 className="text-white text-2xl mt-10 mb-4  p-2 sm: mt-1">{"What's popular?"}</h1>
        <input type="text" placeholder="search..." className="mt-10 mb-2  py-2 px-4 text-xl sm: mt-1 focus:outline-none rounded" onChange={(e)=>setQuery(e.target.value)}  />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {movies.filter(movies=>movies.title.toLowerCase().includes(query)).map((movie) => {
          return <MovieCard movie={movie} key={movie.id} />;
        })}
      </div>

      {/* <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
      </div> */}
    </div>
  );
};

export default PopularMovie;
