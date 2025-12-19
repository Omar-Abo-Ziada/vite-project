function MovieCard({ movie }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "src/assets/No_Image_Available.jpg"; // optional fallback

  return (
    <div className="bg-gray-900/80 rounded-xl overflow-hidden shadow-lg transition hover:scale-[1.03] hover:shadow-2xl">
      <img
        src={posterUrl}
        alt={movie.title}
        className="w-full h-72 object-cover"
        loading="lazy"
      />

      <div className="p-3">
        <h2 className="text-white text-sm font-medium truncate">
          {movie.title}
        </h2>
      </div>
    </div>
  );
}

export default MovieCard;
