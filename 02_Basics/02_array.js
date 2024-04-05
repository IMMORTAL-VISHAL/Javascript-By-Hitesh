const marvel_heros = ["thor", "ironman", "spiderman", "loki", "wnada"]

const dc_heros = ["superman", "batman", "wonder-woman", "flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[5][2]);

// const super_heros = marvel_heros.concat(dc_heros)

// console.log(super_heros);

const all_heros = [...marvel_heros, ...dc_heros]

// console.log(all_heros);

const another_array = [1, 2, 3, [5, 6], 7, [8, 9[2, 3, 4]]]
    // console.log(another_array);

const real_another_array = another_array.flat(Infinity);

// console.log(real_another_array);

console.log(Array.isArray("Vishal"));

console.log(Array.from("Vishal"));

console.log(Array.from({ name: "vishal" })); // intersting case this is not converting the array from object alaways return the empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));