let a = 3,
  b = 2;

/** 
timer functions setTimeout, setInterval
listening to network, querying a database
reading or writing, generally I/O from a resource
subscribing to an event
 
*/

const asyncTaskA = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      a = a * a;
      resolve(a);
    }, 4000);
  });
};

const asyncTaskB = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      b = b + b;
      resolve(b);
    }, 3000);
  });
};

const add = () => {
  console.log(a + b);
};

asyncTaskA().then(add);
asyncTaskB().then(add);
// const performFunctions = async () => {
//   asyncTaskA().then((data) => {
//     console.log("AscynA :" + data);
//   });
//   asyncTaskB().then((data) => {
//     console.log("AscynB :" + data);
//   });
// };

// performFunctions().then(() => {
//   add();
// });
