import React from 'react';

function Home({ movies }) { // Receiving movies prop

  // Add robust checks before trying to map
  if (!movies) {
    // This case should ideally be handled by App.js's loading state,
    // but it's a good fallback for safety or if the prop isn't passed at all.
    return <div>No movies data available.</div>;
  }

  // If movies is an empty array, display a message
  if (movies.length === 0) {
    return <div>No movies found.</div>;
  }

  return (
    <section>
      {/* Ensure you are only mapping if movies is an array and has items */}
      {Array.isArray(movies) && movies.length > 0 ? ( // <--- Change: Add Array.isArray check
        movies.map(movie => ( // <--- This is where the error was
          <div key={movie.imdbId || movie.title}> {/* Use a unique key like imdbId if available, or title as fallback */}
            <h2>{movie.title}</h2>
            {movie.poster && <img src={movie.poster} alt={movie.title} />}
            {/* Add more movie details as needed */}
          </div>
        ))
      ) : (
        // Fallback for cases where movies might not be an array or is empty (should be caught by above checks)
        <div>Something went wrong or no movies to display.</div>
      )}
    </section>
  );
}

export default Home;