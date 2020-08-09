let a = 3,
  b = 2;

const asyncTaskA = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      a = a * a;
      resolve(a);
    }, 2000);
  });
};

const asyncTaskB = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      b = b + b;
      resolve(b);
    }, 1000);
  });
};

const doTasks = async () => {
  await asyncTaskA().then();
  await asyncTaskB().then(add);
};

//dependent on two independent asynchronous tasks
const add = () => {
  console.log(a + b);
};

doTasks();
