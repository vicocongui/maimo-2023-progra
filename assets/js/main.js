/*
Exercises

Tips: 
1. To show the result of each exercise write a consol log with the form: console.log('Ex 1.', value or function).
2. Make some research about the usage of reduce, some and many.
3. Create a js file called utils.js and place all helper functions in it. (Ex 10 and 14)

1) Import songs array using modules.

2. Use the map function to create a new array with the title of each song in uppercase letters.

3. Use the filter function to create a new array with all the songs released before 1975.

4. Use destructuring to create a variable that stores the title of the first song in the array.

5. Use the find function to get the object representing the song "Hotel California".

6. Use the rest operator to create a function that takes any number of arguments and returns their sum. (Tip: Use reduce)

7. Use the map function and template literals to create a new array with strings in the format "Title - Artist (Year)" for each song.

8. Use destructuring and the filter function to create a new array with the titles of all the songs by The Beatles.

9. Use arrow functions and the reduce function to calculate the total number of years between all the songs' release dates. (Tip: Use reduce)

10. Create a module that exports a function to calculate the average release year of the songs in the input array. (Tip: Use reduce.)

11. Use the find function to get the object representing the song with the longest title.

12. Use destructuring and template literals to log the title, artist and year of the first element of the array.

13. Use the rest operator to create a new array without the first element.

14. Import the filter() function from a utils.js module and use it to create a new array with all the songs that have "Love" in the title.

15. Use the every() method to check if all the songs have titles that are 5 or more characters long.

16. Use the some() method to check if there are any songs from the 80s.

17. Use a template literal to create a string that says "The Beatles released Let It Be in 1970."

18. Use the map() method to create a new array with just the artist names.

19. Create a function called randomMovie that returns one movie from the songs array randomly. Log the call of this function 3 times.

20. Write your own function using at least 3 concepts.*/

/*1*/
import songs from './songs.js';
console.log(songs);

/*2*/
const canciones = songs.map((cancion) => {
    return { title: cancion.title.toUpperCase() };
});
console.log(canciones);

/*3*/
const newSong = songs.filter(({year}) => {
    return year < 1975;
});
console.log(newSong);

/*4*/
//destructuring es de la clave por ejemplo: artist, title, year
/*title(alias): title(clave)*/
const primerCancion = songs[0].title;
console.log(primerCancion);

/*5*/
const encontrar = songs.find(({title}) => {
    return title === 'Hotel California';
});
console.log(encontrar);

/*6*/
const ejSeis = (...values) => values.reduce((acc, curr) => acc + curr, 0);
console.log(ejSeis(1, 2, 10, 20));

/*7*/
const ejSiete = songs.map(({title,artist,year}) => {
    return `${title} - ${artist} (${year})`;
});
console.log(ejSiete);

/*8*/
const beatles = songs.filter(({artist}) => {
    return artist === 'The Beatles';
});
console.log(beatles);

/*9*/
const sumas = songs.reduce(
    (accumulator, {year}) => accumulator + year,
    0
  );
console.log(sumas);

/*10*/
const promedio = parseInt(sumas/songs.length);
console.log(promedio);

/*11*/
const longest = songs.find(song => {
    return song.title.length === Math.max(...songs.map(song => song.title.length));
  });
console.log(longest);
//En resumen, los tres puntos antes del nombre de la variable songs se utilizan para crear un array con objetos separados

/*12*/
const primerElemento = songs[0];
console.log(`${primerElemento.artist} - ${primerElemento.title} - ${primerElemento.year}.`)

/*13*/
const [ ,...chauPrimeraCancion] = songs;
console.log(chauPrimeraCancion);

/*14*/
import cancionLove from "../js/utils.js";
console.log(cancionLove);

/*15*/
const longTitulos = songs.every(function({title}) {
    return title.length >= 5;
});
  
console.log(longTitulos);

/*16*/
const anioCancion = songs.some(function({year}) {
    return year >= 1980 && year < 1990;
});
  
console.log(anioCancion);

/*17*/
const encontrarBeatles = songs.find(({artist}) => {
    return artist === 'The Beatles';
});
console.log(`${encontrarBeatles.artist} realised ${encontrarBeatles.title} in ${encontrarBeatles.year}.`);
 
/*18*/
const artistasOnly = songs.map((cancion) => {
    return { artist: cancion.artist };
});
console.log(artistasOnly);

/*19*/
const randomSongs = (max, min) => songs[Math.floor[Math.random() * (min -max) + min]]
console.log(randomSongs[songs.length]);

/*20*/
const cancionChild = songs.filter(({title}) => title.includes('Child'));
console.log(cancionChild);