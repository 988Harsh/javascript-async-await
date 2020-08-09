//Challenge 1
// Make it give ascending order output using Async/promises or both
const arr = [1, 2, 3, 4, 5, 6];

//It will return non sequentially without synching
const getNum = async (num) => {
  // debugger;
  const promise = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(num);
    }, 2000 / num);
  });
  return promise;
};

//map and foreach are all sequential
arr.map(async (i) => {
  // console.log(await getNum(i));
});

// for (let i = 0; i < arr.length; i++) {
//   console.log(getNum(i));
// }


//solution is either async await or deep chaining func calls shown at end of this files
const main = async () => {

  //This is what is being done inside forloop

  // let num1 = await getNum(arr[0]);
  // console.log(num1);
  // let num2 = await getNum(arr[1]);
  // console.log(num2);
  // let num3 = await getNum(arr[2]);
  // console.log(num3);
  // let num4 = await getNum(arr[3]);
  // console.log(num4);
  // let num5 = await getNum(arr[4]);

  for (let i = 0; i < arr.length; i++) {
    //await resolves data from promise
    console.log(await getNum(i));
  }

  // console.log(num5);
};

main();


//this can also be done but is tedeous and because of this problem we use asyn/await

getNum(arr[0]).then((i) => {
  console.log(i);
  getNum(arr[1]).then((i) => {
    console.log(i);
    getNum(arr[2]).then((i) => {
      console.log(i);
    });
  });
});
