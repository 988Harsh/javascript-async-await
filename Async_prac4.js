const arr = [10, 20, 30, 40, 50, 60];

const getNum = (num) => {
  // debugger;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num);
    }, 20000 / num);
  });
  //   return promise;
};

const promises = [];

arr.forEach((num) => {
  promises.push(getNum(num));
});
//Promise all will use then after all the async funcs are resolved and the data resolved will have the 
//resolved data in an sequential array
Promise.all(promises).then((data) => {
  data.forEach((i) => {
    console.log(i);
  });
});
