const array = [23, 44, 12];
let myfunc = (a) => {
  console.log(`object :>> :${a}`);
};
let myFunction = (a) => {
  console.log(`${a}`);
};
const arr2 = [...array, 44, 1233];
myfunc(arr2[1]);
