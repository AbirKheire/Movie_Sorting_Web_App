const movies = [
  {
    "title": "Inception",
    "year": 2010,
    "rating": 8.8,
    "duration": 148,
    "genre": ["Action", "Adventure", "Sci-Fi"],
    "image": "assets/inception.jpg"
  },
  {
    "title": "The Dark Knight",
    "year": 2008,
    "rating": 9.0,
    "duration": 152,
    "genre": ["Action", "Crime", "Drama"],
    "image": "assets/the_dark_knight.jpg"
  },
  {
    "title": "Interstellar",
    "year": 2014,
    "rating": 8.6,
    "duration": 169,
    "genre": ["Adventure", "Drama", "Sci-Fi"],
    "image": "assets/interstellar.jpg"
  },
  {
    "title": "Parasite",
    "year": 2019,
    "rating": 8.6,
    "duration": 132,
    "genre": ["Comedy", "Drama", "Thriller"],
    "image": "assets/parasite.jpg"
  },
  {
    "title": "The Godfather",
    "year": 1972,
    "rating": 9.2,
    "duration": 175,
    "genre": ["Crime", "Drama"],
    "image": "assets/the_godfather.jpg"
  },
  {
    "title": "Pulp Fiction",
    "year": 1994,
    "rating": 8.9,
    "duration": 154,
    "genre": ["Crime", "Drama"],
    "image": "assets/pulp_fiction.jpg"
  },
  {
    "title": "Forrest Gump",
    "year": 1994,
    "rating": 8.8,
    "duration": 142,
    "genre": ["Drama", "Romance"],
    "image": "assets/forrest_gump.jpg"
  },
  {
    "title": "The Matrix",
    "year": 1999,
    "rating": 8.7,
    "duration": 136,
    "genre": ["Action", "Sci-Fi"],
    "image": "assets/the_matrix.jpg"
  },
  {
    "title": "Avengers: Endgame",
    "year": 2019,
    "rating": 8.4,
    "duration": 181,
    "genre": ["Action", "Adventure", "Drama"],
    "image": "assets/avengers.jpg"
  },
  {
    "title": "The Shawshank Redemption",
    "year": 1994,
    "rating": 9.3,
    "duration": 142,
    "genre": ["Drama"],
    "image": "assets/shawshank_redemption.jpg"
  },
  {
    "title": "Gladiator",
    "year": 2000,
    "rating": 8.5,
    "duration": 155,
    "genre": ["Action", "Adventure", "Drama"],
    "image": "assets/gladiator.jpg"
  },
  {
    "title": "Titanic",
    "year": 1997,
    "rating": 7.8,
    "duration": 195,
    "genre": ["Drama", "Romance"],
    "image": "assets/titanic.jpg"
  },
  {
    "title": "The Lion King",
    "year": 1994,
    "rating": 8.5,
    "duration": 88,
    "genre": ["Animation", "Adventure", "Drama"],
    "image": "assets/the_lion_king.jpg"
  },
  {
    "title": "Saving Private Ryan",
    "year": 1998,
    "rating": 8.6,
    "duration": 169,
    "genre": ["Drama", "War"],
    "image": "assets/saving_private_ryan.jpg"
  },
  {
    "title": "The Green Mile",
    "year": 1999,
    "rating": 8.6,
    "duration": 189,
    "genre": ["Crime", "Drama", "Fantasy"],
    "image": "assets/the_green_mile.jpg"
  },
  {
    "title": "Schindler's List",
    "year": 1993,
    "rating": 9.0,
    "duration": 195,
    "genre": ["Biography", "Drama", "History"],
    "image": "assets/schindler's_list.jpg"
  },
  {
    "title": "The Departed",
    "year": 2006,
    "rating": 8.5,
    "duration": 151,
    "genre": ["Crime", "Drama", "Thriller"],
    "image": "assets/the_departed.jpg"

  },
  {
    "title": "Whiplash",
    "year": 2014,
    "rating": 8.5,
    "duration": 106,
    "genre": ["Drama", "Music"]
  },
  {
    "title": "The Prestige",
    "year": 2006,
    "rating": 8.5,
    "duration": 130,
    "genre": ["Drama", "Mystery", "Sci-Fi"]
  },
  {
    "title": "Django Unchained",
    "year": 2012,
    "rating": 8.4,
    "duration": 165,
    "genre": ["Drama", "Western"]
  },
  {
    "title": "The Wolf of Wall Street",
    "year": 2013,
    "rating": 8.2,
    "duration": 180,
    "genre": ["Biography", "Comedy", "Crime"]
  },
  {
    "title": "Blade Runner 2049",
    "year": 2017,
    "rating": 8.0,
    "duration": 164,
    "genre": ["Action", "Drama", "Sci-Fi"]
  },
  {
    "title": "Joker",
    "year": 2019,
    "rating": 8.4,
    "duration": 122,
    "genre": ["Crime", "Drama", "Thriller"]
  },
  {
    "title": "Logan",
    "year": 2017,
    "rating": 8.1,
    "duration": 137,
    "genre": ["Action", "Drama", "Sci-Fi"]
  },
  {
    "title": "Spider-Man: Into the Spider-Verse",
    "year": 2018,
    "rating": 8.4,
    "duration": 117,
    "genre": ["Animation", "Action", "Adventure"]
  },
  {
    "title": "Mad Max: Fury Road",
    "year": 2015,
    "rating": 8.1,
    "duration": 120,
    "genre": ["Action", "Adventure", "Sci-Fi"]
  },
  {
    "title": "A Beautiful Mind",
    "year": 2001,
    "rating": 8.2,
    "duration": 135,
    "genre": ["Biography", "Drama"]
  },
  {
    "title": "La La Land",
    "year": 2016,
    "rating": 8.0,
    "duration": 128,
    "genre": ["Comedy", "Drama", "Music"]
  },
  {
    "title": "The Grand Budapest Hotel",
    "year": 2014,
    "rating": 8.1,
    "duration": 99,
    "genre": ["Adventure", "Comedy", "Crime"]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  populateFilters();
  displayMovies(movies);
  
  // Reset filters button functionality
  const resetButton = document.getElementById("resetFilters");
  resetButton.addEventListener("click", () => {
      // Réinitialiser les filtres et afficher tous les films
      document.getElementById("genreFilter").value = "";
      document.getElementById("ratingFilter").value = "";
      document.getElementById("sortOption").value = "";
      applyFilters();
  });
});

