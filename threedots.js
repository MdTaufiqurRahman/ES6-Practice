// array element add old system

// const ages = [12, 15, 55, 65];
// const ages2 = [55, 89];
// const ages3 = [12, 15, 65];
// const allAges = ages.concat(ages2).concat([99]).concat(ages3);
// console.log(allAges);

//es6      ...(three dots)
const ages = [12, 15, 55, 65];
const ages2 = [55, 89];
const ages3 = [12, 15, 65];
const allAges = [...ages,5, ...ages2, ...ages3];
console.log(allAges);
//get maximum value using ...(three dots)
const x = 800;
const y = 550;
const z = 985;
const bigNumber = [800, 550, 985];
const maximum = Math.max(...bigNumber);
console.log(maximum);
