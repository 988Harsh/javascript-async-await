arr = [1, 2, 3, 4, 5, 6];


//Asysn function will always return a Promise
const asyncFunc = async () => {
  const data = await new Promise((res, rej) => {
    res(" Hello World  ");
  });
  // console.log(typeof data); Here data is " Hello World  " as await will resolve the data
  return data.trim();
};

const asyncFunc2 = async () => {
  const data = await new Promise((res, rej) => {
    res(" World  ");
  });
  // console.log(typeof data);
  return data.trim();
};

//forEach is synchronous
arr.forEach((i) => {
  const data = asyncFunc();
});

//await will resolve the data and give only data
const createMain = async () => {
  let str1 = await asyncFunc2();
  let str = await asyncFunc();
  console.log(str1);
  console.log(str);
  console.log("end");
};
createMain();
