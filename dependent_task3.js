
let promise = 0;
const AsyncTaskA = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      promise++;
      resolve(num * num);
    }, 2000);
  });
};

const AsyncTaskB = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      promise++;
      resolve(num + num);
    }, 3000);
  });
};

let x, y;
let c = 0;


Promise.all([AsyncTaskA(2), AsyncTaskB(3)])
  .then((data) => {
    [x, y] = data;
  })
  .finally(() => {
    // console.log(c);
  });
