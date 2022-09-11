// // Question 1 given a rating, display a star (*) for each full rating and a full stop (.) for each half rating
// function showRating(rating) {
//     let ratings = "";
//     for (let i = 0; i < Math.floor(rating); i++) {
//         ratings += "*";
//         if (i !== Math.floor(rating) - 1) {
//             ratings +=" ";
//         }
//     }
//     if (!Number.isInteger(rating)) {
//         ratings += " .";
//     }
//     return ratings;
// }
// console.log(showRating(3.5));

// Question 2 given an array of numbers, return the prices sorted by low to high
// function sortLowToHigh(numbers) {
//     return numbers.sort((a, b) => a - b);
// }
// console.log(sortLowToHigh([1, 6, 3, 4, 9, 7, 4]))

// Question 3 given an array of objects, return the prices sorted by high to low
// function sortHighToLow(objects) {
//     return objects.sort((a, b) => { return b.price - a.price });
// }
// console.log(
//     sortHighToLow([
//         {id: 1, price: 50},
//         {id: 2, price: 0},
//         {id: 3, price: 500},
//     ])
// )

// Question 4 promises, call this API and return all the posts by any given user id
// async function postByUser(userId){
//     const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const result = await promise.json();
//     const posts = result.filter(element => element.userId === userId);
//     console.log(posts);
// }
// postByUser(1)

// Question 5 Call this API and return the first 6 incomplete todo's from the result
// async function firstSixIncomplete(todo){
//     const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const result = await promise.json();
//     const incompleteTasks = result.filter(element => !element.completed).slice(0,6);
//     console.log(incompleteTasks);
// }
// firstSixIncomplete(6)