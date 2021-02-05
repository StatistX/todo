var moment = require('moment');
require('moment/locale/ru');
// console.log(moment.locale());
console.log(moment().format('LLLL'));
// const reciver = {
//   orgstructureIds: [1, 2, 4],
//   categoryIds: [4, 6, 7],
//   experience: [3, 5, 7],
//   age: [89, 89, 567],
//   sex: [45, 4567, 78],
//   employeeIds: [2, 4, 6, 67],
//   isAll: false,
// };

// const allRecivers = {
//   ...Object.keys(reciver)
//     .reduce((a, prop) => ({ ...a, [prop]: [] }), {}),
//   isAll: true
// };

// console.log(reciver);
// console.log(allRecivers);

// const all = { ...initialState.reciver, isAll: true};



// const subChildrenPropsCalc = Object.entries(subChildrenProps.rewriteProps || {})
//   .reduce((a, [propName, func]) => ({
//     ...a,
//     [propName]: func({ value, name, index: i }),
//   }), {});

//   const calcProportionPercent = (total, part) => {
//     return Math.round(((total - part) * 100) / total);
//   }

//   const abc = calcProportionPercent(10, 5);
//   console.log(abc)


