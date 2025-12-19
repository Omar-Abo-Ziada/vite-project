import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Search from "./Components/Search/Search";
import Loader from "./Components/Loader/Loader";
import MovieCard from "./Components/Movie Card/MovieCard";
import { useDebounce } from "react-use";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
  const baseUrl = "https://api.themoviedb.org/3";

  const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };

  useEffect(() => {
    console.log("Search Term Changed:", searchTerm);
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    fetchMovies();
  }, []);

  useDebounce(
    () => {
      setDebouncedSearchTerm(searchTerm);
    },
    500,
    [searchTerm]
  );

  const fetchMovies = async (searchTerm = "") => {
    try {
      setIsLoading(true);
      setErrMessage("");

      let endPoint = searchTerm
        ? `${baseUrl}/search/movie?query=${encodeURIComponent(searchTerm)}`
        : `${baseUrl}/movie/popular`;

      const response = await fetch(endPoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();

      if (!data?.results?.length) {
        setErrMessage("No movies found.");
        setMovies([]);
        return;
      }

      // throw new Error("Failed to fetch movies"); // simulate error for testing

      await delay(500); // simulate loading delay

      setMovies(data.results);
    } catch (error) {
      console.error(error);
      setErrMessage("Failed to fetch movies. Try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom_left,#030A1B_34%,#9747FF_100%)]">
      <Hero />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <section className="mt-10 px-6">
        <h1 className="text-center text-2xl font-semibold text-yellow-50">
          Movies
        </h1>

        {isLoading && (
          <div className="min-h-[40vh] flex items-center justify-center">
            <Loader />
          </div>
        )}

        {!isLoading && errMessage && (
          <p className="text-center text-red-500 mt-8">{errMessage}</p>
        )}

        {!isLoading && !errMessage && movies.length === 0 && (
          <p className="text-center text-yellow-50 mt-8">No movies found.</p>
        )}

        {!isLoading && !errMessage && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
