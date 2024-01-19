// Promises
// pending
// resolved
// rejected

const getRandomNumber = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 10);

      if (randomNum < 5) {
        reject(new Error('Number less than 5!'));
      } else {
        resolve(randomNum);
      }
    }, 2000);
  });
};

// const result = getRandomNumber();
// console.log(result);

// THEN CATCH SYNTAX
// getRandomNumber()
//   .then((randomNum) => {
//     console.log(randomNum);
//     return randomNum * 2;
//   })
//   .then((randomNumTimes2) => {
//     console.log(randomNumTimes2);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ASYNC AWAIT SYNTAX
const getRandomNumberAsync = async () => {
  try {
    const randomNum = await getRandomNumber();
    const randomNumTimes2 = randomNum * 2;
    console.log(randomNumTimes2);
  } catch (err) {
    console.log(err);
  }
};

getRandomNumberAsync();
