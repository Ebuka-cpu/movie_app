import Image from "next/image"
import Link from "next/link"
import Meta from "./Meta"


const MovieCard = ({movie}) => {
  return (
    
    <Link href={`/movie/${movie.id}`} passHref>
        <div className="bg-white shadow-sm rounded-md cursor-pointer mb-10 mt-4">
        <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" width={700} height={800} className="rounded-t-md " />
        <div className="px-6 py-2 text-left"> 
            <div className="font-bold text-xl mb-1" >{movie.title}</div>
            <p className="text-gray-700 text-base mb-1">{movie.release_date}</p>
        </div>
    </div>    
    </Link>
  )
}

export default MovieCard