function populateFilters() {
  const genreFilter = document.getElementById("genreFilter");
  const ratingFilter = document.getElementById("ratingFilter");
  const genres = new Set();
  const ratings = new Set();

  movies.forEach(movie => {
      movie.genre.forEach(genre => genres.add(genre));
      ratings.add(movie.rating);
  });

  genres.forEach(genre => {
      const option = document.createElement("option");
      option.value = genre;
      option.textContent = genre;
      genreFilter.appendChild(option);
  });

  ratings.forEach(rating => {
      const option = document.createElement("option");
      option.value = rating;
      option.textContent = rating;
      ratingFilter.appendChild(option);
  });
}

function displayMovies(movies) {
  const movieContainer = document.getElementById("movieContainer");
  movieContainer.innerHTML = ""; // Réinitialiser la liste des films

  movies.forEach(movie => {
      const card = document.createElement("div");
      card.classList.add("movie-card");

      const imageUrl = movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : "assets/default-movie.jpg"; // Image par défaut si absente

      card.innerHTML = `
          <img src="${imageUrl}" alt="${movie.title}">
          <h2>${movie.title} (${new Date(movie.release_date).getFullYear()})</h2>
          <p class="rating">Note: ${movie.vote_average.toFixed(1)}</p>
          <p class="duration">Durée: ${movie.runtime || "N/A"} min</p>
          <p>Genres: ${movie.genre_ids.join(", ")}</p>
          <button class="recommend-btn" onclick="recommendMovie('${movie.id}')">Recommander</button>
      `;

      movieContainer.appendChild(card);
  });
}


function applyFilters() {
  const genreFilter = document.getElementById("genreFilter").value;
  const ratingFilter = document.getElementById("ratingFilter").value;
  const sortOption = document.getElementById("sortOption").value;

  let filteredMovies = movies;

  // Filter by genre
  if (genreFilter) {
      filteredMovies = filteredMovies.filter(movie => movie.genre.includes(genreFilter));
  }

  // Filter by rating
  if (ratingFilter) {
      filteredMovies = filteredMovies.filter(movie => movie.rating == ratingFilter);
  }

  // Sort by rating or duration
  if (sortOption) {
      filteredMovies.sort((a, b) => a[sortOption] - b[sortOption]);
  }

  // Display filtered and sorted movies
  displayMovies(filteredMovies);
}

function recommendMovie(selectedTitle) {
  const selectedMovie = movies.find(movie => movie.title === selectedTitle);
  if (!selectedMovie) {
      alert("Film non trouvé.");
      return;
  }

  // algorithm for recs
  const recommendations = movies
      .filter(movie => movie.title !== selectedTitle) 
      .map(movie => {
          const commonGenres = movie.genre.filter(genre => selectedMovie.genre.includes(genre)).length;
          const ratingDifference = Math.abs(movie.rating - selectedMovie.rating);
          const durationDifference = Math.abs(movie.duration - selectedMovie.duration);
          const maxDurationDiff = selectedMovie.duration * 0.2; // 

          return {
              ...movie,
              commonGenres,
              ratingDifference,
              durationDifference,
              isValid: (ratingDifference <= 0.5 && durationDifference <= maxDurationDiff)
          };
      })
      .filter(movie => movie.isValid) // filters and keeps only the movies that fit the criterias
      .sort((a, b) => {
          // sorting by genre, rating and duration
          if (b.commonGenres !== a.commonGenres) {
              return b.commonGenres - a.commonGenres;
          } else if (a.ratingDifference !== b.ratingDifference) {
              return a.ratingDifference - b.ratingDifference;
          } else {
              return a.durationDifference - b.durationDifference;
          }
      })
      .slice(0, 3); // selects 3 first movies highest in the ranking

  // show recs
  if (recommendations.length === 0) {
      alert("Aucune recommandation trouvée.");
      return;
  }

  const recommendationTitles = recommendations.map(movie => `- ${movie.title} (${movie.year})`).join("\n");
  alert(`Films recommandés pour "${selectedTitle}":\n\n${recommendationTitles}`);
}


const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-FR&page=1`;

// Fonction pour récupérer les films depuis l'API
async function fetchMovies() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        if (data.results) {
            displayMovies(data.results);
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des films :", error);
    }
}

// Lancer la récupération des films au chargement
document.addEventListener("DOMContentLoaded", fetchMovies);