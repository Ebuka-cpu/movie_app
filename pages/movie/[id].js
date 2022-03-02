import Image from "next/image";
import Link from "next/link";
import Meta from "../../components/Meta";

const MovieId = ({ movie }) => {
  console.log(movie);
  return (
    <div className="container max-w-3xl mx-auto pt-20 ">
      <Meta title={movie.title}/>
      <div className="px-3">
        <Link href="/" passHref>
      <button className="bg-gray-700 hover:gray-500 text-white p-2 rounded mb-4  border-gray-500 ">Go back</button>
        </Link>
        <Image
          alt=""
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          width="1000"
          height="600"
          className="rounded-md"
        />
        <h1 className="font-bold text-2xl my-2">{movie.title}</h1>
        <p className="text-gray-600 text-sm mt-4">{movie.overview}</p>
        <p className="mt-5 text-gray-600 text-sm">
          Genries: {' '}
          <span className="font-bold">{movie.genres.map((genre) => genre.name).join(", ")}</span>
        </p>
        <p className="">
          Realease Date: <span>{movie.release_date}</span>
        </p>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  );
  const data = await response.json();
  return {
    props: {
      movie: data,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  );
  const data = await response.json();
  console.log(Array.isArray(data));
  const paths = data.results.map((movie) => {
    return {
      params: {
        id: `${movie.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export default MovieId;

//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
