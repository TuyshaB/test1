const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const a = prompt('Один из последних просмотреных фильмов?', ''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Один из последних просмотреных фильмов?', ''),
      d = prompt('На сколько оцените его?','')

movies[a] = personalMovieDB[b]
movies[c] = personalMovieDB[d]


