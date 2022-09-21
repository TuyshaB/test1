// const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '')

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// }

// const a = prompt('Один из последних просмотреных фильмов?', ''),
//       b = prompt('На сколько оцените его?',''),
//       c = prompt('Один из последних просмотреных фильмов?', ''),
//       d = prompt('На сколько оцените его?','')

// movies[a] = personalMovieDB[b]
// movies[c] = personalMovieDB[d]


let result = ""
const length = 7

for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += '\n';
}

console.log(result)