//generic: 타입의 적용을 정의할때 하는것이 아닌 호출할때 적용
//generic은 들어오게 되는 타입이 다양할때 활용
const getLength = (arr) => {
    return arr.length;
};
const arr1 = [1, 2, 3];
//const arr1 = [1, 2, '3'];
const arr2 = ['red', 'green', 'blue'];
//const arr2 = ['red', 'green', 'blue',3];
const arr3 = [1, '2', 3];
console.log(getLength(arr1));
console.log(getLength(arr2));
console.log(getLength(arr3));
