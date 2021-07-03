const dataArr = [
    { label: 'Software engineering/development', checked: false },
    { label: 'Design', checked: false },
    { label: 'Product management', checked: false },
    { label: 'Marketing', checked: false },
    { label: 'Operations', checked: false },
    { label: 'Founders/Startups', checked: false },
    { label: 'Finance', checked: false },
    { label: 'Non-profit', checked: true },
    { label: 'Other:', checked: true },
]
const otherString = "this is other string";
const filterArr = dataArr.reduce((arr, curr) => {
    if (curr.checked === true && curr.label !== "Other:") {
        arr.push(curr);
    }
    if (curr.checked === true && curr.label === "Other:") {
        curr.label = otherString;
        arr.push(curr);
    }
    return arr;
}, []);
// const newArr = [];
// const filterArr = dataArr.map((data) => {
//     if (data.checked === true && data.label !== "Other:") {
//         console.log(`아더 아닐때 data`, data)
//         newArr.push(data);
//     }
//     if (data.checked === true && data.label === "Other:") {
//         console.log(`data`, data)
//         data.label = otherString;
//         newArr.push(data);
//     }
// });
console.log(`filterArr`, filterArr)
// console.log(`newArr`, newArr)