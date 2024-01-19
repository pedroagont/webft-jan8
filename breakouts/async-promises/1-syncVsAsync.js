// Synchronous
// - > - > - >
// Sequence
console.log(1); // 1
const name = 'Pedro';
const myFn = () => 10 + 20;
console.log(2); // 2
console.log(3); // 3

// Asynchronous
// - - >
// - >
// - - - >
console.log(1);
setTimeout(() => {
  for (let i = 0; i < 5000000000; i++) {
    // big process happenning here...
  }
  console.log(2);
}, 1000);
console.log(3);

// Callback hell
// Example Malcolm in the Middle Hal fixing a lightbulb:
// https://www.youtube.com/watch?v=AbSehcT19u0

// fixLightbulb(() => {
//   fixShelf(() => {
//     fixDrawer(() => {
//       buyLubricant(() => {
//         fixCar();
//       });
//     });
//   });
// });
