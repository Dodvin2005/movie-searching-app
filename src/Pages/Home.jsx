import React, { useEffect, useState } from "react";

function Home() {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  // Fetch movies
  const searchMovie = (name) => {
    if (name.trim() === "") {
      setMovies([]);
      setError("Please enter a movie name");
      return;
    }

    fetch(
      `https://www.omdbapi.com/?s=${encodeURIComponent(
        name
      )}&apikey=f28eabc0`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search);
          setError("");
        } else {
          setMovies([]);
          setError("Movie not found");
        }
      })
      .catch((err) => {
        console.log(err);
        setMovies([]);
        setError("Something went wrong");
      });
  };

  // Load movies when page opens
  useEffect(() => {
    searchMovie("avengers");
  }, []);

  // Search button
  const handleSearch = () => {
    searchMovie(movieName);
  };

  // Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-4"> Search Movies </h1>

        {/* Search box */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="input-group">

              <input type="text" className="form-control" placeholder="Enter movie name..." value={movieName}
                onChange={(e) => setMovieName(e.target.value)}
                onKeyDown={handleKeyDown}
              />

              <button className="btn btn-outline-dark" onClick={handleSearch} > Search </button>

            </div>
          </div>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="alert alert-danger text-center">
          {error}
        </div>
      )}

      {/* Movie Cards */}
      <div className="row g-4">

        {movies.map((movie) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3"
            key={movie.imdbID}
          >
            <div className="card h-100 shadow">

              {/* Movie Image */}
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/300x450?text=No+Poster"
                }
                className="card-img-top"
                alt={movie.Title}
                style={{
                  height: "400px",
                  objectFit: "cover",
                }}
              />

              {/* Movie Details */}
              <div className="card-body">

                <h5 className="card-title">
                  {movie.Title}
                </h5>

                <p className="mb-2">
                  <strong>Year:</strong> {movie.Year}
                </p>

                <p className="mb-2">
                  <strong>Type:</strong> {movie.Type}
                </p>

                <p className="mb-0">
                  <strong>IMDb:</strong> {movie.imdbID}
                </p>

              </div>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Home;