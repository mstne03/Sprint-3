// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let allDirectors = array.map(movie => movie.director);
  return allDirectors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const moviesDirector = array.filter(movie => movie.director === director);
  return moviesDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const moviesDirector = getMoviesFromDirector(array, director);
  let averageScore = ((moviesDirector
                      .reduce((total, movie) => movie.score 
                                                ? total+movie.score 
                                                : total+0, 0))
                      / moviesDirector.length);
  return averageScore;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const sortedMovies = array
              .sort((a, b) => b.score - a.score)
              .map(movie => movie.title)
              .sort()
              .slice(0, 20);
  return sortedMovies;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const sortedByYear = array.toSorted((a, b) => {
    if (a.year !== b.year)
      return a.year - b.year
    else
      return a.title.localeCompare(b.title);
  });

  return sortedByYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const moviesCategory = array.filter(movie => movie.genre.includes(category));

  return parseFloat(((moviesCategory
        .reduce((total, movie) => movie.score
                                  ? total+movie.score
                                  : total+0, 0)) 
                                  / (moviesCategory.length)).toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  return array.map(movie => {
            const newMovie = {...movie};
            newMovie.duration = newMovie.duration.split(" ").reduce((total, current, index) => {
              
              if (index===0 && current.includes("h")) current = parseInt(current), current*=60;
              else current = parseInt(current);

              return total+current;
            }, 0);

            return newMovie;
          });
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
