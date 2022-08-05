import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

const Thambnail = ({ movie }) => {
  const BASE_URL = "https://www.themoviedb.org/t/p/original";
  return (
    <div className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        src={
          `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
          `${BASE_URL}${movie.poster_path}`
        }
        height="1080"
        width="1920"
        alt="poster"
        layout="responsive"
      />
      <div className="p-2">
        <p className="truncate max-w-md">{movie.overview}</p>
        <h3 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {movie.title || movie.original_name}
        </h3>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          Relese Date: {movie.release_date || movie.first_air_date}
          <ThumbUpIcon className="h-5 mx-2" /> {movie.vote_count}
        </p>
      </div>
    </div>
  );
};

export default function MovieList({ movie }) {
  const result = movie.results;

  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2  xl:grid-cols-3 3xl: felx flex-wrap justify-center">
      {result.map((movie) => (
        <Thambnail key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
